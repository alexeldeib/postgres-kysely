'use client'

import { useState } from 'react'
import Board  from './Board';
import Scoreboard  from './Scoreboard';

interface GameProps { 
  letters: string[],
  validWords: string[]
}

export default function Game({ letters = [], validWords = []}: GameProps) {
  const hasBingo = validWords.some(word => letters.every(letter => word.includes(letter)));
  console.log("hasBingo", hasBingo)
  console.log(letters)
  console.log(validWords)
  const [foundWords, setFoundWords] = useState([] as string[]);

  return (
    <div className="hero-body container" id="game">
      <Scoreboard foundWords={foundWords} numValidWords={validWords.length}/>
      <div id="boardContainer">
        <Board letters={letters} validWords={validWords} foundWords={foundWords} setFoundWords={setFoundWords}/>
      </div>
      <div className="is-flex is-justify-content-space-evenly" id="foundWords">
        <div className="is-flex is-flex-direction-column" id="listOfFoundWords">
          {foundWords.map((word) => { return <div className="key m-auto p-auto" key={word}>{word}</div> })}
        </div>
        {/* <button className="flex-basis-1/2" id="expandFoundWords">more</button> */}
      </div>
    </div>
  )
}