import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { achievements } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Empty from "../components/Empty";

export default function Achievements() {
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
    <section id="achievements" style={{ background: "color-mix(in srgb, var(--card) 55%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading title="Achievements and certifications" />
        {achievements.length === 0 ? (
          <Empty>No achievements added yet. Add real certificates, seminars, trainings, or organization roles to the <code>achievements</code> list in <code>src/data/portfolio.js</code>.</Empty>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.08} className="h-full">
                <article className="card card-hover p-5 h-full">
                  {a.image && <button type="button" onClick={() => setSelected(a)} aria-label={`View certificate: ${a.title}`} style={{ width: "100%", background: "#fff", border: 0, borderRadius: 10, padding: 8, marginBottom: 20, cursor: "zoom-in" }}>
                    <img src={a.image} alt={`${a.title} certificate`} loading="lazy" className="w-full object-contain" style={{ aspectRatio: "3 / 2", display: "block" }} />
                  </button>}
                  <Award size={22} style={{ color: "var(--accent-ink)" }} />
                  <h3 className="m-0 mt-2 text-lg">{a.title}</h3>
                  <p className="m-0 muted text-sm">{[a.org, a.date].filter(Boolean).join(", ")}</p>
                  {a.description && <p className="mt-2 mb-0">{a.description}</p>}
                  {a.link && <a className="mt-3 inline-flex items-center gap-1 font-semibold" href={a.link} target="_blank" rel="noopener noreferrer">Verify <ExternalLink size={14} /></a>}
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
      <dialog ref={previewRef} aria-labelledby="certificate-preview-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        style={{ position: "fixed", inset: 0, margin: "auto", padding: 0, border: 0, borderRadius: 16, background: "var(--card)", color: "var(--text)", width: "min(1100px, 94vw)", maxWidth: "94vw", maxHeight: "94dvh" }}>
        {selected && <div>
          <div className="flex items-center justify-between gap-4 p-4">
            <h3 id="certificate-preview-title" className="m-0 text-lg">{selected.title}</h3>
            <button type="button" autoFocus onClick={() => setSelected(null)} aria-label="Close certificate" title="Close" className="project-preview-close"><X size={18} strokeWidth={1.7} /></button>
          </div>
          <img src={selected.image} alt={`${selected.title} certificate`} style={{ display: "block", width: "100%", maxHeight: "calc(94dvh - 100px)", objectFit: "contain" }} />
        </div>}
      </dialog>
    </section>
  );
}
