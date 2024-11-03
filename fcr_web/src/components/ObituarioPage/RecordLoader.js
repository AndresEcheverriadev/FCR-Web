import React, { useMemo } from "react";
import "./RecordLoader.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RecordsService } from "../../Services/RecordsService";
import Pagination from "../Pagination/Pagination.js";

function RecordLoader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [records, setRecords] = useState([]);
  const [loadingRecords, setLoadingRecords] = useState(false);

  useEffect(() => {
    async function getRecords() {
      setLoadingRecords(true);
      const response = await RecordsService.getAllRecords();
      setRecords(response.data);
      setLoadingRecords(false);
    }
    getRecords();
    return;
  }, []);

  // const handleSearchTerm = (search) => {
  //   setSearchTerm(search);
  // };

  // useEffect(() => {
  //   console.log("searchTerm: ", searchTerm);
  // }, [searchTerm]);

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

  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return records.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, records]);

  return (
    <div className="recordLoaderWrapper">
      {/* {!loadingRecords && (
        <input
          className="recordSearchInput"
          onChange={(e) => handleSearchTerm(e.target.value)}
          type="text"
          placeholder="Buscar en obituario"
        ></input>
      )} */}
      <div className="recordsContainer">
        {currentTableData
          ?.filter((record) =>
            record.nombre.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((deceso) => {
            return (
              <div className="decesoCard" key={deceso._id}>
                <NavLink
                  to={`/obituario/${deceso._id}`}
                  className="decesoPersona"
                >
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={records.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default RecordLoader;
