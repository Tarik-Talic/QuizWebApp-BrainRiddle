import { useState } from 'react';
import './App.css';
import FrontCard from './components/card/frontCard/frontCard';
import QuestionCard from './components/card/questionCard/QuestionCard';
import ScoreCard from './components/card/scoreCard/ScoreCard';

function App() {
  const [quizSettings, setQuizSetings] = useState({
    category: '9',
    difficulty: 'easy',
    type: '',
  });
  const [quizIndex, setQuizIndex] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [scorePage, setScorePage] = useState(false);
  const [start, setStart] = useState(false);
  console.log(quizIndex);
  return (
    <>
      {!start ? (
        <FrontCard
          setStart={setStart}
          quizSettings={quizSettings}
          setQuizSetings={setQuizSetings} 
        />
      ) : (
        <>
          {scorePage ? (
            <ScoreCard
              showScore={showScore}
              setStart={setStart}
              setQuizIndex={setQuizIndex}
              setScorePage={setScorePage}
            />
          ) : (
            <QuestionCard
              quizSettings={quizSettings}
              setShowScore={setShowScore}
              setScorePage={setScorePage}
              quizIndex={quizIndex}
              setQuizIndex={setQuizIndex}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
