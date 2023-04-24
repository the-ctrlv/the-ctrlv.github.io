/* eslint-disable react/no-danger */
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

import { useContext, useEffect } from 'react';
import { AnimateStartContext, DeviceModeContext, SmoothScrollContext } from 'shared/context';

import MouseFollowProvider from 'components/MouseFollowProvider';

import bottleBG from 'assets/images/bottle-bg.jpg';
import bottleBGMob from 'assets/images/bottle-bg-mob.jpg';

import { heroFooterWords } from './helpers';

import { StyledHero } from './styles';

const marquee = (
  <div className="marquee__wrapper">
    {heroFooterWords.map((word, i) => (
      <span key={i}>
        More
        <span>{word}</span>
      </span>
    ))}
  </div>
);

export default function Hero({ data }) {
  const { isMobileMode } = useContext(DeviceModeContext);
  const { gsapScroll } = useContext(SmoothScrollContext);
  const { isAnimationFinished } = useContext(AnimateStartContext);

  const currentBottleBG = isMobileMode ? bottleBGMob : bottleBG;

  const gsap = gsapScroll?.gsap;

  const clean = DOMPurify.sanitize(data.header.codeHeading);
  useEffect(() => {
    if (isAnimationFinished) {
      gsap?.to('.content-start', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.5,
      });
    }
  }, [gsap, isAnimationFinished]);

  return (
    <>
      <StyledHero
        className="hero"
        filter={data.backgroundFilter}
        backgroundImage={data.backgroundImage.url}
      >
        <div className="content-container">
          <div
            className="hero__title-wrapper"
            dangerouslySetInnerHTML={{ __html: clean }}
          />

          <div className="hero__footer">
            <p className="hero__sub-title content-start">
              {data.tagline[0].text}
              {' '}
              {data.tagline[1].text}
              {' '}
              <strong>{data.tagline[2].text}</strong>
            </p>
            <div className="scroll-down content-start">
              <div className="scroll-down__line">
                <div className="scroll-down__line__inner" />
              </div>
              <span className="scroll-down__text">Scroll down</span>
            </div>
            <div className="hero__bottle-container flex-between content-start">
              <div className="hero__bottle-container__img-wrapper">
                <Image
                  priority
                  src={currentBottleBG.src}
                  height={currentBottleBG.height}
                  width={currentBottleBG.width}
                  alt="bottle"
                />
              </div>
              <div className="hero__bottle-container__content">
                <h6>{data.productPreview.header.heading}</h6>
                <p>
                  {data.productPreview.body[0].text} <span>{data.productPreview.body[1].text}</span>
                  {data.productPreview.body[2].text} <span>{data.productPreview.body[3].text}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledHero>
      <MouseFollowProvider>
        <div className="marquee">
          {marquee}
          {marquee}
        </div>
      </MouseFollowProvider>
    </>
  );
}
