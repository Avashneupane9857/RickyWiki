// import React from "react";

import FilterBtn from "../FilterBtn";

const Species = () => {
  let species = [
    "Animals",
    "Aliens",
    "Humanoid",
    "Poopybutthole",
    "unknown",
    "Disease",
    "Planet",
    "Robot",
    "Mythological",
  ];
  return (
    <>
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
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {species.map((item, index) => (
              <FilterBtn key={index} index={index} item={item} name="species" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Species;
