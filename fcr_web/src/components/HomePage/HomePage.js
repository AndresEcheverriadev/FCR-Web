import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";
import imgHome from "../../images/imgHome.jpg";
import imgHistoria from "../../images/imgDemoHistoria2.jpg";
import arregloFooter from "../../images/arregloFooter.png";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "./HomePage.css";
import "./HomePageResponsive.css";

function HomePage() {
  const fono1 = "+569 5253 9500";
  const fono2 = "+569 9032 7836";
  const whatsappCode = "56952539500";

  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content={`Sitio web servicios funerarios Cristo Rey`}
        />
        <meta property="og:url" content={`https://www.cristoreyangol.cl/`} />
        <meta
          property="og:description"
          content="Sitio web servicios funerarios Cristo Rey"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://i.postimg.cc/HLhPLqBs/url-Preview.png"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <title>Servicios Funerarios Cristo Rey</title>
        <meta
          name="description"
          content="Sitio web servicios funerarios Cristo Rey"
        ></meta>

        <link rel="canonical" href="https://www.cristoreyangol.cl/" />
      </Helmet>
      <div className="homePageMainContainer">
        <div className="viewHomeContainer">
          <header className="headerContainer">
            <Navbar />
          </header>

          <div className="homeTitlesContainer">
            <h3 className="homeTitle1">Servicios Funerarios Cristo Rey</h3>
            <h1 className="homeTitle1">
              Más de 35 años honrando a las familias angolinas
            </h1>
          </div>

          <div className="carruselContainer">
            <img src={imgHome} alt="" />
          </div>

          <div className="contactPhonesContainer">
            <h3>
              Contáctanos 24/7 a nuestros teléfonos o escríbanos a nuestro
              Whatsapp.
            </h3>
            <div className="phonesWrapper">
              <a className="phoneButton" href={`tel:${fono1}`}>
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
                  <h5>Llamar</h5>
                </div>
                <h5>{fono1}</h5>
              </a>
              <a className="phoneButton" href={`tel:${fono2}`}>
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
                  <h5>Llamar</h5>
                </div>
                <h5>{fono2}</h5>
              </a>
              <a
                className="phoneWhatsapp"
                href={`https://wa.me/${whatsappCode}`}
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
                <h5>Conversemos</h5>
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
                  funerarios cristo rey se complace en ofrecer un funeral
                  tradicional o algo completamente único
                </p>
                <div className="servicioIncludes">
                  <p>El Servicio Funerario Tradicional Incluye:</p>
                  <ul className="includesList list-group list-group-flush">
                    <li className="list-group-item">
                      Servicios básicos del personal de servicios funerarios
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
                  funerarios, permitiéndonos honrar de la mejor manera la
                  memoria de ese ser querido. Planificamos la mayoría de los
                  hitos de nuestra vida,
                  matrimonios,familia,universidad,jubilacion, la planificación
                  de los gastos al final de la vida es igualmente importante y
                  proporciona muchos beneficios emocionales y financieros.
                  <br />
                  <br />
                  La mejor forma vivir un luto es prepararlo.
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
                      Servicios básicos del personal de servicios funerarios
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
          </div>
        </main>
      </div>

      <div className="nosotrosContainer" id="nosotros">
        <h3>Nuestra Historia</h3>
        <div className="historiaContainer">
          <div className="historiaTextBox">
            <p className="historiaText">
              Responsables de un legado familiar y funerario de mas de 40 años
              sirviendo a la comunidad y a quienes confían sus seres queridos a
              nuestro cuidado, nuestro foco ha sido brindar a cada familia la
              mayor atención, calidad y profesionalismo procurando honrar de la
              mejor manera la memoria de los seres queridos acaecidos.
            </p>
          </div>

          <div className="historiaImg">
            <img
              src={imgHistoria}
              alt="Teobaldo Echeverría fundador de Funeraria Cristo Rey"
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
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Que hacer cuando la muerte ocurre?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Cuando muere una persona, lo primero es que personal médico
                    o paramédico constate el fallecimiento. Luego, los pasos a
                    seguir son:
                  </p>
                  <ul>
                    <li>
                      Obtener el certificado médico de defunción, entregado por
                      un médico. El documento se solicita independientemente del
                      lugar de la muerte (casa, hospital, etc.).
                    </li>
                    <li>
                      Inscribir la defunción en una oficina del Servicio de
                      Registro Civil e Identificación (SRCeI). Después puede
                      solicitar el certificado, que sirve para todos los
                      trámites relacionados con pensiones y regularizaciones.
                    </li>
                    <li>Comprar los servicios funerarios.</li>
                    <li>
                      Comprar una sepultura. Cuando los familiares de una
                      persona fallecida no pueden pagar una, generalmente se
                      pide una entrevista con el o la asistente social de la
                      municipalidad donde vivía la persona fallecida, para que
                      evalúe y pueda decretar la gratuidad de una sepultura.
                    </li>
                    <li>
                      Cobrar la asignación por causa de muerte (cuota
                      mortuoria).
                    </li>
                  </ul>
                  <p>
                    <b>
                      Importante: Estos trámites son parte del servicio
                      funerario que entrega Cristo Rey Angol. Al momento de
                      fallecer la persona, solo debes hablarnos y te
                      acompañaremos en cada paso.
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Seguro social y cuotas mortuorias
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Cuando una persona muere, la asignación por causa de muerte
                    (cuota mortuoria) se paga a quien haya realizado los gastos
                    funerarios. Si se contrata una funeraria, es ella la que
                    cobra, cubriendo parte de los servicios funerarios o su
                    totalidad. Para los afiliados, afiliadas, pensionados o
                    pensionadas de una AFP, esta cuota se financia con el saldo
                    de la cuenta individual. El monto del beneficio es de 15
                    Unidades de Fomento (UF) o hasta el monto del saldo de la
                    cuenta, si este fuere menor. En caso de contar con el
                    servicio, las funerarias se encargan de inscribir la
                    defunción en el Registro Civil, proveer de un ataúd y cobrar
                    la cuota mortuoria. Los beneficiarios y beneficiarias de la
                    Pensión Básica Solidaria de Vejez e Invalidez, también
                    tienen derecho a cuota mortuoria. En caso de pensionados,
                    pensionadas o imponentes del Instituto de Previsión Social
                    (IPS), esta se reajusta en julio de cada año. Revise más
                    información.
                  </p>
                  <ul>
                    <li>
                      Si una persona pensionada de AFP es además titular de
                      Aporte Previsional Solidario y muere, la cuota mortuoria
                      de 15 UF que debe la AFP está garantizada debido a que el
                      Instituto de Previsión Social (IPS) aportará la diferencia
                      que exista con los fondos disponibles en la cuenta.
                    </li>
                    <li>
                      Si una persona pensionada de renta vitalicia de una
                      compañía de seguros muere, siempre tendrá derecho a cobrar
                      la cuota mortuoria porque es una prestación que se
                      incorpora en el respectivo contrato con la compañía al
                      momento de traspasar los fondos desde la AFP.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Si existe una sepultura a nombre de la persona fallecida
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Su familiar podrá ser sepultado en esa sepultura.
                      Generalmente, las sepulturas compradas previamente son
                      perpetuas y familiares.
                    </li>
                    <li>
                      Para usar esa sepultura debe coordinar con la funeraria y
                      acercarse al cementerio para que la abran, determinen si
                      tiene capacidad, y evalúen si su familiar tiene derecho a
                      usar esa sepultura o no.
                    </li>
                    <li>
                      Recuerde entregar el pase de sepultación, documento que
                      entrega el Registro Civil una vez hecha la inscripción de
                      defunción.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Si la persona fallecida no tiene una sepultura
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Si la persona fallecida o la familia no cuenta con un
                      lugar para la sepultación, deberá acercarse a un
                      cementerio para adquirir un lugar para realizar el
                      entierro. En algunos casos, las sepulturas o nichos se
                      arriendan por un determinado periodo de tiempo, el que
                      puede renovarse.
                    </li>
                    <li>
                      No olvide entregar el pase de sepultación, documento que
                      entrega el Registro Civil una vez hecha la inscripción de
                      defunción
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Si la persona fallecida pidío ser cremada
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    ¿Qué documentos debo presentar si la persona fallecida pidió
                    ser cremada?
                  </p>
                  <ul>
                    <li>
                      Autorización previa del director general del Servicio
                      Nacional de Salud o de su delegado, siempre que pase
                      alguna de las dos siguientes situaciones:
                      <ul>
                        <li>
                          Exista declaración escrita hecha antes por la persona
                          fallecida en una notaría o en el registro que deben
                          llevar todos los cementerios para ello.
                        </li>
                        <li>
                          Exista solicitud del cónyuge sobreviviente o de la
                          mayoría de los hijos quienes autoricen la cremación
                          ante notario público. En caso de no existir cónyuge
                          sobreviviente ni hijos, el Reglamento de Cementerios
                          autoriza a otras personas a solicitarlo.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Pase de sepultación, emitido por el Registro Civil del
                      lugar donde ocurrió el fallecimiento, más una fotocopia
                      del certificado de defunción emitido por el médico.
                    </li>
                    <li>
                      Autorización judicial, sólo si el fallecimiento ocurrió
                      por accidente o por causas que hagan suponer algún grado
                      de delito.
                    </li>
                    <p>
                      Importante: los documentos deben ser presentados en el
                      lugar dónde se va a realizar la incineración.
                    </p>
                  </ul>
                  <p>¿Cuáles son los plazos para realizar la cremación?</p>
                  <ul>
                    <li>
                      En caso de producirse muerte natural, la cremación se hace
                      generalmente 1 ó 2 días después de recibido el cuerpo.
                      Según el código sanitario, una vez ocurrida la muerte,
                      deberá existir una fecha de muerte de a lo menos 24 horas
                      y no deberá superar las 48 horas antes de ser ingresado a
                      un cementerio, ya sea para ser cremado o sepultado.
                    </li>
                  </ul>
                  <p>
                    ¿Que hacer en el caso de una persona extranjera sin
                    familiares en Chile?
                  </p>
                  <ul>
                    <li>
                      En el caso de las personas extranjeras que no tengan
                      parientes en el país, bastará la petición formulada por el
                      representante diplomático o consular del país de origen de
                      la persona fallecida para que pueda ser cremada.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Reembolso de gastos funerarios
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingsix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Existen muchas situaciones y alternativas para que se
                    reembolsen los gastos funerarios:
                  </p>
                  <ul>
                    <li>
                      Si la persona fallecida estaba afiliada al sistema de AFP
                      con una cuenta de capitalización abierta y vigente, quien
                      acredite haberse hecho cargo de los gastos del funeral con
                      la correspondiente factura, tiene derecho al pago de 15
                      Unidades de Fomento (UF) por parte de la AFP y cargados a
                      la cuenta de capitalización individual del causante. Esto
                      significa que, si el saldo de esa cuenta es menor que 15
                      UF al momento del fallecimiento, la Cuota Mortuoria solo
                      equivaldrá al saldo remanente. Ahora bien, si la persona
                      fallecida percibía PGU o beneficios del Pilar Solidario de
                      Invalidez, tiene derecho a la totalidad de la Cuota
                      Mortuoria, para cuyos efectos la AFP pagará su monto
                      íntegro con fondo propios si fuere necesario, para luego
                      recuperarlos directamente del IPS.
                    </li>
                    <li>
                      Si la persona fallecida afiliada al sistema de AFP estaba
                      pensionada en la modalidad de renta vitalicia, la compañía
                      de seguros pagará 15 UF a la persona que acredite haberse
                      hecho cargo de los gastos funerarios del causante,
                      independientemente de si percibía o no PGU o algún
                      beneficio del Pilar Solidario de Invalidez al momento de
                      fallecer.
                    </li>
                    <li>
                      Si la persona fallecida estaba afiliada al sistema
                      previsional antiguo (ex INP), se autorizará a quien haya
                      pagado los gastos funerarios el derecho a cobrar la
                      Asignación por Muerte, la que será pagada directamente por
                      el IPS, equivalente a tres ingresos mínimos para fines no
                      remuneracionales. La única excepción a este derecho es el
                      caso de los pensionados de orfandad en el sistema antiguo
                      que fallecen sin estar percibiendo además PGU o algún
                      beneficio del Pilar Solidario. Actualmente, la Asignación
                      por Muerte corresponde a $773 mil 508 (equivalentes a tres
                      ingresos mínimos para fines no remuneracionales vigentes a
                      la fecha del fallecimiento). Obtén más información sobre
                      la Asignación por Muerte y/o descarga el certificado de
                      defunción para asignación familiar.
                    </li>
                    <li>
                      Si la persona no estaba afiliada a ningún sistema
                      previsional que cause beneficios mortuorios y solo
                      percibía PGU, genera derecho de Cuota Mortuoria, pagada
                      directamente por el IPS. En el mismo caso, si solo
                      percibía beneficios del Pilar Solidario de Invalidez o
                      subsidio de discapacidad para menores de edad, genera
                      derecho a Asignación por Muerte, también pagada
                      directamente por el IPS.
                    </li>
                    <li>
                      Además, sobre la Cuota Mortuoria, si los gastos funerarios
                      fueron hechos por una persona distinta del cónyuge o
                      conviviente civil, hijos o padre del afiliado fallecido,
                      solo tendrá derecho a tal retiro hasta la comprobación del
                      monto efectivo de su gasto, con el límite de 15 Unidades
                      de Fomento, quedando el saldo hasta completar esa cifra a
                      disposición del o la cónyuge o conviviente civil
                      sobreviviente, y a falta de este, de los hijos o los
                      padres del afiliado.
                    </li>
                    <li>
                      Por su parte, tratándose de Asignación por Muerte, tendrá
                      derecho al monto máximo el beneficiario que sea cónyuge,
                      hijo, padre o madre del causante. Cualquier otro
                      beneficiario tendrá derecho solamente al reembolso del
                      gasto que pruebe haber realizado hasta el monto máximo de
                      la asignación.
                    </li>
                    <li>
                      Como esos gastos corren generalmente por cuenta de la
                      funeraria, es ella la que se hace cargo de cobrar ese
                      dinero para cubrir el servicio fúnebre.
                    </li>
                    <li>
                      Generalmente, las funerarias tienen servicios fúnebres
                      básicos, de manera que no tengas que pagar extra a la
                      funeraria, pues la Cuota Mortuoria o Asignación por Muerte
                      cubre casi todo ese gasto.
                    </li>
                    <li>
                      En los casos en que las mujeres reciben beneficios del
                      Pilar Solidario y que, además, se afilian a una AFP para
                      obtener el Bono por Hijo, solo tendrán derecho a la cuota
                      mortuoria y no a la asignación por muerte. Obtén más
                      información sobre el Bono por Hijo.
                    </li>
                    <li>
                      En el caso de familiares o terceros que se hayan hecho
                      cargo de los servicios funerarios de un funcionario en
                      servicio activo, o pensionado de retiro o montepío de la
                      Caja de Previsión de la Defensa Nacional (Capredena),
                      pueden solicitar una Asignación por Muerte.
                    </li>
                    <li>
                      También podrán solicitar una Cuota Mortuoria los
                      familiares o terceros que se hayan hecho cargo de los
                      servicios funerarios de un funcionario activo, o
                      pensionados o pensionadas de retiro, o montepíos de la
                      Dirección de Previsión de Carabineros de Chile (Dipreca).
                    </li>
                  </ul>
                  <p>
                    Importante: para información sobre costos de sepultura,
                    renovación o cambios de las condiciones, consulte
                    directamente con la administración del cementerio.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Traslado de una persona fallecida
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingseven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>¿Quiénes están autorizados para trasladar difuntos?</p>
                  <ul>
                    <li>
                      Los funcionarios de los cementerios. Las casas funerarias
                      pueden hacerlo, siempre y cuando cuenten con la
                      autorización del Servicio Nacional de Salud.
                    </li>
                  </ul>
                  <p>Para traslado de ciudad en Chile</p>
                  <ul>
                    <li>
                      Se debe obtener un permiso de la autoridad sanitaria y de
                      la SEREMI de salud del área en que la persona falleció.
                      Para realizar este trámite, el ataúd debe estar sellado.
                    </li>
                  </ul>
                  <p>Para traslado fuera de Chile</p>
                  <ul>
                    <li>
                      Hacia el extranjero: el ataúd debe ser colocado en un
                      compartimento separado, dentro del vehículo de transporte,
                      y debe ser sellado por la autoridad sanitaria.
                    </li>
                    <li>
                      Desde el extranjero: solo podrá ingresar si previamente se
                      acredita ante la autoridad sanitaria, por medio de
                      documentos extendidos por las autoridades sanitarias del
                      punto de origen, debidamente visados por el cónsul de
                      Chile, que el transporte no representa un peligro para la
                      salud pública.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="formContainerHome" id="contacto">
        <h3>Escríbenos un mensaje</h3>
        <ContactForm />
      </div>

      <div className="ilustracionFooter">
        <div className="footerTitles">
          <p>
            Entonces Jesús le dijo: —Yo soy la resurrección y la vida. El que
            cree en mí vivirá, aunque muera; y todo el que vive y cree en mí no
            morirá jamás.
          </p>
        </div>
        <img src={arregloFooter} alt="" />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
