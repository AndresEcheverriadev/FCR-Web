import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RecordsService } from "../../Services/RecordsService";

function ModalObituarioPersonales(props) {
  useEffect(() => {
    setPersonData(props.data);
  }, [props.data]);

  const [personData, setPersonData] = useState({
    id: "",
    date: "",
    nombre: "",
    segundoNombre: "",
    paterno: "",
    materno: "",
  });

  const closeModal = () => {
    setPersonData({
      id: "",
      date: "",
      nombre: "",
      segundoNombre: "",
      paterno: "",
      materno: "",
    });
    props.onHide();
  };

  async function updatePersonales(e) {
    e.preventDefault();
    const id = personData.id;
    const editedPerson = {
      date: personData.date,
      nombre: personData.nombre,
      segundoNombre: personData.segundoNombre,
      paterno: personData.paterno,
      materno: personData.materno,
    };
    RecordsService.updateData(id, editedPerson);
    window.location.reload(false);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton onClick={() => closeModal()}>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar datos personales
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              value={personData.date}
              onChange={(e) =>
                setPersonData({ ...personData, date: e.target.value })
              }
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="nombreDeceso">Nombre del fallecido:</label>
            <input
              type="text"
              name="nombreDeceso"
              value={personData.nombre}
              onChange={(e) =>
                setPersonData({ ...personData, nombre: e.target.value })
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
              value={personData.segundoNombre}
              onChange={(e) =>
                setPersonData({
                  ...personData,
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
              value={personData.paterno}
              onChange={(e) =>
                setPersonData({
                  ...personData,
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
              value={personData.materno}
              onChange={(e) =>
                setPersonData({
                  ...personData,
                  materno: e.target.value,
                })
              }
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => closeModal()}>Cerrar</Button>
        <Button
          type="submit"
          form="formActualizarPersonales"
          className="btn btn-primary btnAgregar"
        >
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalObituarioPersonales;
