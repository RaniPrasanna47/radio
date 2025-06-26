import React from 'react';
import './testimonialsection.css';

const testimonials = [
  {
    id: 1,
    quote: "Radio Nitroz has the best electronic music selection I've ever heard. Never stop broadcasting!",
    handle: "@dancefloorqueen",
    emoji: "🕺"
  },
  {
    id: 2,
    quote: "The late night mixes are absolutely fire. My go-to station for coding sessions.",
    handle: "@dev_dj",
    emoji: "💻"
  },
  {
    id: 3,
    quote: "Discovered so many new artists through Radio Nitroz. The curation is next level.",
    handle: "@music_explorer",
    emoji: "🎧"
  },
  {
    id: 4,
    quote: "The sound quality is insane! Feels like I'm in the club even at home.",
    handle: "@audiophile",
    emoji: "🔊"
  },
  {
    id: 5,
    quote: "Best radio station for underground techno and house. Period.",
    handle: "@techno_tribe",
    emoji: "⚡"
  },
  {
    id: 6,
    quote: "The DJ sets are legendary. Always fresh, always forward-thinking.",
    handle: "@future_sounds",
    emoji: "🚀"
  },
  {
    id: 7,
    quote: "Radio Nitroz got me through quarantine. The vibes are always perfect.",
    handle: "@isolation_raver",
    emoji: "🏠"
  },
  {
    id: 8,
    quote: "Consistently impressed with the programming. A true gem in online radio.",
    handle: "@music_critic",
    emoji: "💎"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <div className="testimonial-author">
        <span className="testimonial-emoji">{testimonial.emoji}</span>
        <span className="testimonial-handle">{testimonial.handle}</span>
      </div>
    </div>
  );
};

const TestimonialRow = ({ testimonials, direction }) => {
  // Duplicate the testimonials to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  return (
    <div className={`testimonial-row ${direction}`}>
      <div className="testimonial-track">
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What the Hype's About</h2>
      <div className="testimonial-container">
        <TestimonialRow testimonials={testimonials} direction="left" />
        <TestimonialRow testimonials={testimonials} direction="right" />
      </div>
    </section>
  );
};

export default TestimonialSection;