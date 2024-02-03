import './ScoreCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import Button from '../../buttons/Button';
import MainHeading from '../../headings/MainHeading';
import SubHeading from '../../headings/SubHeading';

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
      <MainHeading >Congratulations!</MainHeading>
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
