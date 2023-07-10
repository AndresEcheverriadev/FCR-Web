import React, { useEffect, lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading.js";
import imgHome from "../../images/homeFuneraria.webp";
import "./HomePage.css";
import "./HomePageResponsive.css";
import { AnalyticService } from "../../Services/AnalyticService";
import imgHistoria from "../../images/homeFunerariaOficina.webp";
import imgFloreria from "../../images/arreglosFlorales.webp";
import imgFloreria2 from "../../images/arreglosFlorales2.webp";
import mapBig from "../../images/mapBig.webp";
import mapSmall from "../../images/mapSmall.webp";
const HomeGallery = lazy(() => import("../HomeGallery/HomeGallery.js"));
const FaqsAccordion = lazy(() => import("../FaqsAccordion/FaqsAccordion.js"));
const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const Footer = lazy(() => import("../Footer/Footer"));

function HomePage() {
  const fono1 = "+569 5253 9500";
  const fono2 = "+569 9032 7836";
  const whatsappCode = "56927752105";

  useEffect(() => {
    AnalyticService.initialize();
  }, []);

  useEffect(() => {
    AnalyticService.pageView("/", "Home");
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Servicios Funerarios Cristo Rey Angol - Home</title>
          <link rel="canonical" href="https://www.cristoreyangol.cl/" />
          <meta
            property="og:title"
            content={`Sitio web servicios funerarios Cristo Rey Angol`}
          />
          <meta property="og:url" content={`https://www.cristoreyangol.cl/`} />
          <meta
            property="og:description"
            content="Sitio web servicios funerarios Cristo Rey Angol"
          />
          <meta
            property="og:image"
            itemProp="image"
            content="https://i.postimg.cc/HLhPLqBs/url-Preview.png"
          />
          <meta property="og:type" content="article" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="200" />
          <meta
            name="description"
            content="Sitio web servicios funerarios Cristo Rey Angol"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <div className="homePageMainContainer">
        <div className="viewHomeContainer">
          <header className="headerContainer">
            <Navbar />
          </header>
          <div className="homeTitlesContainer">
            <h1 className="homeTitle1">
              Servicios Funerarios Cristo Rey Angol
            </h1>
            <h2 className="homeTitle1">
              Más de 40 años honrando <br />a las familias angolinas
            </h2>
          </div>
          <div className="carruselContainer">
            <img
              src={imgHome}
              alt="persona con flores tocando urna"
              height={291}
              width={425}
            />
          </div>
          <div className="contactPhonesContainer">
            <h3 id="contactPhonesTitle--desktop">
              Contáctanos 24/7 a nuestros teléfonos <br /> o escríbanos a
              nuestro Whatsapp.
            </h3>
            <h3 id="contactPhonesTitle--mobile">
              Contáctanos 24/7 a nuestros teléfonos o escríbanos a nuestro
              Whatsapp.
            </h3>
            <div className="phonesWrapper">
              <a
                className="phoneButton"
                href={`tel:${fono1}`}
                onClick={() =>
                  AnalyticService.event("Interacciones", "clic_Llamar", "Tel1")
                }
              >
                <div className="callPhone">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <h4 className="contactPhoneCall">Llamar</h4>
                </div>
                <h5>{fono1}</h5>
              </a>
              <a
                className="phoneButton"
                href={`tel:${fono2}`}
                onClick={() =>
                  AnalyticService.event("Interacciones", "clic_Llamar", "Tel2")
                }
              >
                <div className="callPhone">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <h4 className="contactPhoneCall">Llamar</h4>
                </div>
                <h5>{fono2}</h5>
              </a>
              <a
                className="phoneWhatsapp"
                href={`https://wa.me/${whatsappCode}`}
                onClick={() =>
                  AnalyticService.event(
                    "Interacciones",
                    "clic_Whatsapp",
                    "Whatsapp"
                  )
                }
              >
                <div className="callWhatsapp">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-whatsapp "
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
                <h6>
                  Conversemos <br />
                  Whatsapp
                </h6>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <main className="mainContainer" id="servicios">
          <h3>Servicios funerarios</h3>

          <div className="serviciosCardsContainer">
            <div className="servicioCard">
              <div className="servicioIcon">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-file-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="servicioText">
                <h5>Servicio Funerario Tradicional</h5>
                <p>
                  Un funeral es un momento especial para que familiares y amigos
                  se consuelen mutuamente y poco a poco comiencen a sanar y
                  conmemorar una vida bien vivida, los deudos pueden realizar un
                  funeral para honrar a sus ser querido, para esto Servicios
                  Funerarios Cristo Rey se complace en ofrecer un funeral
                  tradicional o algo completamente único.
                </p>
                <div className="servicioIncludes">
                  <p>El Servicio Funerario Tradicional Incluye:</p>
                  <ul className="includesList list-group list-group-flush">
                    <li className="list-group-item">
                      Servicios básicos del personal de Servicios Funerarios
                      Cristo Rey.
                    </li>
                    <li className="list-group-item">
                      Dirección y orientación de servicios funerarios.
                    </li>
                    <li className="list-group-item">
                      Vehículo y traslado del difunto del lugar de la muerte a
                      velatorio y cementerio.
                    </li>
                    <li className="list-group-item">
                      Urna e instalación de velatorio.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="servicioCard">
              <div className="servicioIcon">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-file-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="servicioText">
                <h5>Servicio Funerario Futuro</h5>
                <p>
                  Comparta con nosotros una planificación previa de un servicio
                  funerario, permitiéndonos honrar de la mejor manera la memoria
                  de ese ser querido. Planificamos la mayoría de los hitos de
                  nuestra vida, matrimonios, familia, universidad, jubilacion,
                  la planificación de los gastos al final de la vida es
                  igualmente importante y proporciona muchos beneficios
                  emocionales y financieros. La mejor forma vivir un luto es
                  prepararlo.
                </p>
              </div>
              <div className="spacerCard"></div>
            </div>

            <div className="servicioCard">
              <div className="servicioIcon">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
              <div className="servicioText">
                <h5>Traslados Funerarios</h5>
                <p>
                  Permítanos encargamos de coordinar y trabajar junto a otras
                  funerarias traslados, descansa en nosotros y dedícate a vivir
                  con tu familia y seres queridos su luto.
                </p>
                <div className="servicioIncludes">
                  <p>El Traslado Funerario Incluye:</p>
                  <ul className="includesList list-group list-group-flush">
                    <li className="list-group-item">
                      Servicios básicos del personal de Servicios Funerarios
                      Cristo Rey.
                    </li>
                    <li className="list-group-item">
                      Dirección y orientación de servicios funerarios.
                    </li>
                    <li className="list-group-item">
                      Vehículo y traslado del difunto del lugar de la muerte a
                      velatorio y cementerio.
                    </li>
                    <li className="list-group-item">
                      Urna e instalación de velatorio
                      <br />
                      (sujeto a disponibilidad).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="servicioCard">
              <div className="servicioIcon">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-cup-hot"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"
                  />
                  <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                </svg>
              </div>
              <div className="servicioText">
                <h5>Servicios Complementarios </h5>
                <p>
                  Permítanos honrar a sus seres queridos entregando un completo
                  soporte en velatorios, cafeterías y memoriales, dejando en
                  nuestras manos la importante labor crear un grato homenaje
                  funerario.
                </p>
                <div className="servicioIncludes">
                  <p>Algunos servicios disponibles:</p>
                  <ul className="includesList list-group list-group-flush">
                    <li className="list-group-item">Servicio de Cafetería.</li>
                    <li className="list-group-item">Ambientación floral.</li>
                    <li className="list-group-item">Climatización.</li>
                  </ul>
                </div>
                <div className="spacerCard2"></div>
              </div>
            </div>

            <div className="servicioCard">
              <div className="servicioIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-flower1"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>
              <div className="servicioText">
                <h5>Servicio de Floristería de Autor</h5>
                <p>
                  Todos nuestros servicios funerarios cuentan con floristeria de
                  autor, un servicio propio de nuestra empresa donde creamos
                  hermosos tributos florales personalizados ademas de un
                  workshop floral donde usted mismo puedes crear sus arreglos
                  con bellas rosas ecuatorianas. Este servicio le entrega una
                  alta personalizacion y elegancia para el servicio funerario de
                  su ser querido.
                </p>
                <div className="servicioIncludes">
                  <p>
                    Nuestros arreglos son hechos con flores de la mayor calidad
                    disponible:
                  </p>
                  <div className="servicioIncludesGallery">
                    <LazyLoadImage
                      src={imgFloreria}
                      width={200}
                      height={200}
                      alt="arreglo floral funerario"
                      id="imagenFloreria"
                    />
                    <LazyLoadImage
                      src={imgFloreria2}
                      width={200}
                      height={200}
                      alt="arreglo floral funerario en conservador refrigerado"
                      id="imagenFloreria2"
                    />
                  </div>
                </div>
                <div className="spacerCard2"></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="mapGalleryContainer">
        <h3>Visítenos en nuestro salón de ventas</h3>
        <h4>Av. Bernardo O'Higgins 731 - Angol </h4>
        <Suspense fallback={Loading}>
          <HomeGallery />
        </Suspense>
        <div className="addressWrapper" id="map">
          <div className="googleMapContainer">
            <Suspense fallback={Loading}>
              <a
                href="https://goo.gl/maps/2rbfaDBvpZtUSR9J9"
                rel="noreferrer noopener"
                aria-label="link a Google Map"
                target="_blank"
                onClick={() =>
                  AnalyticService.event("Interacciones", "clic_Mapa", "Mapa")
                }
              >
                <LazyLoadImage
                  src={mapBig}
                  width={750}
                  height={400}
                  alt="mapa de ubicación de oficina de ventas"
                  id="mapBig"
                />

                <LazyLoadImage
                  src={mapSmall}
                  width={321}
                  height={322}
                  alt="mapa de ubicación de oficina de ventas"
                  id="mapSmall"
                />
              </a>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="nosotrosContainer" id="nosotros">
        <h3>Nuestra Historia</h3>
        <div className="historiaContainer">
          <div className="historiaTextBox">
            <p className="historiaText">
              Somos responsables de un legado familiar y funerario de mas de 40
              años sirviendo a la comunidad y a quienes confían sus seres
              queridos a nuestro cuidado. Nuestro motivación siempre ha sido
              brindar a cada familia la mayor atención, calidad y
              profesionalismo procurando honrar de la mejor manera la memoria de
              sus seres queridos.
            </p>
          </div>

          <div className="historiaImg">
            <LazyLoadImage
              src={imgHistoria}
              width={455.75}
              height={289.4}
              alt="imagen de nuestro fundador Teobaldo Echeverría (Q.E.P.D.)"
            />
          </div>
        </div>

        <div className="argumentsWrapper">
          <h5>¿Porque elegirnos?</h5>
          <div className="argumentsContainer">
            <div className="argumentCard">
              <p className="argumentTitle">Servicio de calidad</p>
              <p>
                Las familias nos han confiado a sus seres queridos debido a
                nuestro profesionalismo y calidad en servicios, más de 35 años
                de experiencia avalan nuestro trabajo, forjando nuestros
                valores: Tradición-excelencia-discreción.
              </p>
            </div>
            <div className="argumentCard">
              <p className="argumentTitle">Respuesta inmediata</p>
              <p>
                Trabajamos para ti los 365 días del año, las 24 horas del día,
                con personal experimentado y esperando brindar orientación en
                cada paso del camino.
              </p>
            </div>
            <div className="argumentCard">
              <p className="argumentTitle">Transporte seguro</p>
              <p>
                Nuestro personal profesional recogerá a su ser querido en su
                residencia, hospital y lo transportará con cuidado.
              </p>
            </div>
            <div className="argumentCard">
              <p className="argumentTitle">Memoria y tranquilidad</p>
              <p>
                Tenemos una larga historia de testimonios positivos y reseñas de
                familias satisfechas que avalan nuestro trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="faqsWrapper" id="faqs">
        <h3>Que hacer ante la muerte de un familiar</h3>
        <h5>Preguntas frecuentes</h5>
        <div className="faqsContainer">
          <FaqsAccordion />
        </div>
      </div>
      <Suspense fallback={Loading}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={Loading}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
