import { useState } from 'react';
import FrontCard from '../components/card/frontCard/FrontCard';
import QuestionCard from '../components/card/questionCard/QuestionCard';
import ScoreCard from '../components/card/scoreCard/ScoreCard';

const PlayArea = () => {
  const [quizSettings, setQuizSetings] = useState({
    category: '9',
    difficulty: 'easy',
    type: '',
  });
  const [start, setStart] = useState<boolean>(false);
  const [showScorePage, setShowScorePage] = useState<boolean>(false);
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  
  return (
    <div className="flex-container">
      <div className="flex-card">
        {!start ? (
          <FrontCard
            quizSettings={quizSettings}
            setQuizSettings={setQuizSetings}
            setStart={setStart}
          />
        ) : (
          <>
            {!showScorePage ? (
              <QuestionCard
                quizSettings={quizSettings}
                setShowScorePage={setShowScorePage}
                setScore={setScore}
                quizIndex={quizIndex}
                setQuizIndex={setQuizIndex}
              />
            ) : (
              <ScoreCard
                score={score}
                setScore={setScore}
                setStart={setStart}
                setQuizIndex={setQuizIndex}
                setShowScorePage={setShowScorePage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlayArea;
