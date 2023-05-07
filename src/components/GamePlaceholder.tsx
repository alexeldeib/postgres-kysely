export default function GamePlaceholder() {
  return (
    <div id="game">
      <div id="scoreboard">
        <div id="numberFound">
        </div>
        <div id="foundWords">
          <div id="listOfFoundWords"></div>
          <button id="expandFoundWords" />
        </div>
      </div>
      <div id="boardContainer">
        <div id="board">
          <div id="spacer"></div>
          <div id="letters">
            <div id="row1">
              <button id="key0" />
              <button id="key1" />
            </div>
            <div id="row2">
              <button id="key2" />
              <button id="key3" />
              <button id="key4" />
            </div>
            <div id="row3">
              <button id="key5" />
              <button id="key6" />
            </div>
          </div>
          <div id="controls">
            <button id="delete"/>
            <button id="cycle"/>
            <button id="clear"/>
          </div>
        </div>
      </div>
    </div>
  )
}