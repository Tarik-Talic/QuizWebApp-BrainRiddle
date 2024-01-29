import { useState } from 'react';
import './App.css';
import FrontCard from './components/card/frontCard/frontCard';
import QuestionCard from './components/card/questionCard/QuestionCard';
import ScoreCard from './components/card/scoreCard/ScoreCard';
import PlayArea from './pages/PlayArea';

function App() {
  const [quizSettings, setQuizSetings] = useState({
    category: '9',
    difficulty: 'easy',
    type: '',
  });
  const [quizIndex, setQuizIndex] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [scorePage, setScorePage] = useState(false);
  console.log(quizIndex);
  return <PlayArea />;
}

export default App;
