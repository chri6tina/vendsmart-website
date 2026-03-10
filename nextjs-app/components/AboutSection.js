'use client';

export default function AboutSection({ city = "Jacksonville", state = "FL" }) {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content-split">
                    {/* Left Image Side */}
                    <div className="about-image-wrapper reveal">
                        <img src="/micro-market-jacksonville-fl.png" alt={`VendSmart ${city} Micro Market Installation`} className="about-img" />
                        <div className="about-glass-badge">
                            <div className="badge-icon">
                                <i className="fas fa-star" style={{ color: '#fbbf24' }}></i>
                            </div>
                            <div className="badge-text">
                                <h4>5.0 Rated</h4>
                                <p>In {city}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Text Side */}
                    <div className="about-text-content reveal reveal-delay-1">
                        <h2>About <span className="text-gradient-primary">VendSmart</span></h2>
                        <p>{city} Vending Machines by VendSmart is a premier vending company serving {city}, {state === 'FL' ? 'Florida' : state} and the surrounding regions. We specialize in providing comprehensive, modern vending solutions including smart vending machines, beautifully designed micro-markets, fresh food options, and premium coffee services tailored exactly to your workplace.</p>
                        <p>Our mission is to permanently elevate the breakroom experience by combining reliable, cutting-edge technology with aggressive, white-glove service. We know every business operates differently, which is why we build highly customized markets that boost employee morale and convenience without costing you a dime.</p>

                        <div className="about-stats-grid">
                            <div className="stat-item hover-lift">
                                <h3>500+</h3>
                                <p>Machines Installed</p>
                            </div>
                            <div className="stat-item hover-lift">
                                <h3>24/7</h3>
                                <p>Support Available</p>
                            </div>
                            <div className="stat-item hover-lift">
                                <h3>50+</h3>
                                <p>Businesses Served</p>
                            </div>
                            <div className="stat-item hover-lift">
                                <h3>100%</h3>
                                <p>Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
