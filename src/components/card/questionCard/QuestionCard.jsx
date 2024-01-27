import { React, useState } from 'react';
import Logo from '../../../assets/Brain Riddle.svg';
import { useQuizData } from '../../../services/api';
import { decode } from 'html-entities';

const QuestionCard = ({
  quizSettings,
  setShowScore,
  setScorePage,
  quizIndex,
  setQuizIndex,
}) => {
  const { data: quiz } = useQuizData(quizSettings);

  //   const [quizIndex, setQuizIndex] = useState(0);

  const NextQuestion = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setShowScore((prevState) => prevState + 1);
    }

    const quizNum = quizIndex + 1;
    if (quizNum < quiz.length) {
      setQuizIndex(quizNum);
    } else {
      setScorePage(true);
    }
  };
  return (
    <div className="flex-container">
      <div className="flex-card">
        <img src={Logo} className="quizLogo" />
        <p className="questionCount">Question {quizIndex + 1}/5</p>

        <div className="main-section">
          <div className="left-side">
            <h2 className="quizQuestion">
              {quiz && decode(quiz[quizIndex].question)}
            </h2>
          </div>
          <div className="right-side">
            {quiz &&
              quiz[quizIndex].answers.map((item) => (
                <button
                  className="answerBtn"
                  onClick={() =>
                    NextQuestion(item.value, quiz[quizIndex].correctAnswer)
                  }
                >
                  {decode(item.value)}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
