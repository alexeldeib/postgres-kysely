import { NextRequest, NextResponse } from 'next/server';
import { default as wordlist } from 'an-array-of-english-words'
import { default as seedrandom } from 'seedrandom';

export const runtime = 'edge';

const date = new Date().toISOString().slice(0, 10)
const rng = seedrandom(date);
 
export async function GET(request: NextRequest) {
  let initLetters = getSevenRandomLetters()
  let initValidWords = checkValidWords(allValidWords, initLetters);
  let iterations = 1;
  while (initValidWords.length < 5 || initValidWords.length > 50) {
  // while (initValidWords.length > 10) {
    console.log("iterations", iterations)
    initLetters = getSevenRandomLetters()
    initValidWords = checkValidWords(allValidWords, initLetters);
    iterations++;
  }
  console.log("iterations", iterations)
  console.log("initLetters", initLetters)
  console.log("validWords", initValidWords)
  return NextResponse.json({
    letters: initLetters,
    words: initValidWords,
  });
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou'
const alphabetLength = 26;
const allValidWords = wordlist.filter(word => word.length > 3)

function checkValidWords(words: string[], letters: string[]) {
  let numbers = Array(26).fill(0)
  for (const letter of letters) {
    numbers[letter.charCodeAt(0) - 97]++
  }

  let middleCharCode = letters[3].charCodeAt(0) - 97;

  let count = 0
  let validWords = []
  outer:
  for (const word of words) {
    let middleCharFound = false;
    // let wordNumbers = Array(26).fill(0);
    for (const letter of word) {
      let charCode = letter.charCodeAt(0) - 97;
      // wordNumbers[letter.charCodeAt(0) - 97]++
      if (numbers[charCode] == 0) {
        continue outer
      }
      if (charCode === middleCharCode) {
        middleCharFound = true;
      }
    }
    if (middleCharFound) {
      validWords.push(word)
      count++
    }
  }
  return validWords
}

function getSevenRandomLetters() {
  // let candidateLetters = Array.from(alphabet.slice())
  // let chosenLetters = [];
  // for (let i = 0; i < 7; i++) {
  //   const index = getRandomLetter(candidateLetters.length)
  //   chosenLetters.push(candidateLetters[index])
  //   candidateLetters.splice(index, 1)
  // }
  let candidateLetters = Array.from(consonants.slice())
  let chosenLetters = [];
  candidateLetters = Array.from(consonants.slice())
  for (let i = 0; i < 5; i++) {
    const index = getRandomLetter(candidateLetters.length)
    chosenLetters.push(candidateLetters[index])
    candidateLetters.splice(index, 1)
  }
  candidateLetters = Array.from(vowels.slice())
  for (let i = 0; i < 2; i++) {
    const index = getRandomLetter(candidateLetters.length)
    chosenLetters.push(candidateLetters[index])
    candidateLetters.splice(index, 1)
  }
  return chosenLetters
}

function getRandomLetter(max: number) {
  return Math.floor(rng() * max);
}
