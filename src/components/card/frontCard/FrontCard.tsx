import './FrontCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import { useQuizData } from '../../../services/api';
import Button from '../../buttons/Button';
import { FrontCardProps } from '../../types/Quiz.types';
import { SettingsCard, MainHeading, SubHeading } from '../../';

export default function FrontCard({
  setQuizSettings,
  quizSettings,
  setStart,
}: FrontCardProps) {
  const { refetch } = useQuizData(quizSettings);
  const startQuiz = () => {
    setStart((prevState: boolean) => !prevState);
    refetch();
  };
  return (
    <div className="main-section">
      <div className="left-side">
        <img src={Logo} className="frontLogo" />
        <MainHeading className="welcome-heading">
          Welcome to <b>MindRiddle.</b>
        </MainHeading>

        <SubHeading className="welcome-subHeading" as="h3">
          Challenge Your Mind, Ignite Your Intellect
        </SubHeading>
      </div>

      <div className="right-side">
        <SettingsCard
          setQuizSetings={setQuizSettings}
          quizSettings={quizSettings}
        />
        <Button className="startBtn" onClick={() => startQuiz()}>
          Start the Quiz
        </Button>
      </div>
    </div>
  );
}
