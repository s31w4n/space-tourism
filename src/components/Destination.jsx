import React from "react";
import { useState } from "react";
import "../style/Destination.css";
import { destinations } from "../data";
import MoonPng from "../assets/destination/image-moon.png";
import MoonWebp from "../assets/destination/image-moon.webp";

function Destination() {
  document.body.classList.remove("home");
  document.body.classList.add("destination");
  const [value, setValue] = useState(0);
  const { id, name, images, description, distance, travel } =
    destinations[value];
  console.log(destinations[0]);
  return (
    <div>
      <main
        key={id}
        id="main"
        className="grid-container grid-container--destination flow"
        hidden
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={images.webp} type="image/webp" />
          <img src={images.png} alt={name} />
        </picture>
        <div aria-label="destination list"></div>
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
    </div>
  );
}

export default Destination;
