import { useEffect, useState } from "react";
import { QuestionType } from "./types";

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export const useMultiStepForm = (steps: QuestionType[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const nextQuestion = () => {
		if (currentStepIndex < steps.length - 1) {
			setCurrentStepIndex(currentStepIndex + 1);
		}
  };
  const reset = () => {
    setCurrentStepIndex(0);
  }

	return {
		currentStep: steps[currentStepIndex],
		steps,
		nextQuestion,
    currentStepIndex,
    reset,
	};
};

const eventTargetIsNode = (eventTarget: EventTarget | null): eventTarget is Node =>
  !!eventTarget && 'baseURI' in eventTarget;
  
export const useClickOutside = (
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (evt: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      const targetAsNode = eventTargetIsNode(evt.target) ? evt.target : null;
      const refsDoNotContainTarget =
        targetAsNode && refs.every(refItem => refItem.current && !refItem.current.contains(targetAsNode));
      if (refsDoNotContainTarget) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
};
