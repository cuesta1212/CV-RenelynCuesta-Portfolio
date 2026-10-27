import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked: the mailto button still works */ }
  }

  return (
    <section id="contact" className="navy">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          <h2 className="m-0 text-3xl md:text-5xl font-bold">Let's build something great together</h2>
          <p className="muted mt-4">I am open to internships and web development opportunities. The fastest way to reach me is email.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary" style={{ color: "#1b1303" }} href={`mailto:${profile.email}`}><Mail size={18} /> Email me</a>
            <button className="btn btn-ghost" onClick={copyEmail} aria-live="polite">
              {copied ? <><Check size={18} /> Copied</> : <><Copy size={18} /> Copy email</>}
            </button>
          </div>
          <ul className="list-none m-0 mt-8 p-0 grid gap-2 muted">
            <li className="flex justify-center gap-2"><MapPin size={18} /> {profile.location}</li>
            {profile.showPhone && <li className="flex justify-center gap-2"><Phone size={18} /> <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>}
          </ul>
          <div className="mt-6 flex justify-center"><SocialLinks /></div>
        </Reveal>
      </div>
    </section>
  );
}
