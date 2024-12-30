import React from "react";
import achievements from "./Data/achievements.json";

const Achievement = () => {
  return (
    <>
      <div className="container achievements" id="achievements">
        <h1>ACHIEVEMENTS</h1>
        <div className="items">
          {achievements.map((data) => (
            <div
              className="item card"
              key={data.id}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt={data.title} className="card-image" />
              <div className="card-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
