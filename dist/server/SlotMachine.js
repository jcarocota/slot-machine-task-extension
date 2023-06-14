import { strips, wildcard, wildcardBigWin } from './SlotStrips.js';
import { paylines } from './SlotPaylines.js';
import { GottenPaylineInfo } from './GottenPaylineInfo.js';
export class SlotMachine {
    numberOfStrips = strips.length;
    numberOfSymbolsByStrip = strips[0].length;
    numberOfRowsAsResult = 3;
    generateSymbolsArray = () => {
        const symbolsArray = [];
        for (let i = 0; i < this.numberOfRowsAsResult; i++) {
            const row = Array(5).fill(0);
            symbolsArray.push(row);
        }
        for (let i = 0; i < this.numberOfStrips; i++) {
            let stripPosition = Math.floor(Math.random() * this.numberOfSymbolsByStrip);
            for (let j = 0; j < this.numberOfRowsAsResult; j++) {
                stripPosition =
                    stripPosition >= this.numberOfSymbolsByStrip ? 0 : stripPosition;
                symbolsArray[j][i] = strips[i][stripPosition].id;
                stripPosition++;
            }
        }
        return symbolsArray;
    };
    calculatePaylines = (symbolsArray) => {
        const gottenPaylinesInfo = [];
        paylines.forEach((payline) => {
            const actualLine = [];
            const paylineArray = payline.payline;
            for (let i = 0; i < this.numberOfStrips; i++) {
                for (let j = 0; j < this.numberOfRowsAsResult; j++) {
                    //console.log("paylineArray[j]", paylineArray[j]);
                    //console.log("paylineArray[j][i]", paylineArray[j][i]);
                    if (paylineArray[j][i]) {
                        actualLine.push(symbolsArray[j][i]);
                    }
                }
            }
            let numConsecutiveCoincidences = 1;
            let numBigWins = 0;
            let idFirstSymbol = actualLine.find((id) => id != wildcard.id && id != wildcardBigWin.id);
            if (idFirstSymbol != undefined) {
                for (let i = 1; i < actualLine.length; i++) {
                    if (idFirstSymbol == actualLine[i] || actualLine[i] == wildcard.id) {
                        numConsecutiveCoincidences++;
                    }
                    else if (actualLine[i] == wildcardBigWin.id) {
                        numConsecutiveCoincidences++;
                        numBigWins++;
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                numConsecutiveCoincidences = 5;
                numBigWins = actualLine.reduce((total, id) => (id == wildcardBigWin.id ? total++ : total), 0);
            }
            if (numConsecutiveCoincidences >= 3) {
                let gottenPaylineInfo = new GottenPaylineInfo(payline, numConsecutiveCoincidences, numBigWins);
                gottenPaylinesInfo.push(gottenPaylineInfo);
            }
        });
        return gottenPaylinesInfo;
    };
    //private generatePayLines
    spin = () => {
        const symbolsArray = this.generateSymbolsArray();
        const gottenPaylinesInfo = this.calculatePaylines(symbolsArray);
        //const idsGottenPaylinesInfoArray: number[] = [];
        /*gottenPaylinesInfo.forEach(paylineInfo => {
          idsGottenPaylinesInfoArray.push(paylineInfo.payline.id);
        })*/
        const result = {
            symbolsArray: symbolsArray,
            gottenPaylinesInfo: gottenPaylinesInfo,
            wildcard: wildcard,
            wildcardBigWin: wildcardBigWin,
        };
        return result;
    };
}
//# sourceMappingURL=SlotMachine.js.map