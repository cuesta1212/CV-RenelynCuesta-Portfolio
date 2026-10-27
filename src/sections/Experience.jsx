import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Empty from "../components/Empty";

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const previewRef = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const dialog = previewRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Experience" subtitle="Internships, academic projects, and leadership roles." />
      {experience.length === 0 ? (
        <Empty>No experience added yet. Add OJT, academic team projects, or organization roles to the <code>experience</code> list in <code>src/data/portfolio.js</code>.</Empty>
      ) : (
        <div className="grid gap-5">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 0.08}>
              <article className="card p-5">
                <h3 className="m-0 text-xl">{e.role}</h3>
                <p className="m-0 muted">{e.org}{e.duration ? `, ${e.duration}` : ""}</p>
                <ul className="mt-3 mb-0 pl-5">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                {e.tech && <div className="mt-3 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>}
                {e.images && <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {e.images.map((image) => <figure key={image.src} className="m-0">
                    <button type="button" onClick={() => setSelected(image)} aria-label={`View ${image.caption}`} style={{ display: "block", width: "100%", padding: 0, border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", background: "var(--bg)", cursor: "zoom-in" }}>
                      <img src={image.src} alt={image.caption} loading="lazy" className="w-full object-contain" style={{ display: "block", aspectRatio: "16 / 9" }} />
                    </button>
                    <figcaption className="muted text-sm mt-2">{image.caption}</figcaption>
                  </figure>)}
                </div>}
              </article>
            </Reveal>
          ))}
        </div>
      )}
      <dialog ref={previewRef} aria-labelledby="experience-preview-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        style={{ position: "fixed", inset: 0, margin: "auto", padding: 0, border: 0, borderRadius: 16, background: "var(--card)", color: "var(--text)", width: "min(1100px, 94vw)", maxWidth: "94vw", maxHeight: "94dvh" }}>
        {selected && <div>
          <div className="flex items-center justify-between gap-4 p-4">
            <h3 id="experience-preview-title" className="m-0 text-lg">{selected.caption}</h3>
            <button type="button" autoFocus onClick={() => setSelected(null)} aria-label="Close capstone image" title="Close" className="project-preview-close"><X size={18} strokeWidth={1.7} /></button>
          </div>
          <img src={selected.src} alt={selected.caption} style={{ display: "block", width: "100%", maxHeight: "calc(94dvh - 100px)", objectFit: "contain" }} />
        </div>}
      </dialog>
    </section>
  );
}
