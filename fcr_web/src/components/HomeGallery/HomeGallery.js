import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import miniatura1 from "../../images/miniaturaGaleria1.jpg";
import miniatura2 from "../../images/miniaturaGaleria2.jpg";
import miniatura3 from "../../images/miniaturaGaleria3.jpg";
import miniatura4 from "../../images/miniaturaGaleria4.jpg";
import galeria1 from "../../images/Galeria1.jpg";
import galeria2 from "../../images/Galeria2.jpg";
import galeria3 from "../../images/Galeria3.jpg";
import galeria4 from "../../images/Galeria4.jpg";
import "./HomeGallery.css";
import "./HomeGalleryResponsive.css";

function HomeGallery() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="miniaturesContainer">
        <img
          className="imageMiniature"
          src={miniatura1}
          alt="distintos modelos de urnas vertical"
          onClick={() => setOpen(true)}
        />
        <img
          className="imageMiniature"
          src={miniatura2}
          alt="distintos modelos de urnas horizontal"
          onClick={() => setOpen(true)}
        />
        <img
          className="imageMiniature"
          src={miniatura3}
          alt="expocision de distintas urnas"
          onClick={() => setOpen(true)}
        />
        <img
          className="imageMiniature"
          src={miniatura4}
          alt="distintos modelos de urnas"
          onClick={() => setOpen(true)}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: galeria1 },
          { src: galeria2 },
          { src: galeria3 },
          { src: galeria4 },
        ]}
      />
    </>
  );
}

export default HomeGallery;
