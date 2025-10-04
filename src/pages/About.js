import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { AboutFlone, stats, teamMembers, visions } from "../utlis/data";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb currentPage="About us" />

      <div className="container my-5">
        {/* AboutFlone Cards */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="text-muted ls-2">Who Are We</span>
            <h1 className="fw-bold">Welcome to Flone</h1>
            <div className="section-underline"></div>
          </div>
          <div className="col-12 col-md-10 col-lg-8 mx-auto mt-3">
            <p
              className="text-muted fw-light text-center"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget
              aliquam nisl nunc euismod nunc.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          {AboutFlone.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card border-0 shadow-sm position-relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-100 object-fit-cover img-hover-scale"
                />
                <div
                  className="position-absolute top-0 start-0 p-3 text-start"
                  style={{ color: "#7c4a38" }}
                >
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="mb-2">
                    Starting at <span className="fw-bold">{item.price}</span>
                  </p>
                </div>
                <Link
                  to={"/shop"}
                  className="btn btn-outline-secondary rounded-circle position-absolute bottom-0 start-0 m-3 d-flex align-items-center justify-content-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Visions Section */}
        <div className="row mt-5">
          {visions.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="text-start border-0 h-100">
                <h3 className="mt-3 fw-semibold">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards Section */}
        <div className="row gx-4 gy-5 mt-5">
          {stats.map((item, index) => (
            <div key={index} className="col-12 col-md-3 text-center">
              <i className={`bi ${item.icon} fs-1 mb-4`}></i>
              <div className="d-flex flex-column align-items-center mt-4">
                <h1 className="fw-bold text-purple">
                  <CountUp start={0} end={360} duration={2} suffix="°" />
                </h1>
                <span className="text-muted fs-5 d-block">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Team Members */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <span className="text-muted ls-2">Our Team</span>
            <h1 className="fw-bold">Meet Our Team</h1>
            {/* Decorative Line */}
            <div className="section-underline"></div>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3 mx-auto mt-5">
              <div className="card border-0 shadow-sm team-card">
                {/* Image + Overlay */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top team-img w-100"
                  />

                  {/* Social Icons Overlay */}
                  <div className="team-overlay d-flex justify-content-center align-items-center gap-3">
                    <a href="#" className="text-white fs-4">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-white fs-4">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="text-white fs-4">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold mb-1">{member.name}</h5>
                  <p className="card-text text-muted mb-2">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
