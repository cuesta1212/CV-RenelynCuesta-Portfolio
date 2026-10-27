import { useState } from "react";
import { skills } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// Category tabs. Each tab is a real button, so it works with keyboard and touch.
export default function Skills() {
  const [current, setCurrent] = useState(skills[0].category);
  const group = skills.find((s) => s.category === current);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Skills" subtitle="Tools and languages I have used in my projects." />
      <div role="tablist" aria-label="Skill categories" className="mb-6 flex flex-wrap gap-2">
        {skills.map((s) => {
          const on = current === s.category;
          return (
            <button key={s.category} role="tab" aria-selected={on} onClick={() => setCurrent(s.category)} className="btn"
                    style={{ background: on ? "var(--navy)" : "transparent", color: on ? "var(--on-navy)" : "var(--text)", borderColor: on ? "var(--navy)" : "var(--border)" }}>
              {s.category}
            </button>
          );
        })}
      </div>
      <Reveal key={current}>
        <div role="tabpanel" className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {group.items.map((it) => (
            <div key={it.name} className="card card-hover p-5">
              <p className="m-0 text-lg font-bold">{it.name}</p>
              {it.level && <p className="m-0 mt-1 muted text-sm">{it.level}</p>}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
