import React, { Suspense, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Footer/Footer";
import { AnalyticService } from "../../Services/AnalyticService";
import "./ObituarioPage.css";

function ObituarioPage() {
  function Loading() {
    return <div className="loader" role="status"></div>;
  }
  const ObituarioLoader = React.lazy(() => import("./RecordLoader"));
  useEffect(() => {
    AnalyticService.pageView("/obituario", "Obituario general");
  }, []);
  return (
    <div className="obituarioPageMainWrapper">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href="https://www.cristoreyangol.cl/" />
          <title>Servicios Funerarios Cristo Rey Angol-Obituario</title>
          <meta
            name="description"
            content="Más de 40 años honrando a las familias angolinas. Contáctenos 24/7. Servicios Funerarios. Traslados. Servicio de Cafetería. Arreglos florales únicos en Angol."
          />
          <meta property="og:url" content="https://www.cristoreyangol.cl/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Servicios Funerarios Cristo Rey Angol"
          />
          <meta
            property="og:description"
            content="Más de 40 años honrando a las familias angolinas. Contáctenos 24/7. Servicios Funerarios. Traslados. Servicio de Cafetería. Arreglos florales únicos en Angol."
          />
          <meta property="og:image" content="./obituario.webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="cristoreyangol.cl" />
          <meta
            property="twitter:url"
            content="https://www.cristoreyangol.cl/"
          />
          <meta
            name="twitter:title"
            content="Servicios Funerarios Cristo Rey Angol"
          />
          <meta
            name="twitter:description"
            content="Más de 40 años honrando a las familias angolinas. Contáctenos 24/7. Servicios Funerarios. Traslados. Servicio de Cafetería. Arreglos florales únicos en Angol."
          />
          <meta name="twitter:image" content="./obituario.webp" />
        </Helmet>
      </HelmetProvider>
      <header className="headerContainer">
        <Navbar />
      </header>
      <main className="obituarioPageMainContainer">
        <h1>Obituario</h1>
        <div className="obituarioCardsContainer">
          <Suspense fallback={<Loading />}>
            <ObituarioLoader />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default ObituarioPage;
