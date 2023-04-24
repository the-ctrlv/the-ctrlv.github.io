import { useContext, useEffect, useRef, useState } from 'react';

import AssessmentForm from 'modules/AssessmentForm';

import { useWindowResize } from 'shared';
import { AnimateStartContext, SmoothScrollContext } from 'shared/context';

import { StyledAssessment } from 'styles/assessment';

export default function Assessment() {
  const [isTabletMode, setIsTabletMode] = useState(null);
  const [isStepCompleted, setIsStepCompleted] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [currentFormStep, setCurrentFormStep] = useState(0);
  const { width } = useWindowResize();

  const { gsapScroll, locoScroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    locoScroll?.scrollTo('top', {
      offset: 0,
      duration: 0,
      disableLerp: true
    });
    if (notificationType === null) {
      locoScroll?.start();
    } else {
      locoScroll?.stop();
    }
  }, [notificationType, locoScroll]);

  const { isAnimationFinished } = useContext(AnimateStartContext);

  const gsap = gsapScroll?.gsap;
  const ScrollTrigger = gsapScroll?.ScrollTrigger;

  const triggerRef = useRef(null);

  useEffect(() => {
    if (isAnimationFinished) {
      gsap?.to('.content-start', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }, [gsap, isAnimationFinished, isTabletMode]);

  useEffect(() => {
    if (width !== 0 && width > 1024 && triggerRef.current) {
      ScrollTrigger?.create({
        trigger: triggerRef.current,
        start: '-80px top',
        end: 'bottom 40%',
        pin: '.left-nav-pane',
      });
    } else {
      ScrollTrigger?.getAll().forEach((instance) => {
        instance.kill();
      });
    }
  }, [ScrollTrigger, width, triggerRef]);

  useEffect(() => {
    if (width === 0) return;
    setIsTabletMode(width < 1024);
  }, [width]);

  return (
    <StyledAssessment>
      <div className="section-title-wrapper">
        <h1 className="content-start">New TRT Patient Assessment</h1>
        <p className="content-start steps-counter">
          {currentFormStep === 0 && 'ADAM Questionnaire.'}
          {currentFormStep === 1 && 'Patient Information.'}
          {currentFormStep === 2 && 'Description.'}
          {' '}
          <b>
            Step{' '}
            {currentFormStep + 1}
          </b>
        </p>
      </div>
      <div className="content-container content-container--assessment flex-between" id="assessmentContent">
        <AssessmentForm
          setCurrentFormStep={setCurrentFormStep}
          notificationType={notificationType}
          isStepCompleted={isStepCompleted}
          setIsStepCompleted={setIsStepCompleted}
          setNotificationType={setNotificationType}
        />
      </div>
    </StyledAssessment>
  );
}
