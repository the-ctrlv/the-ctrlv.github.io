import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import { useWindowResize } from 'shared';

import logoBlack from 'assets/icons/logo-black.svg';
import logoMob from 'assets/icons/logo-mob.svg';
import iconFacebook from 'assets/icons/facebook.svg';
import iconInstagram from 'assets/icons/instagram.svg';
import iconTwitter from 'assets/icons/twitter.svg';

import { StyledFooter } from './styles';
import MailForm from '../MailForm';

export default function Footer({ isMinified }) {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const { width } = useWindowResize();

  useEffect(() => {
    setIsMobileMode(width < 700);
  }, [width]);

  const currentLogo = isMobileMode ? logoMob : logoBlack;

  return (
    <StyledFooter className="footer">
      {!isMinified && (
        <ul className="flex-between fadeIn" data-scroll>
          <li>
            <Image
              priority
              src={currentLogo.src}
              alt="logo"
              width={isMobileMode ? 128 : 194}
              height={isMobileMode ? 103 : 42}
            />
            {!isMobileMode && (
              <p>
                Postage is the modern men's health platform that offers personalized care with data
                driven insights, licensed physician consultations, and medications, all from home.
              </p>
            )}
          </li>
          <li>
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How it Works</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact-us">Contact us</Link>
            <Link href="/research">Research</Link>
          </li>
          <li>
            <div className="footer-contacts">
              <span>Call or text us</span>
              <a href="tel:+19171234567">+1 (917) 123-4567</a>
            </div>
            <div className="footer-contacts">
              <span>Email us anytime</span>
              <a href="mailto:info@postage.com">info@postage.com</a>
            </div>

            <div className="footer-socials flex-between">
              <a href="https://www.facebook.com/postagehealth" target="_blank" rel="noreferrer">
                <Image
                  priority
                  src={iconFacebook.src}
                  alt="facebook"
                  width={iconFacebook.width}
                  height={iconFacebook.height}
                />
              </a>
              <a href="https://www.instagram.com/postagehealth" target="_blank" rel="noreferrer">
                <Image
                  priority
                  src={iconInstagram.src}
                  alt="instagram"
                  width={iconInstagram.width}
                  height={iconInstagram.height}
                />
              </a>
              <a href="https://twitter.com/PostageHealth" target="_blank" rel="noreferrer">
                <Image
                  priority
                  src={iconTwitter.src}
                  alt="twitter"
                  width={iconTwitter.width}
                  height={iconTwitter.height}
                />
              </a>
            </div>
          </li>
          <li>
            <h6>WE MAKE SPECIAL DELIVERIES FOR YOUR DIGITAL INBOX, TOO</h6>
            <MailForm />
          </li>
        </ul>
      )}
      <div className="footer-bottom flex-between">
        <p>
          © 2022 Copyright ©July 9, 2022. Postage | <span>All Rights Reserved</span>
        </p>
        <div>
          <Link href="/terms-of-use">Terms of use</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </StyledFooter>
  );
}
