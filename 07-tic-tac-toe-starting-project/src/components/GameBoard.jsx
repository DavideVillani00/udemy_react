import { useState } from "react";
const initialGameBoard = [
  [[null], [null], [null]],
  [[null], [null], [null]],
  [[null], [null], [null]],
];
export const GameBoard = () => {
  const [GameBoard, setGameBoard] = useState(initialGameBoard);

  function handleMovement(rowIndex, columnIndex) {
    setGameBoard((preGameBoard) => {
      const updateBoard = [
        ...preGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][columnIndex] = "X";
      return updateBoard;
    });
  }
  return (
    <ol id="game-board">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleMovement(rowIndex, columnIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
