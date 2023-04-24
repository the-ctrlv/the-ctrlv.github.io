import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { getClassNames, useWindowResize } from 'shared';

import logo from 'assets/icons/logo.svg';
import { SmoothScrollContext } from 'shared/context';
import { navigationLinks } from './helpers';

import { StyledHeader } from './styles';

export default function Header() {
  const { width } = useWindowResize();
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locoScroll, gsapScroll } = useContext(SmoothScrollContext);
  const gsap = gsapScroll?.gsap;

  const router = useRouter();

  const isHomePage = router.pathname === '/';

  useEffect(() => {
    if (width === 0) return;
    setIsTabletMode(width <= 1024);
  }, [width]);

  useEffect(() => {
    if (isMenuOpen) {
      locoScroll?.stop();
    } else {
      locoScroll?.start();
    }
  }, [isMenuOpen, locoScroll]);

  const onHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (width <= 1024 && width !== 0) {
      document.querySelector('.mobile-data-scroll').setAttribute('data-scroll', '');

      gsap?.to('.header', {
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            if (!isMenuOpen) {
              setTimeout(() => {
                setShowHeader(self.direction !== 1);
              }, 100);
            }
            if (self.progress < 0.1) {
              setShowHeader(true);
            }
          },
        },
      });
    }
  }, [width, gsap, showHeader]);

  const navContent = (
    <>
      <nav className={isTabletMode ? 'mobile-menu__nav' : 'navigation'}>
        {navigationLinks.map((item) => (
          <Link key={item.id} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div className={getClassNames('right-links', isTabletMode && 'mobile')}>
        <Link
          href="/assessment"
          className="btn"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="title-wrapper">
            <span>GET STARTED</span>
            <span>GET STARTED</span>
          </div>
        </Link>
        <a
          href="https://27215.portal.athenahealth.com"
          className="btn btn--outline"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="title-wrapper">
            <span>Patient Portal</span>
            <span>Patient Portal</span>
          </div>
        </a>
      </div>
    </>
  );

  return (
    <StyledHeader
      className={getClassNames('header mobile-data-scroll', showHeader ? 'visible' : '')}
      data-scroll-sticky=""
      data-scroll-target="#main"
    >
      <div
        onClick={() => {
          if (!isHomePage) {
            router.push('/');
          }
          if (isMenuOpen) {
            setIsMenuOpen(false);
          }
          locoScroll.scrollTo('top');
        }}
      >
        <Image priority src={logo.src} alt="logo" width={157} height={34} />
      </div>
      {isTabletMode ? (
        <>
          <div
            onClick={onHamburgerClick}
            className={getClassNames('hamburger', isMenuOpen ? 'active' : '')}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </div>
          <div className={getClassNames('mobile-menu', isMenuOpen ? 'active' : '')}>
            <div className="mobile-menu__wrapper">{navContent}</div>
          </div>
        </>
      ) : (
        <div className="header-wrapper">{navContent}</div>
      )}
    </StyledHeader>
  );
}
