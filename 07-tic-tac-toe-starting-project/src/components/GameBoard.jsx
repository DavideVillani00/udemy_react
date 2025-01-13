import { useState } from "react";
const initialGameBoard = [
  [[null], [null], [null]],
  [[null], [null], [null]],
  [[null], [null], [null]],
];
export const GameBoard = () => {
  useState();
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((column, columnIndex) => {
                return (
                  <li key={columnIndex}>
                    <button></button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};
