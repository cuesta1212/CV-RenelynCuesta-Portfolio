import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { social } from "../data/portfolio";

const ICONS = { github: Github, facebook: Facebook, instagram: Instagram, linkedin: Linkedin };

// Only renders accounts that have a URL in portfolio.js.
export default function SocialLinks() {
  return (
    <ul className="list-none m-0 p-0 flex gap-3">
      {Object.entries(social).filter(([, url]) => url).map(([key, url]) => {
        const Icon = ICONS[key];
        return (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${key} profile (opens in a new tab)`}
               className="grid h-10 w-10 place-items-center rounded-full transition-transform hover:-translate-y-0.5"
               style={{ border: "1px solid rgba(238,241,247,.3)", color: "inherit" }}>
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
