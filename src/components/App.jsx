import { Component } from 'react';

import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Feedback } from './feedback/feedback';
import ContactList from './fix/fix';



export class App extends Component  {
state = {
 good: 0,
  neutral: 0,
  bad: 0,
  contacts:[
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

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
 const { good, neutral, bad,contacts } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage();
    const neutralPercent = this.countPositiveFeedbackPercentage();
  return (
  <>
    <Section title="Please leave feedback">
        <Feedback IncrementStatistics={this.IncrementStatistics} />
       </Section>
      <Section title="Statistics">
        <ContactList items={ contacts} />
       
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


// import { Component } from 'react';
// import { LoginForm } from './Forma.jsx/Form';
// import { nanoid } from 'nanoid';
// import ContactList from './fix/fix';






// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export class App extends Component {
//   state = {
//     contacts:[
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     filter: ''
//   };

// getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
  
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }
  
  
//   render() {
    
//   const { contacts } = this;
//     return (
//       <>
//       <div>
//         <LoginForm />
       
//       </div>
//        <ContactList items={contacts} />
//       </>
      
//     );
//   }
// }