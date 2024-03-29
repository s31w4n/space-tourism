import React, { useState } from "react";
import "../style/Destination.css";
import { destinations } from "../data";

function Destination() {
  document.body.classList.remove("home");
  document.body.classList.remove("crew");
  document.body.classList.remove("technology");
  document.body.classList.add("destination");
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = destinations[value];

  return (
      <main className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={images.webp} type="image/webp" />
          <img src={images.png} alt={name} />
        </picture>
        <div
          aria-label="destination list"
          className="tab-list underline-indicators flex"
        >
          {destinations.map((destinations, index) => {
            const { name } = destinations;
            return (
              <button
                key={index}
                className={`"uppercase ff-sans-cond text-accent letter-spacing-2" ${
                  index === value && "active"
                } `}
                onClick={() => setValue(index)}
              >
                {name}
              </button>
            );
          })}
        </div>
        <article className="destination-info flow">
          <h2 className="fs-800 uppercase ff-serif">{name}</h2>
          <p>{description}</p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{travel}</p>
            </div>
          </div>
        </article>
      </main>
  );
}

export default Destination;
