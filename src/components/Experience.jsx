import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex my-5" id="experience">
        <h1 className="text-center mb-4">EXPERIENCE</h1>
        {experience.map((data) => (
          <div
            key={data.id}
            className="row ex-items my-5 align-items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.role}
                className="img-fluid rounded-circle"
                style={{
                  maxWidth: "150px",
                  border: "2px solid yellowgreen",
                }}
              />
            </div>
            <div className="col-12 col-md-8">
              <h2 className="text-center text-md-start">{data.role}</h2>
              <h4 className="text-center text-md-start">
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} - {data.endDate}
                </span>{" "}
                |{" "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              <ul className="list-unstyled mt-3">
                {data.experiences.map((item, index) => (
                  <li key={index} style={{ color: "yellow" }}>
                    <h5>{item}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
