import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { features } from '../../data/slideData';
import './WeddingBookDifference.css';

export default function WeddingBookDifference() {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <section className="wbd-section" ref={sectionRef}>
      <div className="container">
        <div className="wbd-header">
          <span className="animate-in stagger-1 wbd-badge">
            THE WEDDINGBOOK DIFFERENCE
          </span>
          <h2 className="animate-in stagger-2 wbd-heading">
            Why Photographers Choose WeddingBook?
          </h2>
        </div>

        <div className="wbd-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`animate-in card-stagger-${i + 1} wbd-card`}
            >
              <span className="wbd-card-number">{feature.number}</span>
              <h3 className="wbd-card-title">{feature.title}</h3>
              <p className="wbd-card-body">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
