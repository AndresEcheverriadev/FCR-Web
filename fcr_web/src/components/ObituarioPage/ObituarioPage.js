import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ObituarioPage.css";
import { NavLink } from "react-router-dom";

function ObituarioPage() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  const iconCross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
    <div className="obituarioPageMainWrapper">
      <header className="headerContainer">
        <Navbar />
      </header>
      <main className="obituarioPageMainContainer">
        <h1>Obituario</h1>
        <div className="obituarioCardsContainer">
          {records.map((deceso) => {
            return (
              <div className="decesoCard" key={deceso._id}>
                <NavLink to={`/${deceso._id}`} className="decesoPersona">
                  <div className="decesoImagen">
                    <img src={deceso.img} alt="" />
                  </div>
                  <h5 className="decesoNombre">
                    {deceso.nombre} {deceso.paterno}
                  </h5>
                </NavLink>
                <div className="decesoDate">
                  {iconCross}
                  <p className="decesoFecha">{deceso.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ObituarioPage;
