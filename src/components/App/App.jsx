import { Component } from 'react';
import Statistic from '../Statistics/Statistic';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback!'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistic'}>
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
