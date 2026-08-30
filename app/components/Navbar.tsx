import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'University', path: '/articles/university' },
  { label: 'City',      path: '/articles/city' },
  { label: 'A&C',        path: '/articles/ac' },
  { label: 'Sports',     path: '/articles/sports' },
  { label: 'Spectrum',   path: '/articles/spectrum' },
  { label: 'Opinion',    path: '/articles/opinion' },
  { label: 'Crosswords', path: '/articles/crosswords' },
  { label: 'Credits',    path: '/#homepage-staff' },
];

export function Navbar({ current }: { current?: string }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-wrapper" style={{ paddingBottom: '1rem' }}>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span className={`nav-hamburger-icon ${menuOpen ? 'open' : ''}`} />
      </button>

      <ul className={`nav-list ${menuOpen ? 'nav-list--open' : ''}`}>
        {NAV_LINKS.map(({ label, path }) => {
          const isActive = current
            ? current === label.toLowerCase()
            : location.pathname === path;

          const creditsLink = label === 'Credits';

          return (
            <li key={label} className="nav-item">
              {creditsLink ? (
                <a href={path} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ) : isActive ? (
                <Link
                  to={path}
                  className="nav-active-banner"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-banner-label">{label}</span>
                </Link>
              ) : (
                <Link to={path} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
