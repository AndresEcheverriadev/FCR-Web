import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Accordion from "react-bootstrap/Accordion";
import ModalObituario from "../Modal/ModalObituario.js";
import ModalObituarioPersonales from "../Modal/ModalObituarioPersonales.js";
import ModalObituarioFuneral from "../Modal/ModalObituarioFuneral.js";
import { RecordsService } from "../../Services/RecordsService";
import QrCodeModule from "../QrCodeModule/QrCodeModule";
import { AuthService } from "../../Services/AuthService";
import "./ManagerPage.css";

function ManagerPage() {
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    async function getRecords() {
      const response = await RecordsService.getAllRecords();
      setRecords(response.data);
    }
    getRecords();
    return;
  }, [records.length]);

  const [modalShow, setModalShow] = useState(false);
  const [modalPersonalesShow, setModalPersonalesShow] = useState(false);
  const [modalFuneralShow, setModalFuneralShow] = useState(false);

  const [updateData, setUpdateData] = useState({
    id: "",
    date: "",
    nombre: "",
    segundoNombre: "",
    paterno: "",
    materno: "",
  });

  function dataPersonUpdate(
    e,
    idPerson,
    datePerson,
    namePerson,
    segundoPerson,
    paternoPerson,
    maternoPerson
  ) {
    e.preventDefault();
    const newData = {
      id: idPerson,
      date: datePerson,
      nombre: namePerson,
      segundoNombre: segundoPerson,
      paterno: paternoPerson,
      materno: maternoPerson,
    };
    setUpdateData(newData);
    setModalPersonalesShow(true);
  }

  const [updateFuneral, setUpdateFuneral] = useState({
    id: "",
    lugarVelatorio: "",
    lugarResponso: "",
    fechaResponso: "",
    lugarCementerio: "",
  });

  async function dataFuneralUpdate(
    e,
    id,
    lugarVelatorio,
    lugarResponso,
    fechaResponso,
    lugarCementerio
  ) {
    e.preventDefault();
    const newData = {
      id: id,
      lugarVelatorio: lugarVelatorio,
      lugarResponso: lugarResponso,
      fechaResponso: fechaResponso,
      lugarCementerio: lugarCementerio,
    };
    setUpdateFuneral(newData);
    setModalFuneralShow(true);
  }

  const [image, setImage] = useState({ data: "" });

  async function addImage(id, e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imgDeceso", image.data);
    const response = await RecordsService.addImage(id, formData);
    if (response) {
      setImage({ data: "" });
      window.location.reload(false);
    }
  }

  const handleFileChange = (e) => {
    const updateImg = {
      data: e.target.files[0],
    };
    setImage(updateImg);
  };

  async function deleteRecord(id) {
    const response = await RecordsService.removeRecord(id);
    window.location.reload(false);
  }
  const iconCross = (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-plus-lg"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
      />
    </svg>
  );

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <title>Servicios Funerarios Cristo Rey Angol</title>
      </HelmetProvider>
      <div className="mnanagerPageMainWrapper">
        <header className="managerHeaderContainer">
          <Navbar />
        </header>
        <ModalObituario show={modalShow} onHide={() => setModalShow(false)} />
        <ModalObituarioPersonales
          show={modalPersonalesShow}
          onHide={() => setModalPersonalesShow(false)}
          data={updateData}
        />
        <ModalObituarioFuneral
          show={modalFuneralShow}
          onHide={() => setModalFuneralShow(false)}
          data={updateFuneral}
        />

        <main className="managerPageMainContainer">
          <h1>Manager de Obituario</h1>
          <button
            type="submit"
            className="btnLogoutObituario"
            onClick={() => handleLogout()}
          >
            Salir
          </button>
          <div className="addObituarioContainer">
            <button
              className="btnAddObituario"
              data-bs-toggle="modal"
              data-bs-target="#modalAgregarObituario"
              onClick={() => setModalShow(true)}
            >
              Agregar al obituario{iconCross}
            </button>
          </div>
          <div className="managerCardsContainer">
            {records.map((deceso) => {
              return (
                <div className="managerDecesoCard" key={deceso._id}>
                  <NavLink
                    to={`/obituario/${deceso._id}`}
                    className="managerDecesoPersona"
                  >
                    <div className="managerDecesoImagen">
                      <img src={deceso.img} alt="" />
                    </div>
                    <h5 className="managerDecesoNombres">
                      {deceso.nombre} {deceso.segundoNombre} {deceso.paterno}{" "}
                      {deceso.materno}
                    </h5>
                    <p className="managerDecesoFecha">{deceso.date}</p>
                    <div className="decesoDataWrapper">
                      <p className="managerDecesoFechaResponso">
                        fecha responso:{deceso.fechaResponso}
                      </p>
                      <p className="managerDecesoLugarCementerio">
                        lugar cementerio:{deceso.lugarCementerio}
                      </p>
                      <p className="managerDecesoLugarResponso">
                        lugar responso:{deceso.lugarResponso}
                      </p>
                      <p className="managerLugarVelatorio">
                        lugar velatorio:{deceso.lugarVelatorio}
                      </p>
                    </div>
                  </NavLink>
                  <div className="controlsWrapper">
                    <div className="managerDecesoControls">
                      <button
                        className="btnCtrlObituario"
                        onClick={(e) =>
                          dataPersonUpdate(
                            e,
                            deceso._id,
                            deceso.date,
                            deceso.nombre,
                            deceso.segundoNombre,
                            deceso.paterno,
                            deceso.materno
                          )
                        }
                      >
                        Editar datos personales
                      </button>
                      <button
                        className="btnCtrlObituario"
                        data-bs-toggle="modal"
                        data-bs-target="#modalActualizarFuneral"
                        onClick={(e) =>
                          dataFuneralUpdate(
                            e,
                            deceso._id,
                            deceso.lugarVelatorio,
                            deceso.lugarResponso,
                            deceso.fechaResponso,
                            deceso.lugarCementerio
                          )
                        }
                      >
                        Editar datos funeral
                      </button>
                    </div>
                    <form
                      className="formImg"
                      id="formImg"
                      onSubmit={(e) => addImage(deceso._id, e)}
                      encType="multipart/form-data"
                    >
                      <input
                        type="file"
                        name="imgDeceso"
                        id="imgDeceso"
                        accept="image/*"
                        filename={image.data}
                        onChange={handleFileChange}
                      ></input>
                      <button type="submit" className="btnCtrlObituario">
                        Agregar imagen
                      </button>
                    </form>
                    <Accordion className="accordion" id="accordionExample">
                      <Accordion.Item eventKey="0" className="accordion-item">
                        <Accordion.Header
                          className="accordion-header"
                          id="headingOne"
                        >
                          Eliminar
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                          <button
                            id={`btnDelete${deceso._id}`}
                            className="btnDeleteObituario"
                            onClick={() => deleteRecord(deceso._id)}
                          >
                            Eliminar del obituario
                          </button>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <QrCodeModule
                      url={`https://www.cristoreyangol.cl/obituario/${deceso._id}`}
                      id={deceso._id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default ManagerPage;
