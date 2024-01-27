import { React, useState } from 'react';
import Logo from '../../../assets/Brain Riddle.svg';
import SettingsCard from '../settingsCard/SettingsCard';
import { useQuizData } from '../../../services/api';

const FrontCard = ({ setStart, quizSettings , setQuizSetings}) => {
  // const [quizSettings, setQuizSeting] = useState({
  //   category: '9',
  //   difficulty: 'easy',
  //   type: '',
  // });
  const { refetch } = useQuizData(quizSettings);
  const startQuiz = () => {
    setStart((prevState) => !prevState);
    refetch();
  };
  return (
    <div className="flex-container">
      <div className="flex-card">
        <div className="main-section">
          <div className="left-side">
            <img src={Logo} />
            <h1 className="welcome-heading">
              Welcome to <b>MindRiddle.</b>{' '}
            </h1>
            <h3 className="welcome-subHeading">
              Challenge Your Mind, Ignite Your Intellect
            </h3>
          </div>

          <div className="right-side">
            <SettingsCard
              setQuizSetings={setQuizSetings}
              quizSettings={quizSettings}
            />
            <button className="startBtn" onClick={() => startQuiz()}>
              Start the Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
