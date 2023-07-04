import React from 'react';
import css from './buttons.module.css';
export const Buttons = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div className={css.placing}>
      <button type="button" className={css.btn} onClick={handleGood}>
        Good
      </button>
      <button type="button" className={css.btn} onClick={handleNeutral}>
        Neutral
      </button>
      <button type="button" className={css.btn} onClick={handleBad}>
        Bad
      </button>
    </div>
  );
};
