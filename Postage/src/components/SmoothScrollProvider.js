import { useEffect, useMemo, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SmoothScrollContext } from 'shared/context';

export function SmoothScrollProvider({ children, options }) {
  const [locoScroll, setLocoScroll] = useState(null);
  const [gsapScroll, setGsapScroll] = useState(null);

  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        setLocoScroll(
          new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') ?? undefined,
            ...options,
          })
        );
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`);
      }
    })();

    // eslint-disable-next-line consistent-return
    return () => {
      locoScroll?.destroy();
    };
  }, []);

  useEffect(() => {
    locoScroll?.destroy();
    locoScroll?.init();
    setTimeout(() => {
      locoScroll?.update();
    }, 500);
  }, [router.asPath, locoScroll]);

  useEffect(() => {
    if (locoScroll && gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      setGsapScroll({ gsap, ScrollTrigger });

      locoScroll.on('scroll', ScrollTrigger.update);

      ScrollTrigger.defaults({
        scroller: containerRef.current,
      });
      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: containerRef.current.style.transform ? 'transform' : 'fixed',
      });
      ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
      ScrollTrigger.refresh();
      new ResizeObserver(() => locoScroll.update()).observe(
        document.querySelector('[data-scroll-container]')
      );
    }
  }, [locoScroll, gsap, ScrollTrigger, router.asPath]);

  const contextValueProvider = useMemo(
    () => ({ locoScroll, gsapScroll }),
    [locoScroll, gsapScroll]
  );

  return (
    <SmoothScrollContext.Provider value={contextValueProvider}>
      <main data-scroll-container ref={containerRef} id="main">
        {children}
      </main>
    </SmoothScrollContext.Provider>
  );
}
