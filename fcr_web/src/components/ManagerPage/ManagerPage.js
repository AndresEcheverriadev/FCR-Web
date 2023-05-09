import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import "./ManagerPage.css";

function ManagerPage() {
  const { logOut } = useContext(LoginContext);
  const [records, setRecords] = useState([]);
  const [image, setImage] = useState({ data: "" });
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    date: "",
    nombre: "",
    segundoNombre: "",
    paterno: "",
    materno: "",
    mesaggesWall: [],
    lugarVelatorio: "",
    lugarResponso: "",
    fechaResponso: "",
    lugarCementerio: "",
  });
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
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function addObituario(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const newPerson = { ...form };
    const addRecord = await fetch(`${process.env.REACT_APP_SERVER_URL_ADD}`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(`${error.response.status} ${error.response.statusText}`);
      return;
    });
    setForm({
      date: "",
      nombre: "",
      segundoNombre: "",
      paterno: "",
      materno: "",
      lugarVelatorio: "",
      lugarResponso: "",
      fechaResponso: "",
      lugarCementerio: "",
    });
    window.location.reload(false);
  }
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
    if (response) setStatus(response.statusText);
    window.location.reload(false);
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
  }
  async function updatePersonales(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const id = updateData.id;
    const editedPerson = {
      id: updateData.id,
      date: updateData.date,
      nombre: updateData.nombre,
      segundoNombre: updateData.segundoNombre,
      paterno: updateData.paterno,
      materno: updateData.materno,
    };
    await fetch(`${process.env.REACT_APP_SERVER_URL_UPDATEPERSONALES}/${id}`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    window.location.reload(false);
  }
  function dataFuneralUpdate(
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
  async function updateFuneralData(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const id = updateFuneral.id;
    const editedFuneral = {
      lugarVelatorio: updateFuneral.lugarVelatorio,
      lugarResponso: updateFuneral.lugarResponso,
      fechaResponso: updateFuneral.fechaResponso,
      lugarCementerio: updateFuneral.lugarCementerio,
    };
    await fetch(`${process.env.REACT_APP_SERVER_URL_UPDATEFUNERAL}/${id}`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFuneral),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    window.location.reload(false);
  }
  async function deleteRecord(id) {
    const token = sessionStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL_DELETE}/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    ).catch((error) => {
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

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mnanagerPageMainWrapper">
        <header className="managerHeaderContainer">
          <Navbar />
        </header>
        <div
          class="modal fade"
          id="modalAgregarObituario"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Agregar al obituario
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  onSubmit={addObituario}
                  id="formAdd"
                  className="formContainer"
                >
                  <h5>Datos del fallecido</h5>
                  <div className="inputContainer">
                    <label htmlFor="date">Fecha del fallecimiento:</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={form.date}
                      onChange={(e) =>
                        updateForm({
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="nombreDeceso">Nombre del fallecido:</label>
                    <input
                      type="text"
                      name="nombreDeceso"
                      id="nombreDeceso"
                      value={form.nombre}
                      onChange={(e) => updateForm({ nombre: e.target.value })}
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="segundoNombreDeceso">
                      Segundo Nombre del fallecido:
                    </label>
                    <input
                      type="text"
                      name="segundoNombreDeceso"
                      id="segundoNombreDeceso"
                      value={form.segundoNombre}
                      onChange={(e) =>
                        updateForm({ segundoNombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="paternoDeceso">Apellido paterno:</label>
                    <input
                      type="text"
                      name="paternoDeceso"
                      id="paternoDeceso"
                      value={form.paterno}
                      onChange={(e) => updateForm({ paterno: e.target.value })}
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="maternoDeceso">Apellido materno:</label>
                    <input
                      type="text"
                      name="maternoDeceso"
                      id="maternoDeceso"
                      value={form.materno}
                      onChange={(e) => updateForm({ materno: e.target.value })}
                    />
                  </div>

                  <h5>Datos del funeral</h5>
                  <div className="inputContainer">
                    <label htmlFor="lugarVelatorio">lugar velatorio:</label>
                    <input
                      type="text"
                      name="lugarVelatorio"
                      id="lugarVelatorio"
                      value={form.lugarVelatorio}
                      onChange={(e) =>
                        updateForm({ lugarVelatorio: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="lugarResponso">lugar responso:</label>
                    <input
                      type="text"
                      name="lugarResponso"
                      id="lugarResponso"
                      value={form.lugarResponso}
                      onChange={(e) =>
                        updateForm({ lugarResponso: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="fechaResponso">fecha responso:</label>
                    <input
                      type="date"
                      name="fechaResponso"
                      id="fechaResponso"
                      value={form.fechaResponso}
                      onChange={(e) =>
                        updateForm({ fechaResponso: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="lugarCementerio">lugar cementerio:</label>
                    <input
                      list="cementerios"
                      type="text"
                      name="lugarCementerio"
                      id="lugarCementerio"
                      value={form.lugarCementerio}
                      onChange={(e) =>
                        updateForm({ lugarCementerio: e.target.value })
                      }
                    />
                    <datalist id="cementerios">
                      <option value="Cementerio Parque Angol">
                        Cementerio Parque Angol
                      </option>
                      <option value="Cementerio Parroquial Angol">
                        Cementerio Parroquial Angol
                      </option>
                      <option value="Cementerio municipal Angol">
                        Cementerio Municipal Angol
                      </option>
                    </datalist>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  form="formAdd"
                  class="btn btn-primary btnAgregar"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="modalActualizarDatos"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Editar datos personales
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  onSubmit={(e) => updatePersonales(e)}
                  className="formContainer"
                  id="formActualizarPersonales"
                >
                  <hr />
                  <div className="inputContainer">
                    <label htmlFor="date">Fecha del fallecimiento:</label>
                    <input
                      type="date"
                      name="date"
                      value={updateData.date}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, date: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="nombreDeceso">Nombre del fallecido:</label>
                    <input
                      type="text"
                      name="nombreDeceso"
                      value={updateData.nombre}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, nombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="segundoNombreDeceso">
                      Segundo Nombre del fallecido:
                    </label>
                    <input
                      type="text"
                      name="segundoNombreDeceso"
                      value={updateData.segundoNombre}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          segundoNombre: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="paternoDeceso">Apellido paterno:</label>
                    <input
                      type="text"
                      name="paternoDeceso"
                      value={updateData.paterno}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          paterno: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="maternoDeceso">Apellido materno:</label>
                    <input
                      type="text"
                      name="maternoDeceso"
                      value={updateData.materno}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          materno: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>

                <button
                  type="submit"
                  form="formActualizarPersonales"
                  class="btn btn-primary btnAgregar"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="modalActualizarFuneral"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Editor datos de funeral
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  onSubmit={(e) => updateFuneralData(e)}
                  className="formContainer"
                  id="formActualizarFuneral"
                >
                  <hr />
                  <div className="inputContainer">
                    <label htmlFor="lugarVelatorio">lugar velatorio:</label>
                    <input
                      type="text"
                      name="lugarVelatorio"
                      value={updateFuneral.lugarVelatorio}
                      onChange={(e) =>
                        setUpdateFuneral({
                          ...updateFuneral,
                          lugarVelatorio: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="lugarResponso">lugar responso:</label>
                    <input
                      type="text"
                      name="lugarResponso"
                      value={updateFuneral.lugarResponso}
                      onChange={(e) =>
                        setUpdateFuneral({
                          ...updateFuneral,
                          lugarResponso: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="fechaResponso">fecha responso:</label>
                    <input
                      type="date"
                      name="fechaResponso"
                      value={updateFuneral.fechaResponso}
                      onChange={(e) =>
                        setUpdateFuneral({
                          ...updateFuneral,
                          fechaResponso: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="lugarCementerio">lugar cementerio:</label>
                    <input
                      list="cementerios"
                      type="text"
                      name="otrolugarCementerio"
                      value={updateFuneral.lugarCementerio}
                      onChange={(e) =>
                        setUpdateFuneral({
                          ...updateFuneral,
                          lugarCementerio: e.target.value,
                        })
                      }
                    />
                    <datalist id="cementerios">
                      <option value="Cementerio Parque Angol">
                        Cementerio Parque Angol
                      </option>
                      <option value="Cementerio Parroquial Angol">
                        Cementerio Parroquial Angol
                      </option>
                      <option value="Cementerio municipal Angol">
                        Cementerio Municipal Angol
                      </option>
                    </datalist>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  form="formActualizarFuneral"
                  class="btn btn-primary btnAgregar"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
        <main className="managerPageMainContainer">
          <h1>Manager de Obituario</h1>
          <button
            type="submit"
            class="btnLogoutObituario"
            onClick={() => logOut()}
          >
            Salir
          </button>
          <div className="addObituarioContainer">
            <button
              className="btnAddObituario"
              data-bs-toggle="modal"
              data-bs-target="#modalAgregarObituario"
            >
              Agregar al obituario{iconCross}
            </button>
          </div>
          <div className="managerCardsContainer">
            {records.map((deceso) => {
              return (
                <div className="managerDecesoCard" key={deceso._id}>
                  <NavLink
                    to={`/${deceso._id}`}
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
                        data-bs-toggle="modal"
                        data-bs-target="#modalActualizarDatos"
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

                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${deceso._id}`}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Eliminar
                          </button>
                        </h2>
                        <div
                          id={`collapse${deceso._id}`}
                          class="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <button
                              id={`btnDelete${deceso._id}`}
                              className="btnDeleteObituario"
                              onClick={() => deleteRecord(deceso._id)}
                            >
                              Eliminar del obituario
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
