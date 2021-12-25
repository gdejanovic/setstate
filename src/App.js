import React from 'react';
import Button from './components/Button';
import { UserChildren, UserClass, UserFunction } from './user';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.',
  };
  onInteraction(){
    this.setState({
      users: [
        { name: 'Ivan', years: 35 },
        { name: 'Marko', years: 31 },
        { name: 'Ana', years: 21 },
      ],
      children: 'A hobi mi je plivanje.',
    });
  }
  render() {
    const { users } = this.state;
    

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={() => this.onInteraction()}>Submit</button>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          A hobi mi je plivanje.
        </UserChildren>
      </div>
    );
  }
}
