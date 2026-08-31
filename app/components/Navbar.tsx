import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'University', path: '/articles/university' },
  { label: 'City',      path: '/articles/city' },
  { label: 'Spectrum',   path: '/articles/spectrum' },
  { label: 'Opinion',    path: '/articles/opinion' },
  { label: 'Sports',     path: '/articles/sports' },
  { label: 'A&C',        path: '/articles/ac' },
  { label: 'Video',        path: '/articles/video' },
  { label: 'Crosswords', path: '/articles/crosswords' },
  { label: 'Credits',    path: '/#homepage-staff' },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#homepage-staff') {
      requestAnimationFrame(() => {
        document.getElementById('homepage-staff')?.scrollIntoView({ block: 'start' });
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const syncNavWidth = () => {
      const nav = navRef.current;
      if (!nav) return;

      const navWidth = Math.ceil(nav.getBoundingClientRect().width);
      document.documentElement.style.setProperty('--nav-width', `${navWidth}px`);
    };

    syncNavWidth();

    const resizeObserver = new ResizeObserver(syncNavWidth);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    window.addEventListener('resize', syncNavWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncNavWidth);
    };
  }, []);

  const handleCreditsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    navigate('/#homepage-staff');
  };

  return (
    <nav ref={navRef} className="nav-wrapper" style={{ paddingBottom: '1rem' }}>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span className={`nav-hamburger-icon ${menuOpen ? 'open' : ''}`} />
      </button>

      <ul className={`nav-list ${menuOpen ? 'nav-list--open' : ''}`}>
        {NAV_LINKS.map(({ label, path }) => {
          const isActive = location.pathname === path;
          const creditsLink = label === 'Credits';

          return (
            <li key={label} className="nav-item">
              {creditsLink ? (
                <a href={path} className="nav-link" onClick={handleCreditsClick}>
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
