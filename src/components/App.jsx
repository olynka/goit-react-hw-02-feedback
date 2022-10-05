import { Component } from 'react';

import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Feedback } from './feedback/feedback';



export class App extends Component  {
state = {
 good: 0,
  neutral: 0,
  bad: 0
  }
  countTotalFeedback=()=> {
    const {neutral, good, bad} = this.state
    return neutral + good + bad
  }

  countPositiveFeedbackPercentage() {
    const {neutral, good, bad} = this.state
    const total = neutral + good + bad
     return Math.round((good / total) * 100);
  }



  IncrementStatistics = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };



  render() {
 const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage();
    const neutralPercent = this.countPositiveFeedbackPercentage();
  return (
  <>
    <Section title="Please leave feedback">
        <Feedback IncrementStatistics={this.IncrementStatistics} />
       </Section>
      <Section title="Statistics">
       
  {this.countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
          <Statistics
          good={good}
  neutral={neutral}
  bad={bad}
  total={total}
  goodPercent={goodPercent}
  neutralPercent={neutralPercent}
          
          />
          )}
</Section>
     </>
  )
}
};
