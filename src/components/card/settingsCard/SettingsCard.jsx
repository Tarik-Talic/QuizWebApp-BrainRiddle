import React from 'react';
import './SettingsCard.css';
const SettingsCard = ({ setQuizSeting, quizSettings }) => {
  function handleSelect(e, type) {
    setQuizSeting({ ...quizSettings, type: e.target.value });
  }
  return (
    <>
      <label htmlFor="difficulty">Choose the difficulty</label>
      <select
        name="difficulty"
        onChange={(event) =>
          setQuizSeting({ ...quizSettings, difficulty: event.target.value })
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
          setQuizSeting({ ...quizSettings, category: event.target.value })
        }
      >
        <option value={'9'}>General Knowledge</option>
        <option value={'11'}>Films</option>
        <option value={'12'}>Music</option>
      </select>

      <label htmlFor="type"> Choose type of questions:</label>
      <select
        name="type"
        onChange={(event) =>
          setQuizSeting({ ...quizSettings, type: event.target.value })
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
