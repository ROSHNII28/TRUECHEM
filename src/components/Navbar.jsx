import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Truechem logo.png';
import '../styles/Navbar.css';

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={handleLinkClick}>
  <span className="brand-icon">
    <img src={logo} alt="TrueChem Logo" className="brand-logo" />
  </span>
  <span className="brand-name">TRUE<span>CHEM</span></span>
</NavLink>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
                onClick={handleLinkClick}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            
              
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
