import { React, useContext } from 'react';
import './QuestionCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import { useQuizData } from '../../../services/api';
import { decode } from 'html-entities';
import { QuizContext } from '../../../context/QuizContext';
import { MagnifyingGlass } from 'react-loader-spinner';

const QuestionCard = () => {
  const { quizSettings, setShowScorePage, setScore, quizIndex, setQuizIndex } =
    useContext(QuizContext);
  const { data: quiz, isLoading } = useQuizData(quizSettings);

  const CheckingAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore((prevState) => prevState + 1);
    }

    const quizNum = quizIndex + 1;
    if (quizNum < quiz.length) {
      setQuizIndex(quizNum);
    } else {
      setShowScorePage(true);
    }
  };

  if (isLoading) {
    return (
      <div className="loader">
        <MagnifyingGlass
          height="100"
          width="100"
          radius="9"
          color="green"
          ariaLabel="magnifying-glass"
        />
      </div>
    );
  }
  return (
    <>
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
                  CheckingAnswer(item.value, quiz[quizIndex].correctAnswer)
                }
              >
                {decode(item.value)}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
