import { strips } from './SlotStrips.js';
export class SlotMachine {
    numberOfStrips = strips.length;
    numberOfSymbolsByStrip = strips[0].length;
    numberOfRows = 3;
    generateSymbolsArray = () => {
        const symbolsArray = [];
        for (let i = 0; i < this.numberOfRows; i++) {
            const row = Array(5).fill(0);
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
    spin = () => {
        const symbolsArray = this.generateSymbolsArray();
        const result = {
            symbolsArray: symbolsArray,
        };
        return result;
    };
}
//# sourceMappingURL=SlotMachine.js.map