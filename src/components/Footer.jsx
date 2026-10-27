import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="navy" style={{ borderTop: "1px solid rgba(238,241,247,.12)" }}>
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <p className="m-0 text-lg font-bold" style={{ fontFamily: "Fraunces, serif" }}>{profile.name}</p>
          <p className="muted m-0 text-sm">{profile.tagline}</p>
        </div>
        <ul className="list-none m-0 p-0 flex flex-wrap gap-x-4 gap-y-1 md:justify-center text-sm">
          {navLinks.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="muted no-underline hover:underline">{label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-4 md:justify-end">
          <SocialLinks />
          <a href="#home" aria-label="Back to top" className="btn btn-ghost" style={{ padding: ".55rem" }}>
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
      <p className="muted m-0 pb-6 text-center text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
