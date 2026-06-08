import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './PhotographersWelcome.css';

const stats = [
  { number: '12.5M+', label: 'Images Shared' },
  { number: '50K+', label: 'Events Covered' },
  { number: '8K+', label: 'Photographers' },
];

export default function PhotographersWelcome() {
  const sectionRef = useScrollAnimation(0.15);

  return (
    <section className="pw-section" ref={sectionRef}>
      <div className="pw-container">
        <span className="animate-in stagger-1 pw-badge">
          THE FUTURE OF WEDDING PHOTOGRAPHY
        </span>

        <h2 className="animate-in stagger-2 pw-heading">
          Photographers Are Welcome
        </h2>

        <p className="animate-in stagger-3 pw-sub1">
          Face Recognition Based Images Sharing Platform for Photographers.
        </p>

        <p className="animate-in stagger-4 pw-sub2">
          The better way for modern photographers to share Photos &amp; Videos.
        </p>

        <div className="animate-in stagger-5 pw-buttons">
          <button className="btn btn-primary pw-btn">Start Free Trial</button>
          <button className="btn btn-outline pw-btn">
            See What We Offer ↗
          </button>
        </div>

        <div className="animate-in stagger-6 pw-stats">
          {stats.map((stat, i) => (
            <div className="pw-stat" key={i}>
              <span className="pw-stat-number">{stat.number}</span>
              <span className="pw-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
