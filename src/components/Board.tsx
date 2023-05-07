'use client'

import '../app/globals.css'

import { useState } from 'react'

interface BoardProps {
  letters?: string[];
  validWords?: string[];
  foundWords?: string[];
  setFoundWords?: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentLetters?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Board({ letters = [], validWords = [], foundWords = [], setFoundWords }: BoardProps) {
  const [currentWord, setCurrentWord] = useState('');
  // const [letterView, setLetterView] = useState([] as string[]);

  const validateGuess = function(guess: string) {
    if (validWords.includes(guess) && !foundWords.includes(guess)) {
      setFoundWords?.([...foundWords, guess]);
      setCurrentWord('');
    } else {
      setCurrentWord('');
    }
  }

  return (
    <div className="is-flex is-flex-direction-column" id="board">
      <div id="letters">
        <div className="is-flex is-flex-row is-justify-content-center" id="row1">
          <button className="box key m-0" id="key0" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[0]))}}>{letters[0]}</button>
          <button className="box key m-0" id="key1" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[1]))}}>{letters[1]}</button>
        </div>
        <div className="is-flex is-flex-row is-justify-content-center" id="row2">
          <button className="box key m-0" id="key2" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[2]))}}>{letters[2]}</button>
          <button className="box key m-0" id="key3" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[3]))}}>{letters[3]}</button>
          <button className="box key m-0" id="key4" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[4]))}}>{letters[4]}</button>
        </div>
        <div className="is-flex is-flex-row is-justify-content-center" id="row3">
          <button className="box key m-0" id="key5" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[5]))}}>{letters[5]}</button>
          <button className="box key m-0" id="key6" onKeyDown={(e) => {}} onClick={() => {setCurrentWord(currentWord.concat(letters[6]))}}>{letters[6]}</button>
        </div>
      </div>
      <div className="is-flex is-flex-row" id="controls">
        <button className="box key" id="delete" onClick={() => {
          const newWord = currentWord.slice(0,-1)!
          setCurrentWord(newWord)
        }}>delete</button>
        <button className="box key" id="cycle" onClick={() => {}}>cycle</button>
        <button className="box key" id="enter" onClick={() => {validateGuess(currentWord)}}>enter</button>
      </div>
      <div className="is-flex is-justify-content-center" id="currentWord">Current guess: "{currentWord}"</div>
    </div>
  )
}