import { useEffect, useState } from "react";

import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import Question from "./components/Question";

import { MOCK_QUESTIONS } from "./data/questions";

import { useMultiStepForm } from "./shared/hooks";

import 'normalize.css/normalize.css';
import { GlobalStyle } from "./shared/common";
import Loader from "./components/Loader";


function App() {
  const [totalEarned, setTotalEarned] = useState('');
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const { nextQuestion, currentStepIndex, currentStep, reset } =
    useMultiStepForm(MOCK_QUESTIONS);

  useEffect(() => {
    document.querySelectorAll('.btn-question').forEach((item) => {
      item.classList.remove('correct', 'incorrect', 'selected', 'disabled');
    })
  }, [currentStepIndex, isGameFinished])

  return (
    <>
      <GlobalStyle />
      <Loader />
      {isModalVisible && <Modal
        setIsModalVisible={setIsModalVisible}
        isGameFinished={isGameFinished}
        setIsGameFinished={setIsGameFinished}
        reset={reset}
        totalEarned={totalEarned} />
      }
      <div className="content-container">
        <Question
          setIsModalVisible={setIsModalVisible}
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
