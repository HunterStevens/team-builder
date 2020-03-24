import React, { useState } from 'react';
import './App.css';

const initialTeam = [
  {firstName:"Kyle", lastName:"lasta", email:"emaila", role:"rolea",},
  {firstName:"Johnny", lastName:"lastb", email:"emailb", role:"roleb",},
  {firstName:"Brianna", lastName:"Beanie", email:"beaniedabombdotcom@gmail.com", role:"Demolition",},
  {firstName:"Vector", lastName:"Vector", email:"trapinavector@yahoo.com", role:"Other",},
]

function App() {
  const [players, setPlayers] = useState(initialTeam);
  
  
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
      </section>
      </header>
     
    </div>
  );
}

export default App;
