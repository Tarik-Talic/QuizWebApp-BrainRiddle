import { useId, useState } from 'react';
import './App.css';
import { useQuizData } from './services/api';
import Button from './components/buttons/Button';
import SettingsCard from './components/card/settingsCard/SettingsCard';
import Logo from './assets/Brain Riddle.svg';
import { decode } from 'html-entities';

function App() {
  const [quizSettings, setQuizSeting] = useState({
    category: '9',
    difficulty: 'easy',
    type: '',
  });
  const [quizIndex, setQuizIndex] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [scorePage, setScorePage] = useState(false);

  const { data: quiz, refetch } = useQuizData(quizSettings);
  console.log(quiz);
  console.log('score ' + showScore);

  const NextQuestion = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setShowScore(showScore + 1);
    }

    const quizNum = quizIndex + 1;
    if (quizNum < quiz.length) {
      setQuizIndex(quizNum);
    } else {
      setScorePage(true);
    }
  };

  return (
    <>
      {!quiz ? (
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
                  setQuizSeting={setQuizSeting}
                  quizSettings={quizSettings}
                />
                <button className="startBtn" onClick={() => refetch()}>
                  Start the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {scorePage ? (
            <h1>{showScore}</h1>
          ) : (
            <div className="flex-container">
              <div className="flex-card">
                <img src={Logo} className="quizLogo" />
                <p className="questionCount">Question {quizIndex + 1}/5</p>

                <div className="main-section">
                  <div className="left-side">
                    <h2 className="quizQuestion">
                      {decode(quiz[quizIndex].question)}
                    </h2>
                  </div>
                  <div className="right-side">
                    {quiz[quizIndex].answers.map((item) => (
                      <button
                        className="answerBtn"
                        onClick={() =>
                          NextQuestion(
                            item.value,
                            quiz[quizIndex].correctAnswer
                          )
                        }
                      >
                        {item.value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
