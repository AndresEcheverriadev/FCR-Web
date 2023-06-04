import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import "./PersonPage.css";

function PersonPage() {
  const [record, setRecord] = useState({});
  const { personId } = useParams();
  const [msgText, setMsgText] = useState({
    mesagge: "",
    author: "",
  });
  const inputMesagge = document.getElementById("inputMesagge");
  const inputAuthor = document.getElementById("inputAuthor");
  useEffect(() => {
    async function getPerson() {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL_RECORD}/${personId}`
      );
      const record = await response.json();
      setRecord(record.data);
    }
    if (!record) {
      getPerson();
    }
  }, [record]);

  const sendMesagge = async (id) => {
    const newMesagge = {
      author: msgText.author,
      mesagge: msgText.mesagge,
    };
    if (newMesagge.author && newMesagge.mesagge) {
      await fetch(`${process.env.REACT_APP_SERVER_URL_MESAGGES}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMesagge),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      msgText.author = "";
      msgText.mesagge = "";
      inputAuthor.value = "";
      inputMesagge.value = "";
    } else {
      alert("Debe escribir su nombre y un mensaje");
    }
  };
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
    <div className="personPageMainWrapper">
      <HelmetProvider>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <meta charset="utf-8"></meta>
          <meta http-equiv="Content-Type" content="text/html;"></meta>
          <title>
            Obituario {`${record?.nombre}`}{" "}
            {`${record?.paterno}-Funeraria Cristo Rey Angol`}
          </title>
          <meta
            http-equiv="title"
            content={`Obituario de ${record?.nombre} ${record?.paterno}-Funeraria Cristo Rey Angol`}
          ></meta>
          <meta
            name="title"
            content={`Obituario de ${record?.nombre} ${record?.paterno}-Funeraria Cristo Rey Angol`}
          />
          <meta
            name="description"
            content={`Comparte este homenaje con quienes desean honrar la memoria de ${record?.nombre} ${record?.paterno}`}
          ></meta>
          <meta
            name="author"
            content={`Funeraria Cristo Rey Angol - ${new Date().getFullYear()}`}
          ></meta>
          <meta
            name="copyright"
            content={`Funeraria Cristo Rey Angol - ${new Date().getFullYear()}`}
          ></meta>
          <meta
            property="og:title"
            content={`Obituario de ${record?.nombre} ${record?.paterno}`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://www.cristoreyangol.cl/${personId}`}
          />
          <meta
            property="og:site_name"
            content="Funeraria_Cristo_Rey_Angol"
          ></meta>
          <meta
            property="og:image"
            content={`https://www.cristoreyangol.cl/assets/obituarioImages/urlPreview.png`}
          />
          <meta
            property="og:image:secure_url"
            content="https://www.cristoreyangol.cl/assets/obituarioImages/urlPreview.png"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="400" />
          <meta
            property="og:image:alt"
            content="Obituario servicios funerarios Cristo Rey"
          />
          <meta
            property="og:description"
            content={`Comparte este homenaje con quienes desean honrar la memoria de ${record?.nombre} ${record?.paterno}`}
          />
          <meta property="og:locale" content="es_LA"></meta>
          <link rel="canonical" href="https://www.cristoreyangol.cl" />
        </Helmet>
      </HelmetProvider>

      <header className="headerContainer">
        <Navbar />
      </header>
      <div key={record._id} className="personCardContainer">
        <div className="personDataWrapper">
          <div className="personDataContainer">
            <div className="personImageContainer">
              <img src={record.img} alt="" />
            </div>
            <h5>
              {record.nombre} {record.segundoNombre}
            </h5>
            <h5>
              {record.paterno} {record.materno}
            </h5>
            <div className="decesoDate">
              {iconCross}
              <p className="decesoFecha">{record.date}</p>
            </div>
          </div>
          <div className="funeralDataContainer">
            <div className="funeralInfo">
              <div className="infoResponso">
                <p>Responso Fúnebre:</p>
                <p className="infoResponsoData">{record.fechaResponso}</p>
                <p className="infoResponsoData">{record.lugarResponso}</p>
              </div>
              <div className="infoCementerio">
                <p>Lugar de Velatorio:</p>
                <p className="infoCementerioData">{record.lugarVelatorio}</p>
                <p>Lugar de Cementerio:</p>
                <p className="infoCementerioData">{record.lugarCementerio}</p>
              </div>
            </div>
            <div className="shareInfoContainer">
              <p>Compartir</p>
              <div className="shareInfoIcons">
                <a
                  href={`https://wa.me/?text=https://www.cristoreyangol.cl/obituario/${record?.nombre}/${record?.paterno}/${record?._id}                                            
                  En este link acompañanos a honrar la memoria de ${record?.nombre} ${record?.paterno}.                                                 
                  Servicios Funerarios Cristo Rey.
                  `}
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.cristoreyangol.cl/obituario/${record?.nombre}/${record?.paterno}/${record?._id}`}
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="personMensajesContainer">
          {record.mesaggesWall?.map((mensaje) => {
            return (
              <>
                <div className="mensajeCard" key={record.mesaggesWall.id}>
                  <p className="mensajeText">{mensaje.mesagge}</p>
                  <p className="mensajeAuthor">{mensaje.author}</p>
                </div>
                <div className="messaggeSeparator">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="newMesaggeContainer">
        <div className="form-floating">
          <textarea
            className="form-control"
            id="inputAuthor"
            placeholder="Su nombre"
            onChange={(e) =>
              setMsgText((msgText) => ({ ...msgText, author: e.target.value }))
            }
          ></textarea>
          <label htmlFor="floatingTextarea">Su nombre</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control textArea"
            id="inputMesagge"
            placeholder="Su mensaje"
            onChange={(e) =>
              setMsgText((msgText) => ({ ...msgText, mesagge: e.target.value }))
            }
          ></textarea>
          <label htmlFor="floatingTextarea2">Escriba su mensaje</label>
        </div>

        <button
          className="btnSubmitMesagge"
          onClick={() => sendMesagge(record._id)}
        >
          <p>Enviar mensaje</p>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-justify-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PersonPage;
