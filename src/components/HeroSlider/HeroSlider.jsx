import { slides, cardThumbs } from '../../data/slideData';
import { useSlider } from '../../hooks/useSlider';
import './HeroSlider.css';

export default function HeroSlider() {
  const { currentSlide, next, prev, goToSlide, progress } = useSlider(
    slides.length,
    5000
  );

  return (
    <section className="hero" id="hero">
      {/* Background Slides */}
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'hero-slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="hero-content">
        <div className="hero-text">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`hero-text-group ${i === currentSlide ? 'hero-text-group--active' : ''}`}
            >
              <span className="hero-location">{slide.location}</span>
              <h1 className="hero-couple">{slide.couple}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-photographer">
                <img
                  className="hero-avatar"
                  src={slide.avatar}
                  alt={slide.photographer}
                  loading="lazy"
                />
                <span className="hero-photographer-name">
                  {slide.photographer}
                </span>
                <span className="hero-divider"></span>
                <span className="hero-gold-dot"></span>
              </div>
              <a
                className="hero-cta"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                See More Work →
              </a>
            </div>
          ))}
        </div>

        {/* Slide Number */}
        <span className="hero-slide-number" key={`num-${currentSlide}`}>
          {slides[currentSlide].number}
        </span>
      </div>

      {/* Right Side Cards */}
      <div className="hero-cards">
        <div className="hero-cards-row">
          {cardThumbs.map((thumb, i) => (
            <div
              key={i}
              className={`hero-card ${i === currentSlide ? 'hero-card--active' : ''}`}
              style={{ backgroundImage: `url(${thumb})` }}
              onClick={() => goToSlide(i % slides.length)}
            >
              <div className="hero-card-overlay"></div>
              <div className="hero-card-info">
                <span className="hero-card-location">
                  {slides[i % slides.length].location}
                </span>
                <span className="hero-card-couple">
                  {slides[i % slides.length].couple}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="hero-controls">
          <button
            className="hero-arrow"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="hero-arrow"
            onClick={next}
            aria-label="Next slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="hero-progress">
          <div
            className="hero-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
