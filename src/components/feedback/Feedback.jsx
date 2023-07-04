import React, { Component } from 'react';

import { Statistics } from './Statistics';
import { Title } from './Title';
import { Buttons } from './Buttons';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    return (
      <div>
        <Title title="Please leave feedback" />
        <Buttons
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad}
        />
        <Title title="Statistic" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          pers={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}
