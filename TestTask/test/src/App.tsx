import { useEffect, useState } from "react";

import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import Question from "./components/Question";

import { MOCK_QUESTIONS } from "./data/questions";

import { useMultiStepForm } from "./shared/hooks";


function App() {
  const [totalEarned, setTotalEarned] = useState('');
  const [isGameFinished, setIsGameFinished] = useState(false);
  const { nextQuestion, currentStepIndex, currentStep, reset } =
    useMultiStepForm(MOCK_QUESTIONS);

  useEffect(() => {
    document.querySelectorAll('.btn').forEach((item) => {
      item.classList.remove('correct');
      item.classList.remove('incorrect');
    })
  }, [currentStepIndex, isGameFinished])

  return (
    <>
      <Modal isGameFinished={isGameFinished} reset={reset} totalEarned={totalEarned} />
      <div className="content-container">
        <Question
          setTotalEarned={setTotalEarned}
          setIsGameFinished={setIsGameFinished}
          questionInfo={currentStep}
          nextQuestion={nextQuestion}
        />
        <SideBar questionList={MOCK_QUESTIONS} currentQuestionNumber={currentStepIndex} />
      </div>
    </>
  );
}

export default App;
