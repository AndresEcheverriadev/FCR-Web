import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import miniatura1 from "../../images/miniaturaGaleria1.webp";
import miniatura2 from "../../images/miniaturaGaleria2.webp";
import miniatura3 from "../../images/miniaturaGaleria3.webp";
import miniatura4 from "../../images/miniaturaGaleria4.webp";
import galeria1 from "../../images/Galeria1.webp";
import galeria2 from "../../images/Galeria2.webp";
import galeria3 from "../../images/Galeria3.webp";
import galeria4 from "../../images/Galeria4.webp";
import "./HomeGallery.css";
import "./HomeGalleryResponsive.css";

function HomeGallery() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="miniaturesContainer">
        <LazyLoadImage
          className="imageMiniature"
          src={miniatura1}
          width={164.062}
          height={99.7125}
          alt="distintos modelos de urnas vertical"
          onClick={() => setOpen(true)}
        />
        <LazyLoadImage
          className="imageMiniature"
          src={miniatura2}
          width={164.062}
          height={99.7125}
          alt="distintos modelos de urnas horizontal"
          onClick={() => setOpen(true)}
        />
        <LazyLoadImage
          className="imageMiniature"
          src={miniatura3}
          width={164.062}
          height={99.7125}
          alt="exposicion de distintas urnas"
          onClick={() => setOpen(true)}
        />
        <LazyLoadImage
          className="imageMiniature"
          src={miniatura4}
          width={164.062}
          height={99.7125}
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
