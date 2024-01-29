import React, { useContext } from 'react';
import Logo from '../../../assets/Brain Riddle.svg';
import { QuizContext } from '../../../context/QuizContext';
const ScoreCard = () => {
  const { score, setScore, setStart, setQuizIndex, setShowScorePage } =
    useContext(QuizContext);
  const resetQuiz = () => {
    setStart((prevstate) => !prevstate);
    setQuizIndex(0);
    setScore(0);
    setShowScorePage(false);
  };
  return (
    <div className="main-section flex-column">
      <img src={Logo} />

      <h2>
        You have scored <b className="">{score}</b> out of 5.
      </h2>

      <button className="startBtn" onClick={() => resetQuiz()}>
        Play Again?
      </button>
    </div>
  );
};

export default ScoreCard;
