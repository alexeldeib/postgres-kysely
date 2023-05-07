// 'use client'

// import { useState, useEffect } from 'react'
// import { Trie } from '@datastructures-js/trie';
// import { getBaseUrl } from '@/src/lib/utils';

// export const preferredRegion = 'home'
// export const dynamic = 'force-dynamic'

// export async function getServerSideProps() {
//   const res = await fetch(`${getBaseUrl()}/api`);
//   const data = await res.json();
 
//   // Pass data to the page via props
//   return { props: { ...data } };
// }

// function validateGuess(trie: Trie, found: string[], guess: string): boolean {
//   const valid = trie.has(guess)
//   const exists = found.includes(guess)
//   return valid && !exists
// }

// function GameOver(props: { initialize: () => void }) {
//   return (
//     <div className="gameOver">
//       <div>Game Over!</div>
//       <button onClick={() => props.initialize()}>Play Again</button>
//     </div>
//   )
// }

// export default function Board( props: { letters: string[], words: string[] }) {
//   const [currentWord, setCurrentWord] = useState('')
//   const [dict, setDict] = useState(() => {
//     const allwords = new Trie();
//     for (let word of props.words) {
//       allwords.insert(word)
//     }
//     return allwords;
//   });

//   const [letters, setLetters] = useState([] as string[])
//   const [validWords, setValidWords] = useState([] as string[])
//   const [foundWords, setFoundWords] = useState([] as string[])
//   const [gameOver, setGameOver] = useState(false)

//   const initialize = () => {
//     setFoundWords([])
//     setGameOver(false)
//     setLetters(props.letters)
//     setValidWords(props.words)
//   }

//   const handleKeyDown = ((e: React.KeyboardEvent<HTMLButtonElement>) => {
//     // let charCode = e.key.charCodeAt(0) - 97;
//     console.log(e.key);
//     let index = letters.indexOf(e.key);
//     console.log(index);
//     if (index != -1) {
//       setCurrentWord(currentWord.concat(letters[index]));
//     }
//   })

//   const validateGuess = ((trie: Trie, valid: string[], found: string[], guess: string) => {
//     const isValid = trie.has(guess)
//     const exists = found.includes(guess)
//     if (isValid && !exists) {
//       console.log("good guess!")
//       const newWords = found.concat(guess);
//       if (valid.length == newWords.length) {
//         setGameOver(true)
//         console.log("game over")
//       }
//       setFoundWords(newWords)
//       setCurrentWord('')
//       console.log(newWords)
//     } else {
//       console.log("bad guess!")
//       console.log(found)
//       console.log(foundWords)
//       setCurrentWord('')
//     }
//   })

//   return (
//     <main className="relative flex min-h-screen flex-col items-center justify-center">
//       <div className="App">
//         <h1>Spelling Bee</h1>

//         {gameOver && <GameOver initialize={initialize} />}
//         <div className="currentWord">{currentWord}</div>
//         <button className="validate" onClick={() => validateGuess(dict, validWords, foundWords, currentWord)}>Enter Word</button>
//         <button className="clear" onClick={() => setCurrentWord('')}>Clear Guess</button>
//         <div className="totalCount">Found {foundWords.length}/{validWords.length} words </div>

//         <div className="row">
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[0]))}>{letters[0]}</button>
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[1]))}>{letters[1]}</button>
//         </div>
//         <div className="row">
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[2]))}>{letters[2]}</button>
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[3]))}>{letters[3]}</button>
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[4]))}>{letters[4]}</button>
//         </div>
//         <div className="row">
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[5]))}>{letters[5]}</button>
//           <button onKeyDown={(e) => handleKeyDown(e)} onClick={() => setCurrentWord(currentWord.concat(letters[6]))}>{letters[6]}</button>
//         </div>

//         <div className="foundWords">
//           {foundWords.map((word: any, index: any) => { return <div key={word}>{word}</div> })}
//         </div>
//       </div >
//     </main>
//   )
// }


export default function Page() {
  return (
    <></>
  )
}