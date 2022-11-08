import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";
import imgHome from "../../images/imgHome.jpg";
import imgHistoria from "../../images/imgDemoHistoria.jpg";
import arregloFooter from "../../images/arregloFooter.png";
import Footer from "../Footer/Footer";
import "./HomePage.css";
import "./HomePageResponsive.css";
// import Whatsapp from "../WhatsappButton/Whatsapp";

function HomePage() {
  const fono1 = "+569 5253 9500";
  const fono2 = "+569 9032 7836";
  const whatsappCode = "56952539500";

  return (
    <>
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
                  xmlns="http://www.w3.org/2000/svg"
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
                  xmlns="http://www.w3.org/2000/svg"
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
                  xmlns="http://www.w3.org/2000/svg"
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
                  xmlns="http://www.w3.org/2000/svg"
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
        {/* <div className="mapsWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.371346031827!2d-72.69668718485178!3d-37.8047700797541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bb33bd668eb11%3A0x3ada8c457c098537!2sBernardo%20O&#39;Higgins%20731%2C%20Angol%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1665197302871!5m2!1ses!2scl"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
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
                      mortuoria). Obtenga más información en el campo asignación
                      por muerte.
                    </li>
                  </ul>
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
                  Lorem ipsum dolor sit amet.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti et facilis blanditiis expedita eius, dolore harum
                    nihil illum culpa rerum laudantium impedit reprehenderit,
                    dolorum iste fugiat labore nam voluptatibus mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sit iure
                    cumque enim earum. In, reprehenderit perspiciatis! Maxime,
                    provident placeat? Iure, quibusdam. Dolor distinctio, alias,
                    consequuntur doloribus doloremque veniam excepturi error sed
                    cupiditate inventore at. Nostrum, rerum eum possimus
                    consectetur obcaecati cum facilis porro hic aut. Officiis a
                    quo accusamus nihil!
                  </p>
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
                  Lorem ipsum dolor sit amet.
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti et facilis blanditiis expedita eius, dolore harum
                    nihil illum culpa rerum laudantium impedit reprehenderit,
                    dolorum iste fugiat labore nam voluptatibus mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sit iure
                    cumque enim earum. In, reprehenderit perspiciatis! Maxime,
                    provident placeat? Iure, quibusdam. Dolor distinctio, alias,
                    consequuntur doloribus doloremque veniam excepturi error sed
                    cupiditate inventore at. Nostrum, rerum eum possimus
                    consectetur obcaecati cum facilis porro hic aut. Officiis a
                    quo accusamus nihil!
                  </p>
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
                  Lorem ipsum dolor sit amet.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti et facilis blanditiis expedita eius, dolore harum
                    nihil illum culpa rerum laudantium impedit reprehenderit,
                    dolorum iste fugiat labore nam voluptatibus mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sit iure
                    cumque enim earum. In, reprehenderit perspiciatis! Maxime,
                    provident placeat? Iure, quibusdam. Dolor distinctio, alias,
                    consequuntur doloribus doloremque veniam excepturi error sed
                    cupiditate inventore at. Nostrum, rerum eum possimus
                    consectetur obcaecati cum facilis porro hic aut. Officiis a
                    quo accusamus nihil!
                  </p>
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
                  Lorem ipsum dolor sit amet.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti et facilis blanditiis expedita eius, dolore harum
                    nihil illum culpa rerum laudantium impedit reprehenderit,
                    dolorum iste fugiat labore nam voluptatibus mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sit iure
                    cumque enim earum. In, reprehenderit perspiciatis! Maxime,
                    provident placeat? Iure, quibusdam. Dolor distinctio, alias,
                    consequuntur doloribus doloremque veniam excepturi error sed
                    cupiditate inventore at. Nostrum, rerum eum possimus
                    consectetur obcaecati cum facilis porro hic aut. Officiis a
                    quo accusamus nihil!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="formContainerHome" id="contacto">
        <h3>Déjanos un comentario</h3>
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
