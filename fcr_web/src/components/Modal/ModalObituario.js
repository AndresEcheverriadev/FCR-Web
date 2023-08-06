import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
    await fetch(`${process.env.REACT_APP_SERVER_URL_ADD}`, {
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
              onChange={(e) => updateForm({ segundoNombre: e.target.value })}
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
              onChange={(e) => updateForm({ lugarVelatorio: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lugarResponso">lugar responso:</label>
            <input
              type="text"
              name="lugarResponso"
              id="lugarResponso"
              value={form.lugarResponso}
              onChange={(e) => updateForm({ lugarResponso: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="fechaResponso">fecha responso:</label>
            <input
              type="date"
              name="fechaResponso"
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
              name="lugarCementerio"
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
