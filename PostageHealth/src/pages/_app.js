import { useEffect, useMemo, useState } from 'react';
import Router, { useRouter } from 'next/router';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { SmoothScrollProvider } from 'components/SmoothScrollProvider';
import Loader from 'components/Loader';

import { AnimateStartContext, DeviceModeContext } from 'shared/context';

import { GlobalStyle } from 'shared/styles';
import { useWindowResize } from 'shared';

import 'normalize.css/normalize.css';
import 'styles/locomotive-scroll.css';

function MyApp({ Component, pageProps }) {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const router = useRouter();
  const { width } = useWindowResize();

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      setIsAnimationFinished(true);
    });
  }, [Router.events]);

  useEffect(() => {
    if (width === 0) return;
    setIsMobileMode(width <= 700);
    setIsTabletMode(width <= 1024);
  }, [width]);

  const AnimateStartContextValueProvider = useMemo(
    () => ({ isAnimationFinished, setIsAnimationFinished }),
    [isAnimationFinished, setIsAnimationFinished]
  );

  const DeviceModeContextValueProvider = useMemo(
    () => ({ isMobileMode, isTabletMode }),
    [isMobileMode]
  );

  return (
    <AnimateStartContext.Provider value={AnimateStartContextValueProvider}>
      <DeviceModeContext.Provider value={DeviceModeContextValueProvider}>
        <SmoothScrollProvider options={{
          smooth: true,
          lerp: 0.1,
          multiplier: 1,
          mobile: {
            smooth: true
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
          },
        }}
        >
          {router.pathname !== '/404' && <Loader />}
          <GlobalStyle />

          <Header />
          <Component
            {...pageProps}
            isMobileMode={isMobileMode}
            isAnimationFinished={isAnimationFinished}
            setIsAnimationFinished={setIsAnimationFinished}
          />
          {router.pathname !== '/404' && <Footer isMinified={router.pathname === '/assessment'} />}
        </SmoothScrollProvider>
      </DeviceModeContext.Provider>
    </AnimateStartContext.Provider>
  );
}

export default MyApp;
