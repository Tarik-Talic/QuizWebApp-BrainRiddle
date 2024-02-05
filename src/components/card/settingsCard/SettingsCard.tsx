import React from 'react';
import './SettingsCard.css';
import { useQuizCategory } from '../../../services/api';
import { type QuizSettings } from '../../types/Quiz.types';

export type SettingsCardProps = {
  quizSettings: QuizSettings;
  setQuizSetings: React.Dispatch<React.SetStateAction<QuizSettings>>;
};
const SettingsCard = ({ setQuizSetings, quizSettings }: SettingsCardProps) => {
  const { data: category } = useQuizCategory();

  const listOfCategories = category?.data.trivia_categories?.map(
    (item: any) => {
      return (
        <option className="select-items" value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    }
  );
  return (
    <>
      <label htmlFor="difficulty">Choose the difficulty</label>
      <select
        name="difficulty"
        onChange={(event) =>
          setQuizSetings({ ...quizSettings, difficulty: event.target.value })
        }
      >
        <option className="select-items" value={'easy'}>
          Easy
        </option>
        <option className="select-items" value={'medium'}>
          Medium
        </option>
        <option className="select-items" value={'hard'}>
          Hard
        </option>
      </select>
      <label htmlFor="category">Choose the category:</label>

      <select
        name="category"
        onChange={(event) =>
          setQuizSetings({ ...quizSettings, category: event.target.value })
        }
      >
        {listOfCategories}
      </select>

      <label htmlFor="type"> Choose type of questions:</label>
      <select
        name="type"
        onChange={(event) =>
          setQuizSetings({ ...quizSettings, type: event.target.value })
        }
      >
        <option value={''}>Any</option>
        <option value={'multiple'}>Multiple</option>
        <option value={'boolean'}>Boolean</option>
      </select>
    </>
  );
};

export default SettingsCard;
