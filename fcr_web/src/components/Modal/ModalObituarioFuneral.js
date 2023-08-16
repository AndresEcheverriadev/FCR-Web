import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RecordsService } from "../../Services/RecordsService";

function ModalObituarioFuneral(props) {
  useEffect(() => {
    setFuneralData(props.data);
  }, [props.data]);

  const [funeralData, setFuneralData] = useState({
    id: "",
    lugarVelatorio: "",
    lugarResponso: "",
    fechaResponso: "",
    lugarCementerio: "",
  });

  const closeModal = () => {
    setFuneralData({
      id: "",
      lugarVelatorio: "",
      lugarResponso: "",
      fechaResponso: "",
      lugarCementerio: "",
    });
    props.onHide();
  };

  useEffect(() => {
    console.log(funeralData);
  }, [funeralData]);

  async function updateFuneral(e) {
    e.preventDefault();
    const id = funeralData.id;
    const editedFuneral = {
      lugarVelatorio: funeralData.lugarVelatorio,
      lugarResponso: funeralData.lugarResponso,
      fechaResponso: funeralData.fechaResponso,
      lugarCementerio: funeralData.lugarCementerio,
    };
    RecordsService.updateFuneral(id, editedFuneral);
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
          Editar datos de funeral
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => updateFuneral(e)}
          className="formContainer"
          id="formActualizarFuneral"
        >
          <hr />
          <div className="inputContainer">
            <label htmlFor="lugarVelatorio">Lugar Velatorio:</label>
            <input
              name="lugarVelatorio"
              type="text"
              value={funeralData.lugarVelatorio}
              onChange={(e) =>
                setFuneralData({
                  ...funeralData,
                  lugarVelatorio: e.target.value,
                })
              }
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lugarResponso">Lugar Responso:</label>
            <input
              name="lugarResponso"
              type="text"
              value={funeralData.lugarResponso}
              onChange={(e) =>
                setFuneralData({
                  ...funeralData,
                  lugarResponso: e.target.value,
                })
              }
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="fechaResponso">Fecha Responso:</label>
            <input
              name="fechaResponso"
              type="date"
              value={funeralData.fechaResponso}
              onChange={(e) =>
                setFuneralData({
                  ...funeralData,
                  fechaResponso: e.target.value,
                })
              }
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lugarCementerio">Lugar Cementerio:</label>
            <input
              type="text"
              name="lugarCementerio"
              value={funeralData.lugarCementerio}
              onChange={(e) =>
                setFuneralData({
                  ...funeralData,
                  lugarCementerio: e.target.value,
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
          form="formActualizarFuneral"
          className="btn btn-primary btnAgregar"
        >
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalObituarioFuneral;
