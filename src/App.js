import React, { useState } from 'react'
import Header from './components/Header'
import CardList from './components/CardList'

const FAKECARDS = [
  {name: "Chris Bolas", desc: "A cool guy", url: "http://via.placeholder.com/200"},
  {name: "Christina Mitchell", desc: "My amazing lady", url: "http://via.placeholder.com/200"},
  {name: "Darude Storm", desc: "A pretty rad song.", url: "http://via.placeholder.com/200"}
]

function App() {
  const [score, setScore] = useState(0)
  const [hiScore, setHiScore] = useState(0)

  return (
    <div>
      <Header score={score} hiScore={hiScore} />
      <CardList 
        cards={FAKECARDS} 
        score= {score} 
        setScore={setScore}
        hiScore={hiScore}
        setHiScore={setHiScore}
      />
    </div>

  );
}

export default App;
