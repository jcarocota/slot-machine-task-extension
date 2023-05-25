import { strips } from './SlotStrips.js';

const numberOfStrips = strips.length;
const numberOfSymbolsByStrip = strips[0].length;
const numberOfRows = 3;
const numberOfColumns = numberOfStrips;

const generateSymbolsArray = () => {};

export const spin = () => {
  const symbolsArray: number[][] = [];

  for (let i = 0; i < numberOfRows; i++) {
    const row: number[] = Array(5).fill(0);
    symbolsArray.push(row);
  }

  for (let i = 0; i < numberOfColumns; i++) {
    let stripPosition = Math.floor(Math.random() * numberOfSymbolsByStrip);

    for (let j = 0; j < numberOfRows; j++) {
      stripPosition =
        stripPosition >= numberOfSymbolsByStrip ? 0 : stripPosition;
      symbolsArray[j][i] = strips[i][stripPosition].id;
      stripPosition++;
    }
  }

  const result = {
    symbolsArray: symbolsArray,
  };

  return result;
};
