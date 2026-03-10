'use client';

import Link from 'next/link';

export default function BentoServices({ city = "Jacksonville", state = "FL" }) {
    return (
        <section className="services-overview bg-mesh">
            <div className="container">
                <div className="section-header reveal">
                    <h2>{city} Vending Machines - Premier Vending Solutions</h2>
                    <p className="section-subtitle">Transform your workplace with cutting-edge vending technology and exceptional service.</p>
                </div>
                <div className="bento-grid">
                    {/* Main Featured Card - Spans 2 columns */}
                    <Link href={`/vending-services-${city.toLowerCase().replace(/\s+/g, '-')}`} className="service-card-link bento-link-large">
                        <div className="bento-card bento-card-large hover-lift">
                            <div className="bento-bg-mesh"></div>

                            <div className="bento-large-split">
                                {/* Left Text Content */}
                                <div className="bento-content-wrapper">
                                    <div className="service-icon float-icon"><i className="fas fa-robot"></i></div>
                                    <div className="bento-content">
                                        <h3>Smart Vending Services</h3>
                                        <p>Comprehensive vending services throughout {city} {state}. We deploy intelligent machines equipped with real-time telemetry, ensuring your team's favorite snacks and beverages are always fully stocked. Experience automated restocks and zero downtime.</p>
                                        <ul className="service-features bento-features">
                                            <li><i className="fas fa-check-circle"></i> Contactless payments (Apple Pay, Google Pay)</li>
                                            <li><i className="fas fa-check-circle"></i> Real-time inventory tracking & analytics</li>
                                            <li><i className="fas fa-check-circle"></i> Energy-efficient, modern hardware</li>
                                        </ul>
                                        <div className="service-cta bento-cta">
                                            <span className="learn-more">Explore Smart Vending <i className="fas fa-arrow-right"></i></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Image Content */}
                                <div className="bento-image-wrapper">
                                    <img src="/haha-ultra-black.png" alt="VendSmart Intelligent Vending Machine" className="bento-floating-image" />
                                </div>
                            </div>

                        </div>
                    </Link>

                    {/* Medium Card - Rich Background style */}
                    <Link href={`/setting-up-a-micro-market-in-your-${city.toLowerCase().replace(/\s+/g, '-')}-office`} className="service-card-link bento-link-medium">
                        <div className="bento-card bento-card-medium glass-panel hover-lift">
                            <div className="service-icon"><i className="fas fa-store"></i></div>
                            <h3>Custom Micro-Markets</h3>
                            <p>Transform your break room into a modern convenience store. We design and install beautiful open-market concepts featuring fresh food, healthy options, and seamless 24/7 self-checkout kiosks.</p>
                            <div className="service-cta bento-cta light-cta">
                                <span className="learn-more">Discover Markets <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </Link>

                    {/* Dark Styled Card */}
                    <Link href="/coffeeservices" className="service-card-link bento-link-dark">
                        <div className="bento-card bento-card-dark hover-lift">
                            <div className="service-icon"><i className="fas fa-coffee"></i></div>
                            <h3>Premium Coffee Solutions</h3>
                            <p>Elevate the workplace morning routine with our barista-quality espresso machines and single-serve office coffee setups. Complete with regular maintenance and curated bean selections.</p>
                            <div className="service-cta bento-cta light-cta">
                                <span className="learn-more">Get Coffee Services <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
