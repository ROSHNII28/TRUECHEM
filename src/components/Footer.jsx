import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Truechem logo.png';
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
  <div className="footer-logo">
    <span className="footer-logo-icon">
      <img src={logo} alt="TrueChem Logo" className="footer-logo-img" />
    </span>

    <span className="footer-logo-text">
      TRUE<span>CHEM</span>
    </span>
  </div>

  <p className="footer-tagline">
    Trusted importer and supplier of specialty construction chemicals across India.
  </p>

  <div className="footer-socials">
    <a
      href="https://wa.me/919979997334"
      target="_blank"
      rel="noreferrer"
      className="social-link"
    >
      <FaWhatsapp />
    </a>

    <a
      href="mailto:Sales@truechem.co.in"
      className="social-link"
    >
      <MdEmail />
    </a>

    <a
      href="https://www.indiamart.com/true-chem/?pid=2857433820288&c_id=114&mid=138134&pn=White%20Redispersible%20Polymer%20Powder%20RDP"
      target="_blank"
      rel="noreferrer"
      className="social-link"
    >
      <FaExternalLinkAlt />
    </a>
  </div>
</div>
   

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/products', 'Products'],
                ['/contact', 'Contact']
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Key Products</h4>
            <ul className="footer-links">
              {[
                'RDP Powder',
                'HPMC / MHEC',
                'SBR Latex',
                'PVA Powder',
                'SNF',
                'TiO2',
                'Cellulose Fibers'
              ].map(product => (
                <li key={product}>
                  <NavLink to="/products">{product}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact">

              <li>
                <MdEmail className="contact-icon" />
                <a href="mailto:Sales@truechem.co.in">
                  Sales@truechem.co.in
                </a>
              </li>

              <li>
                <MdPhone className="contact-icon" />
                <a href="tel:+919979997334">
                  +91 9979997334
                </a>
              </li>

              <li>
                <FaWhatsapp className="contact-icon" />
                <a
                  href="https://wa.me/919869125603"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 9869125603
                </a>
              </li>

              <li>
                <MdLocationOn className="contact-icon" />
                <span>
                  101, Rajasthan Technical Centre, Patanwala Compound,
                  LBS Marg, Ghatkopar West, Mumbai – 400086
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {2026} TrueChem. All rights reserved.</p>
          <p>Designed with precision for the chemical industry.</p>
        </div>
      </div>
    </footer>
  );
}