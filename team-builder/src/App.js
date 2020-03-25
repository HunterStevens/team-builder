import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { v4 as uuid } from 'uuid';

const initialTeam = [
  {id: uuid(), firstName: "Kyle", lastName:"last", email:"lastemailyoullsee@msn.com", role:"spy"},
  {id: uuid(), firstName: "Johnny", lastName:"Better-Than-Bravo", email:"johnnybravotriestoohard@hotmail.com", role:"Heavy Gunner"},
  {id: uuid(), firstName: "Brianna", lastName:"Beanie", email:"beaniedabombdotcom@gmail.com", role:"Demolition"},
  {id: uuid(), firstName: "Vector", lastName:"Vector", email:"trapinavector@yahoo.com", role:"Other"},
]

function App() {
  const [players, setPlayers] = useState(initialTeam);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
})

  const inputChange = event =>{
    setFormValues({...formValues,
         [event.target.name]:event.target.value});
  };


const formSubmission = event => {
    event.preventDefault();
    const newPlayer = {
      id:uuid(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      role: formValues.role
    }
    setPlayers([...players, newPlayer]);
};
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Building</h1>
          <Form
              formSubmission = {formSubmission}
              inputChange = {inputChange}
              formValues = {formValues}
            />
          <h3>Team Member List:</h3>
          {
            players.map(member => <div key={member.id}> {member.firstName} {member.lastName} {member.email} {member.role}</div>)
          }
      </header>
    </div>
  );
}

export default App;
