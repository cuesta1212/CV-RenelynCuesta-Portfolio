import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderGit2, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import SocialLinks from "../components/SocialLinks";

const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="navy relative overflow-hidden" style={{ background: "radial-gradient(1200px 500px at 85% 10%, var(--navy-2), var(--navy))" }}>
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 grid gap-12 md:grid-cols-[1.2fr_.8fr] items-center">
        {/* The one orchestrated entrance on the page: text staggers in. */}
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={item} className="muted m-0 mb-3">Hello, I am</motion.p>
          <motion.h1 variants={item} className="m-0 font-bold" style={{ fontSize: "clamp(2.6rem, 7vw, 4.8rem)" }}>
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="m-0 mt-3 text-xl" style={{ color: "var(--accent)", fontWeight: 700 }}>
            {profile.title}
          </motion.p>
          <motion.p variants={item} className="muted mt-5 max-w-xl text-lg">{profile.tagline} {profile.intro}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary"><FolderGit2 size={18} /> View my projects</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={18} /> Contact me</a>
            {profile.cvFile && <a href={profile.cvFile} download className="btn btn-ghost"><Download size={18} /> Download CV</a>}
          </motion.div>
          <motion.div variants={item} className="mt-8"><SocialLinks /></motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="justify-self-center">
          <div className="float relative" style={{ width: "min(320px, 72vw)", aspectRatio: "4 / 5" }}>
            <div className="absolute inset-0" style={{ transform: "translate(14px, 14px)", border: "2px solid var(--accent)", borderRadius: 18 }} aria-hidden="true" />
            {photoFailed ? (
              <div role="img" aria-label="Photo placeholder for Renelyn Cuesta" className="relative grid h-full w-full place-items-center text-6xl font-bold"
                   style={{ background: "var(--navy-2)", borderRadius: 18, fontFamily: "Fraunces, serif", color: "var(--accent)" }}>
                {profile.initials}
              </div>
            ) : (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoFailed(true)}
                   className="relative h-full w-full object-cover" style={{ borderRadius: 18 }} width="320" height="400" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
