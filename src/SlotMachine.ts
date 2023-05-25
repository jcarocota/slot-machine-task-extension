import { strips } from './SlotStrips.js';

export class SlotMachine {
  readonly numberOfStrips = strips.length;
  readonly numberOfSymbolsByStrip = strips[0].length;
  readonly numberOfRows = 3;

  private generateSymbolsArray = () => {
    const symbolsArray: number[][] = [];
  
    for (let i = 0; i < this.numberOfRows; i++) {
      const row: number[] = Array(5).fill(0);
      symbolsArray.push(row);
    }
  
    for (let i = 0; i < this.numberOfStrips; i++) {
      let stripPosition = Math.floor(Math.random() * this.numberOfSymbolsByStrip);
  
      for (let j = 0; j < this.numberOfRows; j++) {
        stripPosition =
          stripPosition >= this.numberOfSymbolsByStrip ? 0 : stripPosition;
        symbolsArray[j][i] = strips[i][stripPosition].id;
        stripPosition++;
      }
    }

    return symbolsArray;
  
  };

  //private generatePayLines

  spin = () => {

    const symbolsArray = this.generateSymbolsArray();  
  
    const result = {
      symbolsArray: symbolsArray,
    };
  
    return result;
  };
  

}