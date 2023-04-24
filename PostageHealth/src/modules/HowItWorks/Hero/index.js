/* eslint-disable react/no-danger */
import DOMPurify from 'isomorphic-dompurify';
import { useContext, useEffect } from 'react';
import { AnimateStartContext, SmoothScrollContext } from 'shared/context';

import { StyledHero } from './styles';

export default function Hero({ data }) {
  const { isAnimationFinished } = useContext(AnimateStartContext);
  const { gsapScroll } = useContext(SmoothScrollContext);

  const clean = DOMPurify.sanitize(data.header.codeHeading);

  const gsap = gsapScroll?.gsap;

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
    <StyledHero
      className="hero"
      filter={data.backgroundFilter}
      backgroundImage={data.backgroundImage.url}
    >
      <div className="content-container">
        <div className="hero__title-wrapper" dangerouslySetInnerHTML={{ __html: clean }} />

        <div className="hero__footer">
          <div className="scroll-down content-start">
            <div className="scroll-down__line">
              <div className="scroll-down__line__inner" />
            </div>
            <span className="scroll-down__text">Scroll down</span>
          </div>
          <p className="hero__text content-start">
            {data.tagline[0].text}
            <br />
            <br />
            {data.tagline[1].text}
          </p>
        </div>
      </div>
    </StyledHero>
  );
}
