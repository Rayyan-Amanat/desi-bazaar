const trustPoints = [
  {
    icon: "🌿",
    title: "No Preservatives",
    description: "Naturally made, no chemicals added",
  },
  {
    icon: "🕰️",
    title: "Long Shelf Life",
    description: "Traditional methods that last longer",
  },
  {
    icon: "🏡",
    title: "Village Made",
    description: "Prepared in small batches, not factories",
  },
  {
    icon: "❄️",
    title: "No Refrigeration Needed",
    description: "Easy to store, just like old times",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {trustPoints.map((item, index) => (
            <div className="trust-card" key={index}>
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
