import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Navbar from "../Navbar/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Accordion from "react-bootstrap/Accordion";
import "./ManagerPage.css";
import ModalObituario from "../Modal/ModalObituario.js";
import ModalObituarioPersonales from "../Modal/ModalObituarioPersonales";

function ManagerPage() {
  const { logOut } = useContext(LoginContext);
  const [records, setRecords] = useState([]);
  const [image, setImage] = useState({ data: "" });
  // const [form, setForm] = useState({
  //   date: "",
  //   nombre: "",
  //   segundoNombre: "",
  //   paterno: "",
  //   materno: "",
  //   mesaggesWall: [],
  //   lugarVelatorio: "",
  //   lugarResponso: "",
  //   fechaResponso: "",
  //   lugarCementerio: "",
  // });

  const [updateData, setUpdateData] = useState({
    id: "",
    date: "",
    nombre: "",
    segundoNombre: "",
    paterno: "",
    materno: "",
  });

  const [updateFuneral, setUpdateFuneral] = useState({
    id: "",
    lugarVelatorio: "",
    lugarResponso: "",
    fechaResponso: "",
    lugarCementerio: "",
  });

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL_RECORD}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records.data);
    }

    getRecords();

    return;
  }, [records.length]);

  // function updateForm(value) {
  //   return setForm((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }

  // async function addObituario(e) {
  //   e.preventDefault();
  //   const token = sessionStorage.getItem("token");
  //   const newPerson = { ...form };
  //   await fetch(`${process.env.REACT_APP_SERVER_URL_ADD}`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newPerson),
  //   }).catch((error) => {
  //     window.alert(`${error.response.status} ${error.response.statusText}`);
  //     return;
  //   });
  //   setForm({
  //     date: "",
  //     nombre: "",
  //     segundoNombre: "",
  //     paterno: "",
  //     materno: "",
  //     lugarVelatorio: "",
  //     lugarResponso: "",
  //     fechaResponso: "",
  //     lugarCementerio: "",
  //   });
  //   window.location.reload(false);
  // }

  async function addImage(id, e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    let formData = new FormData();
    formData.append("imgDeceso", image.data);
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL_ADDIMAGE}/${id}`,
      {
        method: "POST",
        headers: {
          authorization: `${token}`,
        },
        body: formData,
      }
    ).catch((error) => {
      window.alert(error);
      return;
    });
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

  // async function updatePersonales(e) {
  //   e.preventDefault();
  //   const token = sessionStorage.getItem("token");
  //   const id = updateData.id;
  //   const editedPerson = {
  //     id: updateData.id,
  //     date: updateData.date,
  //     nombre: updateData.nombre,
  //     segundoNombre: updateData.segundoNombre,
  //     paterno: updateData.paterno,
  //     materno: updateData.materno,
  //   };
  //   await fetch(`${process.env.REACT_APP_SERVER_URL_UPDATEPERSONALES}/${id}`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(editedPerson),
  //   }).catch((error) => {
  //     window.alert(error);
  //     return;
  //   });
  //   window.location.reload(false);
  // }

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
  }

  // async function updateFuneralData(e) {
  //   e.preventDefault();
  //   const token = sessionStorage.getItem("token");
  //   const id = updateFuneral.id;
  //   const editedFuneral = {
  //     lugarVelatorio: updateFuneral.lugarVelatorio,
  //     lugarResponso: updateFuneral.lugarResponso,
  //     fechaResponso: updateFuneral.fechaResponso,
  //     lugarCementerio: updateFuneral.lugarCementerio,
  //   };
  //   await fetch(`${process.env.REACT_APP_SERVER_URL_UPDATEFUNERAL}/${id}`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(editedFuneral),
  //   }).catch((error) => {
  //     window.alert(error);
  //     return;
  //   });
  //   window.location.reload(false);
  // }

  async function deleteRecord(id) {
    const token = sessionStorage.getItem("token");
    await fetch(`${process.env.REACT_APP_SERVER_URL_DELETE}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      window.alert(error);
      return;
    });
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

  const [modalShow, setModalShow] = useState(false);
  const [modalPersonalesShow, setModalPersonalesShow] = useState(false);

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

        <main className="managerPageMainContainer">
          <h1>Manager de Obituario</h1>
          <button
            type="submit"
            className="btnLogoutObituario"
            onClick={() => logOut()}
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
                    <h5 className="managerDecesoNombre">
                      {deceso.nombre} {deceso.paterno}
                    </h5>
                    <p className="managerDecesoFecha">{deceso.date}</p>
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
                      enctype="multipart/form-data"
                    >
                      <input
                        type="file"
                        name="imgDeceso"
                        id="imgDeceso"
                        accept="image/*"
                        filename={image.data}
                        onChange={handleFileChange}
                      ></input>
                      <button type="submit" class="btnCtrlObituario">
                        Agregar imagen
                      </button>
                    </form>

                    <Accordion class="accordion" id="accordionExample">
                      <Accordion.Item eventKey="0" class="accordion-item">
                        <Accordion.Header
                          class="accordion-header"
                          id="headingOne"
                        >
                          Eliminar
                        </Accordion.Header>

                        <Accordion.Body class="accordion-body">
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
                    {/* Fin de collapse accordion */}
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
