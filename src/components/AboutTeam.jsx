import React from "react";
import "./AboutTeam.css";

const team = [
  { name: "Sapna Kanaujia", role: "Creative Director" },
  { name: "Rhythm Gupta", role: "Lead Developer" },
  { name: "Gaurang Sharma", role: "UX/UI Designer" },
  { name: "Prince Sharma", role: "Marketing Strategist" },
];

const AboutTeam = () => {
  return (
    <section id="team" className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="team-avatar">{member.name[0]}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
