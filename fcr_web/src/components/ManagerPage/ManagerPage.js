import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ManagerPage.css";
import { NavLink, useNavigate } from "react-router-dom";

function ManagerPage() {
  const [records, setRecords] = useState([]);

  const currentDate = new Date();
  const timeStamp = currentDate.getTime().toString();

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

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
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function addObituario(e) {
    e.preventDefault();
    const newPerson = { ...form, img: timeStamp };
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
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
    navigate("/manager");
  }

  async function addImage(id, name, file) {
    const body = { name: "imagetest" };
    await fetch(`http://localhost:5000/record/addImage/${id}`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: JSON.stringify(body),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    navigate("/manager");
  }

  async function updatePersonales(id) {
    // e.preventDefault();
    const editedPerson = {
      date: form.date,
      nombre: form.nombre,
      segundoNombre: form.segundoNombre,
      paterno: form.paterno,
      materno: form.materno,
      img: form.img,
    };
    await fetch(`http://www.cristoreyangol.cl:5000/updatePersonales/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({
      date: "",
      nombre: "",
      segundoNombre: "",
      paterno: "",
      materno: "",
      img: "",
    });
    navigate("/manager");
  }

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  const iconCross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
                    onChange={(e) => updateForm({ date: e.target.value })}
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
                Actualizar datos personales
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
                onSubmit={updatePersonales}
                className="formContainer"
                id="formActualizarPersonales"
              >
                <h5>Datos del fallecido</h5>
                <div className="inputContainer">
                  <label htmlFor="date">Fecha del fallecimiento:</label>
                  <input type="date" name="date" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="nombreDeceso">Nombre del fallecido:</label>
                  <input type="text" name="nombreDeceso" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="segundoNombreDeceso">
                    Segundo Nombre del fallecido:
                  </label>
                  <input type="text" name="segundoNombreDeceso" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="paternoDeceso">Apellido paterno:</label>
                  <input type="text" name="paternoDeceso" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="maternoDeceso">Apellido materno:</label>
                  <input type="text" name="maternoDeceso" />
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
                Actualizar datos de funeral
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
                action=""
                className="formContainer"
                id="formActualizarFuneral"
              >
                <h5>Datos del funeral</h5>
                <div className="inputContainer">
                  <label htmlFor="lugarVelatorio">lugar velatorio:</label>
                  <input type="text" name="lugarVelatorio" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="lugarResponso">lugar responso:</label>
                  <input type="text" name="lugarResponso" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="fechaResponso">fecha responso:</label>
                  <input type="date" name="fechaResponso" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="lugarCementerio">lugar cementerio:</label>
                  <input
                    list="cementerios"
                    type="text"
                    name="otrolugarCementerio"
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
                <NavLink to={`/${deceso._id}`} className="managerDecesoPersona">
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
                      data-record-id={deceso._id}
                    >
                      Editar datos personales
                    </button>
                    <button
                      className="btnCtrlObituario"
                      data-bs-toggle="modal"
                      data-bs-target="#modalActualizarFuneral"
                    >
                      Editar datos funeral
                    </button>
                    <button
                      className="btnCtrlObituario"
                      onClick={() => deleteRecord(deceso._id)}
                    >
                      Eliminar del obituario
                    </button>
                  </div>

                  <form className="formImg" id="formImg">
                    <button
                      type="submit"
                      class="btnCtrlObituario"
                      onClick={() => addImage(deceso._id)}
                    >
                      Agregar imagen
                    </button>
                    <input
                      type="file"
                      name="imgDeceso"
                      accept="image/png, image/jpeg"
                      id="imgDeceso"
                      placeholder="File"
                    ></input>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ManagerPage;
