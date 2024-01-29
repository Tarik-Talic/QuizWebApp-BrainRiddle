import { React, useState } from 'react';
import FrontCard from '../components/card/frontCard/frontCard';
import QuestionCard from '../components/card/questionCard/QuestionCard';
import ScoreCard from '../components/card/scoreCard/ScoreCard';
import { QuizContext } from '../context/QuizContext';
const PlayArea = () => {
  const [quizSettings, setQuizSetings] = useState({
    category: '9',
    difficulty: 'easy',
    type: '',
  });
  const [start, setStart] = useState(false);
  const [showScorePage, setShowScorePage] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <div className="flex-container">
      <div className="flex-card">
        <QuizContext.Provider
          value={{
            quizSettings,
            setQuizSetings,
            setStart,
            setShowScorePage,
            quizIndex,
            setQuizIndex,
            score,
            setScore,
          }}
        >
          {!start ? (
            <FrontCard />
          ) : (
            <>{!showScorePage ? <QuestionCard /> : <ScoreCard />}</>
          )}
        </QuizContext.Provider>
      </div>
    </div>
  );
};

export default PlayArea;
