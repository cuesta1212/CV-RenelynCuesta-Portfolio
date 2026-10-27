export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="m-0 text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded" style={{ background: "var(--accent)" }} />
      {subtitle && <p className="muted mt-4 mb-0">{subtitle}</p>}
    </div>
  );
}
