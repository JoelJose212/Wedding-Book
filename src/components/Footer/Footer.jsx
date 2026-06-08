import './Footer.css';

const productLinks = [
  'Client Gallery',
  'High Data Transfer',
  'CRM & Billing',
  'Mobile App',
  'AR Photo to Video',
];

const companyLinks = ['About Us', 'Blog', 'Careers', 'Press', 'Contact Us'];

const supportLinks = [
  'Help Center',
  'Tutorials',
  'Privacy Policy',
  'Terms & Conditions',
  'Return & Refund',
];

function SocialIcon({ path, label }) {
  return (
    <a
      className="footer-social-icon"
      href="#"
      onClick={(e) => e.preventDefault()}
      aria-label={label}
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
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a className="footer-logo" href="#" onClick={(e) => e.preventDefault()}>
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
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              WeddingBook
            </a>
            <p className="footer-tagline">
              Empowering photographers with AI-powered tools to deliver
              unforgettable memories.
            </p>
            <div className="footer-socials">
              <SocialIcon
                label="Instagram"
                path="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
              />
              <SocialIcon
                label="Facebook"
                path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
              <SocialIcon
                label="Twitter"
                path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
              />
              <SocialIcon
                label="YouTube"
                path="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"
              />
            </div>
          </div>

          {/* Product Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Support & Legal</h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2025 WeddingBook by MYVGTECH PRIVATE LIMITED. All rights reserved.
          </span>
          <span className="footer-love">Made with ❤ for Photographers</span>
        </div>
      </div>
    </footer>
  );
}
