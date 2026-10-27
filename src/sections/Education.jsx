import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// A vertical timeline, newest first. It is a real sequence, so the line carries meaning.
export default function Education() {
  return (
    <section id="education" style={{ background: "color-mix(in srgb, var(--card) 55%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading title="Education" />
        <ol className="list-none m-0 p-0 relative max-w-3xl" style={{ borderLeft: "2px solid var(--border)", marginLeft: 14 }}>
          {education.map((e, i) => (
            <li key={e.school} className="relative pl-8 pb-10">
              <span className="absolute grid h-7 w-7 place-items-center rounded-full" style={{ left: -15, top: 0, background: "var(--accent)", color: "#1b1303" }}>
                <GraduationCap size={15} />
              </span>
              <Reveal delay={i * 0.1}>
                <div className="card p-5">
                  <h3 className="m-0 text-xl">{e.school}</h3>
                  <p className="m-0 mt-1 font-semibold">{e.program}</p>
                  <p className="m-0 mt-2 flex flex-wrap gap-2">
                    <span className="badge">{e.level}</span>
                    {e.dates && <span className="badge">{e.dates}</span>}
                  </p>
                  {e.note && <p className="muted m-0 mt-3">{e.note}</p>}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
