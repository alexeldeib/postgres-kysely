'use client'

interface ScorboardProps {
  numValidWords?: number;
  foundWords?: string[];
}

export default function Scoreboard({ numValidWords = 0, foundWords = [] }: ScorboardProps) {
  return (
    <div className="container" id="scoreboard">
      <div className="is-flex is-justify-content-center" id="numberFound">{foundWords.length}/{numValidWords}</div>
    </div>
  )
}
