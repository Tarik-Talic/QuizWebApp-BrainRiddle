import './QuestionCard.css';
import Logo from '../../../assets/Brain Riddle.svg';
import { useQuizData } from '../../../services/api';
import { decode } from 'html-entities';
import { MagnifyingGlass } from 'react-loader-spinner';
import { type QuestionCardProps } from '../../types/Quiz.types';
import Question from '../../headings/Question';
import Button from '../../buttons/Button';

type Answer = {
  value: string;
};

const QuestionCard = ({
  quizSettings,
  setShowScorePage,
  setScore,
  quizIndex,
  setQuizIndex,
}: QuestionCardProps) => {
  const { data: quiz, isLoading } = useQuizData(quizSettings);

  const CheckingAnswer = (answer: string, correctAnswer: string) => {
    if (answer === correctAnswer) {
      setScore((prevState) => prevState + 1);
    }

    const quizNum: number = quizIndex + 1;
    const quizData: any = quiz;
    if (quizNum < quizData.length) {
      setQuizIndex(quizNum);
    } else {
      setShowScorePage(true);
    }
  };

  if (isLoading) {
    return (
      <div className="loader">
        <MagnifyingGlass
          height="100"
          width="100"
          color="green"
          ariaLabel="magnifying-glass"
        />
      </div>
    );
  }
  return (
    <>
      <img src={Logo} className="quizLogo" />
      <p className="questionCount">Question {quizIndex + 1}/5</p>

      <div className="main-section">
        <div className="left-side">
          {quiz && (
            <Question
              as="h2"
              className={'quizQuestion'}
              key={quiz[quizIndex].question}
            >
              {decode(quiz[quizIndex].question)}
            </Question>
          )}
        </div>
        <div className="right-side">
          {quiz &&
            quiz[quizIndex].answers.map((item: Answer) => (
              <Button
                key={item.value}
                className="answerBtn"
                onClick={() =>
                  CheckingAnswer(item.value, quiz[quizIndex].correctAnswer)
                }
              >
                {decode(item.value)}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
