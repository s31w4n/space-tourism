import React, { useState } from "react";
import "../style/Crew.css";
import { crew } from "../data";

function Crew() {
  document.body.classList.remove("home");
  document.body.classList.remove("destination");
  document.body.classList.remove("technology");
  document.body.classList.add("crew");
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crew[value];

  return (
    <main className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <div className="dot-indicators flex" aria-label="crew member list">
        {crew.map((gang, index) => {
          const { name } = crew;
          return (
            <button
              key={index}
              className={`${index === value && "active"} `}
              onClick={() => setValue(index)}
            >
              <span className="sr-only">{name}</span>
            </button>
          );
        })}
      </div>
      <article className="crew-details flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{role}</h2>
          <p
            className="fs-700 uppercase ff-serif"
            style={{ whiteSpace: "nowrap" }}
          >
            {name}
          </p>
        </header>
        <p>{bio}</p>
      </article>
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={name} />
      </picture>
    </main>
  );
}

export default Crew;
