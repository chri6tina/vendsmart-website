export default function Hero({ title, subtitle, features = [] }) {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/jacksonville-vending-micro-market.jpg" alt={title} className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {features.length > 0 && (
            <div className="hero-features">
              {features.map((f, i) => (
                <div key={i} className="hero-feature">
                  <i className={`fas ${f.icon || 'fa-check-circle'}`}></i>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
