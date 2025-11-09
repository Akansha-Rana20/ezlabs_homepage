
import React, { useState } from "react";
import "./Portfolio.css";

const ALL_PROJECTS = [
  { id: 1, title: "Short Film Project", category: "Film", img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=60" },
  { id: 2, title: "Brand Identity Campaign", category: "Branding", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60" },
  { id: 3, title: "Art Exhibition Curation", category: "Curation", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, project: null });

  const categories = ["All", ...Array.from(new Set(ALL_PROJECTS.map(p => p.category)))];

  const projects = activeFilter === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/1200x800?text=Project+Image";
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Our Portfolio</h2>

      <div className="portfolio-filters" role="tablist" aria-label="Filter projects">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
            aria-pressed={activeFilter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {projects.map(p => (
          <article key={p.id} className="portfolio-card" aria-hidden={lightbox.open}>
            <button
              className="card-inner"
              onClick={() => setLightbox({ open: true, project: p })}
              aria-label={`Open ${p.title}`}
              type="button"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="card-img"
                onError={handleImgError}
              />
              <div className="card-overlay">
                <h3>{p.title}</h3>
                <p className="card-cat">{p.category}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, project: null })}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox({ open: false, project: null })}>✕</button>
            <img src={lightbox.project.img} alt={lightbox.project.title} onError={handleImgError} />
            <div className="lightbox-meta">
              <h3>{lightbox.project.title}</h3>
              <p>Category: {lightbox.project.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
