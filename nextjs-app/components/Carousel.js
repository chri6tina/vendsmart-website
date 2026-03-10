'use client';

import { useState, useEffect } from 'react';

const slides = [
  { img: '/haha-us360-mini-black.png', alt: 'VendSmart US360 Mini - Compact smart vending machine', caption: 'VendSmart US360 Mini' },
  { img: '/haha-pro-black.png', alt: 'VendSmart Pro - Professional smart vending machine', caption: 'VendSmart Pro' },
  { img: '/haha-ultra-black.png', alt: 'VendSmart Ultra - Premium smart vending machine', caption: 'VendSmart Ultra' },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      <div className="container">
        <div className="section-header">
          <h2>Smart Vending Machines</h2>
          <p className="section-subtitle">Explore our VendSmart premium vending machine lineup – advanced technology for modern businesses</p>
        </div>
        <div className="carousel">
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, i) => (
                <div key={i} className={`carousel-slide ${i === currentSlide ? 'active' : ''}`}>
                  <img src={slide.img} alt={slide.alt} />
                  <p className="carousel-caption">{slide.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button key={i} className={`carousel-dot ${i === currentSlide ? 'active' : ''}`} aria-label={`Go to slide ${i + 1}`} onClick={() => setCurrentSlide(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
