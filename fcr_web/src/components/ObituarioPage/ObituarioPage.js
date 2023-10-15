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
          <meta
            property="og:title"
            content={`Servicios Funerarios Cristo Rey Angol - Obituario`}
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
          <title>Servicios Funerarios Cristo Rey Angol - Obituario</title>
          <meta
            name="description"
            content="Sitio web servicios funerarios Cristo Rey Angol"
          ></meta>
          <link rel="canonical" href="https://www.cristoreyangol.cl/" />
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
