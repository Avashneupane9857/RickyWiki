// import React from 'react'
import styles from "./Cards.module.css";
const Cards = ({ results }) => {
  let display;
  //   console.log(results);
  if (results) {
    display = results.map((x) => {
      let { name, id, image, location, status } = x;
      return (
        <div className="col-4 mb-4 position-relative" key={id}>
          <div className={styles.cards}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content ">
              <div className=" mb-3 fs-4 fw-bold">{name}</div>
              <div className=" fs-6">Last Location</div>
              <div className=" fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute`}
                >
                  {status}
                </div>
              );
            } else if (status == "Alive") {
              return (
                <div
                  className={`${styles.badge} badge bg-success position-absolute`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No character found:/";
  }
  return <>{display}</>;
};

export default Cards;
