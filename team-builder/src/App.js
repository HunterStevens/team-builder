import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import 

const initialTeam = [
  {firstName:"Kyle", lastName:"last", email:"lastemailyoullsee@msn.com", role:"spy",},
  {firstName:"Johnny", lastName:"Better-Than-Bravo", email:"johnnybravotriestoohard@hotmail.com", role:"Heavy Gunner",},
  {firstName:"Brianna", lastName:"Beanie", email:"beaniedabombdotcom@gmail.com", role:"Demolition",},
  {firstName:"Vector", lastName:"Vector", email:"trapinavector@yahoo.com", role:"Other",},
]

function App() {
  const [players, setPlayers] = useState(initialTeam);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
})

  const inputChange = event =>{
    // const newPlayer = {
    //   firstName: formValues.firstName,
    //   lastName: formValues.lastName,
    //   email: formValues.email,
    //   role: formValues.role
    // }
    setFormValues({...formValues,
         [event.target.name]:event.target.value});
  };


const formSubmission = event => {
    event.preventDefault();
    setPlayers(...players, formValues);
    console.log(players);
};
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Building</h1>
        <section>
          <h3>Team Member List:</h3>
          {
            players.map(member => <p>{member.firstName} 
            &nbsp; {member.lastName}
            &nbsp;{member.email}
            &nbsp; {member.role}</p>)
          }
          <h3>New Member Form:</h3>
            <Form
              formSubmission = {formSubmission}
              inputChange = {inputChange}
              formValues = {formValues}
            />
          </section>
      </header>
    </div>
  );
}

export default App;
