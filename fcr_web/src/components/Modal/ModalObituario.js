import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RecordsService } from "../../Services/RecordsService";

function ModalObituario(props) {
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

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function addObituario(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const newPerson = { ...form };
    RecordsService.addObituario(
      newPerson.date,
      newPerson.nombre,
      newPerson.segundoNombre,
      newPerson.paterno,
      newPerson.materno,
      newPerson.lugarVelatorio,
      newPerson.lugarResponso,
      newPerson.fechaResponso,
      newPerson.lugarCementerio
    );
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar al obituario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={addObituario} id="formAdd" className="formContainer">
          <h5>Datos del fallecido</h5>
          <div className="inputContainer">
            <label htmlFor="date">Fecha del fallecimiento:</label>
            <input
              type="date"
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
              id="segundoNombreDeceso"
              value={form.segundoNombre}
              onChange={(e) => updateForm({ segundoNombre: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="paternoDeceso">Apellido paterno:</label>
            <input
              type="text"
              id="paternoDeceso"
              value={form.paterno}
              onChange={(e) => updateForm({ paterno: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="maternoDeceso">Apellido materno:</label>
            <input
              type="text"
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
              id="lugarVelatorio"
              value={form.lugarVelatorio}
              onChange={(e) => updateForm({ lugarVelatorio: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lugarResponso">lugar responso:</label>
            <input
              type="text"
              id="lugarResponso"
              value={form.lugarResponso}
              onChange={(e) => updateForm({ lugarResponso: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="fechaResponso">fecha responso:</label>
            <input
              type="date"
              id="fechaResponso"
              value={form.fechaResponso}
              onChange={(e) => updateForm({ fechaResponso: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lugarCementerio">lugar cementerio:</label>
            <input
              list="cementerios"
              type="text"
              id="lugarCementerio"
              value={form.lugarCementerio}
              onChange={(e) => updateForm({ lugarCementerio: e.target.value })}
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
        <Button
          type="submit"
          form="formAdd"
          className="btn btn-primary btnAgregar"
        >
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalObituario;
