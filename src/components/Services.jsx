import React from "react";
import "./Services.css";

const services = [
  {
    title: "Film Production",
    desc: "Creative film production services from concept to final edit.",
  },
  {
    title: "Branding",
    desc: "We craft brand identities that communicate your vision effectively.",
  },
  {
    title: "Art Curation",
    desc: "Curating art projects with an eye for storytelling and innovation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
