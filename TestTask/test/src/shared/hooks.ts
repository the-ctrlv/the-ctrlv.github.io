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