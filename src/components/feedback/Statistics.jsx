import React from 'react';
import { Title } from './Title';

export const Statistics = ({ good, neutral, bad, total = 0, pers = 0 }) => {
  return total ? (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{pers}%</li>
    </ul>
  ) : (
    <Title title="No feedback given" />
  );
};
