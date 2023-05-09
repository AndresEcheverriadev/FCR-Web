import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function RecordLoader() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL_RECORD}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const records = await response.json();
      setRecords(records.data);
    }

    getRecords();

    return;
  }, [records.length]);

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
    <>
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
    </>
  );
}

export default RecordLoader;
