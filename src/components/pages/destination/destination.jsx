import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./destination.scss";
import imagen from "../../../assets/destination/image-moon.webp";
import { destination } from "../../../data/dataDestination";

const Destination = () => {
  const [info, setInfo] = useState(destination[0]);

  const handleButtonClick = (index) => {
    setInfo(destination[index]);
  };

  return (
    <div className="container">
      <div className="details">
        <figure>
          <h2>
            <span className="special-text">01</span> PICK YOUR DESTINATION
          </h2>
          <img src={info.images.png} />
        </figure>
        <section className="details__navButton">
          <div className="details__buttons">
            <button onClick={() => handleButtonClick(0)}>MOON</button>
            <button onClick={() => handleButtonClick(1)}>MARS</button>
            <button onClick={() => handleButtonClick(2)}>EUTORA</button>
            <button onClick={() => handleButtonClick(3)}>TITAN</button>
          </div>
          <h1 className="details__title">{info.name}</h1>
          <p className="details__description">{info.description}</p>
          <div className="details__fogit puoter">
            <section>
              <span>avg. distance</span>
              <h3>{info.distance}</h3>
            </section>
            <section>
              <span>EST travel time</span>
              <h3>{info.travel}</h3>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destination;
