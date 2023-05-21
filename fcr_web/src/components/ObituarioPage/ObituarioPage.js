import React, { Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading.js";
import Footer from "../Footer/Footer";
import "./ObituarioPage.css";

function ObituarioPage() {
  const ObituarioLoader = React.lazy(() => import("./RecordLoader"));
  return (
    <div className="obituarioPageMainWrapper">
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
