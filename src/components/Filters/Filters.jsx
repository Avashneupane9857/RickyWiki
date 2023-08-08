// import React from 'react'

import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filters = ({ setGender, setPageNumber, setStatus }) => {
  return (
    <div className="col-3">
      <div className="text-center fs-4 fw-bold mb-4">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center mb-4 text-primary text-decoration-underline"
      >
        Clear Filters{" "}
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
