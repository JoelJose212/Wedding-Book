import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  'Home',
  'Client Gallery',
  'CRM',
  'Data Transfer',
  'Mobile App',
  'AR',
  'Pricing',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-container">
        <a className="nav-logo" href="#" onClick={(e) => e.preventDefault()}>
          <svg
            className="nav-logo-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          WeddingBook
        </a>

        <ul className={`nav-links ${mobileOpen ? 'nav-links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                }}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="nav-mobile-actions">
            <button className="btn btn-ghost nav-login-btn">Login</button>
            <button className="btn btn-primary btn-pill nav-trial-btn">
              Start Free Trial
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn btn-ghost nav-login-btn">Login</button>
          <button className="btn btn-primary btn-pill nav-trial-btn">
            Start Free Trial
          </button>
        </div>

        <button
          className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
