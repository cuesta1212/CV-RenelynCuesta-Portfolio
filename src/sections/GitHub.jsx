import { Github as GithubIcon } from "lucide-react";
import { social } from "../data/portfolio";
import Reveal from "../components/Reveal";

// Static link only: no API calls, so it can never show a broken or empty state.
export default function GitHub() {
  if (!social.github) return null;
  const username = social.github.split("/").filter(Boolean).pop();
  return (
    <section id="github" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <div className="card p-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <GithubIcon size={40} />
            <div>
              <h2 className="m-0 text-2xl">GitHub</h2>
              <p className="m-0 muted">@{username}. My code and repositories live here.</p>
            </div>
          </div>
          <a className="btn btn-primary" style={{ color: "#1b1303" }} href={social.github} target="_blank" rel="noopener noreferrer">Visit my GitHub profile</a>
        </div>
      </Reveal>
    </section>
  );
}
