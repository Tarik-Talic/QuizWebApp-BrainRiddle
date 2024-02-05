import './ScoreCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import { type ScoreCardProps } from '../../types/Quiz.types';
import { Button, MainHeading, SubHeading } from '../../';

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
      <MainHeading>Congratulations!</MainHeading>
      <SubHeading>
        You have scored <b className="score">{score}</b> out of{' '}
        <b className="q-amount">5</b>.
      </SubHeading>

      <Button className="startBtn" onClick={() => resetQuiz()}>
        Play Again?
      </Button>
    </div>
  );
};

export default ScoreCard;
