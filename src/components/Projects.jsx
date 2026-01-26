import { projects } from "../data/projects.js";

function ProjectCard({ p }) {
  return (
    <div className="projectCard">
      <div className="projectTop">
        <h3>{p.name}</h3>
        <div className="projectLinks">
          <div className="projectLinks">
            {p.demoUrl && (
              <a href={p.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
            <a href={p.codeUrl} target="_blank" rel="noreferrer">
              Codice
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={`${import.meta.env.BASE_URL}${p.image}`} className="projectImage" />
      </div>
      <p className="projectDesc">{p.description}</p>

      <div className="projectTech">
        {p.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="row align-items-end g-3 mb-3">
          <h2>Progetti</h2>
          <div className="col-12 col-md-8">
            <p className="sectionSub">
              Alcuni progetti rappresentativi delle mie competenze
            </p>
          </div>
          <div className="col-12 col-md-4 text-md-end">
            <a
              className="btnGhost"
              href="https://github.com/Marco-Bacci"
              target="_blank"
            >
              Profilo GitHub
            </a>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-12 col-md-6" key={p.name}>
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
