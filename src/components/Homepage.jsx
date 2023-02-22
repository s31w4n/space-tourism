import React from "react";
import { Link } from "react-router-dom";
import "../style/Homepage.css";

function Homepage() {
  document.body.classList.remove("destination");
  document.body.classList.add("home");

  return (
    <main id="main" className="grid-container grid-container--home">
      <div className="flow">
        <h1
          className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1"
          style={{ whiteSpace: "nowrap" }}
        >
          So, you want to travel to
          <span
            className="d-block fs-900 ff-serif text-white"
            style={{ marginTop: "1rem" }}
          >
            Space
          </span>
        </h1>

        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore">
        <Link
          to="/destination"
          className="large-button uppercase ff-serif text-dark bg-white"
        >
          Explore
        </Link>
      </div>
    </main>
  );
}

export default Homepage;
