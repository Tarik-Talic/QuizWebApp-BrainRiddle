export type QuizSettings = {
  category: string;
  difficulty: string;
  type: string;
};

export type FrontCardProps = {
  quizSettings: QuizSettings;
  setQuizSettings: React.Dispatch<React.SetStateAction<QuizSettings>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type QuestionCardProps = {
  quizSettings: QuizSettings;
  setShowScorePage: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  quizIndex: number;
  setQuizIndex: React.Dispatch<React.SetStateAction<number>>;
};
export type ScoreCardProps = {
  score: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowScorePage: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuizIndex: React.Dispatch<React.SetStateAction<number>>;
};
