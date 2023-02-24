import React, { useState } from "react";
import "../style/Technology.css";
import { technology } from "../data";

function Technology() {
  document.body.classList.remove("home");
  document.body.classList.remove("destination");
  document.body.classList.remove("crew");
  document.body.classList.add("technology");
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];

  function Picture({ mobile, desktop, name }) {
    return (
      <picture>
        <source
          media="(max-width: 1200px)"
          srcSet={mobile}
          className="tech-img"
        />
        <source
          media="(min-width: 1201px)"
          srcSet={desktop}
          className="tech-img"
        />
        <img src={desktop} alt={name} className="tech-img" />
      </picture>
    );
  }

  return (
    <main className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space Launch 101
      </h1>
      <div className="number-indicators" aria-label="crew member list">
        {technology.map((tech, index) => {
          return (
            <button
              key={index}
              className={`fs-600 ${index === value && "active"}`}
              onClick={() => setValue(index)}
            >
              <span>{index + 1}</span>
            </button>
          );
        })}
      </div>
      <article className="technology-details flow">
        <header className="flow flow--space-small">
          <h2 className="fs-400 ff-serif uppercase">The Terminology ...</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </header>
        <p>{description}</p>
      </article>
      <Picture
        mobile={images.landscape}
        desktop={images.portrait}
        name={name}
      />
    </main>
  );
}

export default Technology;
