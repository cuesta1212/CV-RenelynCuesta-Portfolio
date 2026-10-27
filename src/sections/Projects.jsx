import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github as GithubIcon, X } from "lucide-react";
import { projects, social } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Empty from "../components/Empty";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return;
    const dialog = previewRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <section id="projects" style={{ background: "color-mix(in srgb, var(--card) 55%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading title="Projects" subtitle="Things I have built." />
        {projects.length === 0 ? (
          <Empty>
            No projects added yet. Open <code>src/data/portfolio.js</code> and fill in the <code>projects</code> list
            with your real work{social.github ? `, including links to ${social.github}` : ""}.
          </Empty>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08} className="h-full">
                <article className="card card-hover h-full overflow-hidden flex flex-col">
                  {p.image && <button type="button" onClick={() => setSelectedProject(p)} aria-label={`View full screenshot of ${p.name}`} style={{ background: "var(--bg)", border: 0, padding: 0, cursor: "zoom-in" }}><img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" className="w-full object-contain" style={{ aspectRatio: "16 / 9" }} /></button>}
                  <div className="p-5 flex flex-col gap-3 grow">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="m-0 text-xl">{p.name}</h3>
                      <span className="badge">{p.status}</span>
                    </div>
                    <p className="m-0 muted">{p.description}</p>
                    {p.role && <p className="m-0 text-sm"><strong>My role:</strong> {p.role}</p>}
                    <div className="flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>
                    <div className="mt-auto flex gap-2 pt-2">
                      {p.github && <a className="btn btn-line" href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> Code</a>}
                      {p.demo && <a className="btn btn-line" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live demo</a>}
                      {p.figma && <a className="btn btn-line" href={p.figma} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} prototype in Figma`}><ExternalLink size={16} /> View in Figma</a>}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
      <dialog ref={previewRef} aria-labelledby="project-preview-title" onCancel={() => setSelectedProject(null)} onClose={() => setSelectedProject(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}
        style={{ position: "fixed", inset: 0, margin: "auto", padding: 0, border: 0, borderRadius: 16, background: "var(--card)", color: "var(--text)", width: "min(1100px, 94vw)", maxWidth: "94vw", maxHeight: "94dvh" }}>
        {selectedProject && <div>
          <div className="flex items-center justify-between gap-4 p-4">
            <h3 id="project-preview-title" className="m-0 text-lg">{selectedProject.name}</h3>
            <button type="button" autoFocus onClick={() => setSelectedProject(null)} aria-label="Close project image" title="Close" className="project-preview-close"><X size={18} strokeWidth={1.7} /></button>
          </div>
          <img src={selectedProject.image} alt={`Screenshot of ${selectedProject.name}`} style={{ display: "block", width: "100%", maxHeight: "calc(94dvh - 88px)", objectFit: "contain" }} />
        </div>}
      </dialog>
    </section>
  );
}
