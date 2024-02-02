import './ScoreCard.css';
import Logo from '../../../assets/Brain Riddle.svg';

type ScoreCardProps = {
  score: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowScorePage: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuizIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ScoreCard = ({
  score,
  setStart,
  setQuizIndex,
  setScore,
  setShowScorePage,
}: ScoreCardProps) => {
  const resetQuiz = () => {
    setStart((prevstate: boolean) => !prevstate);
    setQuizIndex(0);
    setScore(0);
    setShowScorePage(false);
  };
  return (
    <div className="main-section flex-column">
      <img src={Logo} />
      <h2>Congratulations! </h2>
      <h2>
        You have scored <b className="score">{score}</b> out of{' '}
        <b className="q-amount">5</b>.
      </h2>

      <button className="startBtn" onClick={() => resetQuiz()}>
        Play Again?
      </button>
    </div>
  );
};

export default ScoreCard;
