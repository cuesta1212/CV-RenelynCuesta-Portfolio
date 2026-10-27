import { GraduationCap, Mail, MapPin, Phone, Target } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  const info = [
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    profile.showPhone && { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: GraduationCap, label: "Career title", value: profile.title },
  ].filter(Boolean);

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="About me" />
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <p className="mt-0 text-lg">{profile.intro}</p>
          <div className="card mt-6 p-5" style={{ borderLeft: "4px solid var(--accent)" }}>
            <h3 className="m-0 mb-1 flex items-center gap-2 text-lg"><Target size={18} /> Career objective</h3>
            <p className="m-0 muted">{profile.objective}</p>
          </div>
          <h3 className="mt-6 mb-3 text-lg">Interests</h3>
          <div className="flex flex-wrap gap-2">{profile.interests.map((i) => <span key={i} className="badge">{i}</span>)}</div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="m-0 grid gap-3">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card flex items-center gap-4 p-4">
                <Icon size={20} style={{ color: "var(--accent-ink)", flexShrink: 0 }} />
                <div className="min-w-0">
                  <dt className="muted text-sm">{label}</dt>
                  <dd className="m-0 font-semibold break-words">{href ? <a href={href} style={{ color: "inherit" }}>{value}</a> : value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
