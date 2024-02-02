import './FrontCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import SettingsCard from '../settingsCard/SettingsCard';
import { useQuizData } from '../../../services/api';

export type QuizSetting = {
  category: string;
  difficulty: string;
  type: string;
};

type FrontCardProps = {
  quizSettings: QuizSetting;
  setQuizSettings: React.Dispatch<React.SetStateAction<QuizSetting>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

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
          setQuizSetings={setQuizSettings}
          quizSettings={quizSettings}
        />
        <button className="startBtn" onClick={() => startQuiz()}>
          Start the Quiz
        </button>
      </div>
    </div>
  );
}
