import React from 'react';
import Logo from '../../../assets/Brain Riddle.svg';
const ScoreCard = ({ showScore, setStart, setQuizIndex, setScorePage }) => {
  const resetQuiz = () => {
    setStart((prevstate) => !prevstate);
    setQuizIndex(0);
    setScorePage(false);
  };

  return (
    <div className="flex-container">
      <div className="flex-card center">
        <div className="main-section flex-column">
          <img src={Logo} />

          <h2>You have scored <b className=''>{showScore}</b> out of 5.</h2>

          <button className="startBtn" onClick={() => resetQuiz()}>
            Play Again?
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
