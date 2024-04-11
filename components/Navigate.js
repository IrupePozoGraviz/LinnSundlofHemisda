import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';

const Navigate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="menu">
      <button
        ref={buttonRef}
        className={`${styles.hamburger} ${isOpen ? styles.isOpen : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
          fill="#2E5955"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul>
          <li className={styles.navItem}>
            <Link href="/#section-one">
             Hem</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#tjanster">
              Jobba med mig
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#priser">
             <p>Webbinarier</p>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#om-oss">
            Om mig
            </Link>
          </li>
          {/* Continue with more Link components here */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigate;
