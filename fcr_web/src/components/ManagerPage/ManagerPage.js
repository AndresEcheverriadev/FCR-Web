import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ManagerPage.css";
import { NavLink } from "react-router-dom";

function ManagerPage() {
  const [records, setRecords] = useState([]);
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
              <form action="" className="formContainer">
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
                <div className="inputContainer">
                  <label htmlFor="imgDeceso">Imagen obituario:</label>
                  <input
                    type="file"
                    name="imgDeceso"
                    accept="image/png, image/jpeg"
                  />
                </div>
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
              <button type="button" class="btn btn-primary btnAgregar">
                Agregar
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
                <div className="managerDecesoControls">
                  <button className="btnCtrlObituario">
                    Editar datos personales
                  </button>
                  <button className="btnCtrlObituario">
                    Editar datos funeral
                  </button>
                  <button className="btnCtrlObituario">
                    Eliminar del obituario
                  </button>
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
