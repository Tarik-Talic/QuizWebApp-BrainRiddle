import { nanoid } from 'nanoid';

interface Data {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export function formatQuizData(data: []) {
  console.log(data);
  let formattedData = data.map((item: Data) => {
    return {
      id: nanoid(),
      question: item.question,
      correctAnswer: item.correct_answer,
      answers: shuffleAnswers([...item.incorrect_answers, item.correct_answer]),
    };
  });
  return formattedData;
}
function shuffleAnswers(posibleAnswers: string[]) {
  let arrJoined = [...posibleAnswers].sort(() => Math.random() - 0.5);
  let arrayOfAnswers = arrJoined.map((item) => {
    return {
      value: item,
    };
  });

  return arrayOfAnswers;
}
