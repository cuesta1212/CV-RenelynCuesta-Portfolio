// Shown when a section has no entries yet. Tells the owner exactly what to do.
export default function Empty({ children }) {
  return (
    <div className="card p-6 muted" style={{ borderStyle: "dashed" }}>
      {children}
    </div>
  );
}
