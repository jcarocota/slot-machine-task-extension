import { strips, wildcard, wildcardBigWin } from './SlotStrips.js';
import { paylines } from './SlotPaylines.js';
import { Payline } from './Payline.js';
import { GottenPaylineInfo } from './GottenPaylineInfo.js';

export class SlotMachine {
  readonly numberOfStrips = strips.length;
  readonly numberOfSymbolsByStrip = strips[0].length;
  readonly numberOfRowsAsResult = 3;

  private generateSymbolsArray = () => {
    const symbolsArray: number[][] = [];

    for (let i = 0; i < this.numberOfRowsAsResult; i++) {
      const row: number[] = Array(5).fill(0);
      symbolsArray.push(row);
    }

    for (let i = 0; i < this.numberOfStrips; i++) {
      let stripPosition = Math.floor(
        Math.random() * this.numberOfSymbolsByStrip
      );

      for (let j = 0; j < this.numberOfRowsAsResult; j++) {
        stripPosition =
          stripPosition >= this.numberOfSymbolsByStrip ? 0 : stripPosition;
        symbolsArray[j][i] = strips[i][stripPosition].id;
        stripPosition++;
      }
    }

    return symbolsArray;
  };

  private calculatePaylines = (symbolsArray: number[][]) => {
    const gottenPaylinesInfo: GottenPaylineInfo[] = [];

    paylines.forEach((payline: Payline) => {
      const actualLine: number[] = [];
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
      let idFirstSymbol = actualLine.find(
        (id) => id != wildcard.id && id != wildcardBigWin.id
      );

      if (idFirstSymbol != undefined) {
        for (let i = 1; i < actualLine.length; i++) {
          if (idFirstSymbol == actualLine[i] || actualLine[i] == wildcard.id) {
            numConsecutiveCoincidences++;
          } else if (actualLine[i] == wildcardBigWin.id) {
            numConsecutiveCoincidences++;
            numBigWins++;
          } else {
            break;
          }
        }
      } else {
        numConsecutiveCoincidences = 5;
        numBigWins = actualLine.reduce(
          (total, id) => (id == wildcardBigWin.id ? total++ : total),
          0
        );
      }

      if (numConsecutiveCoincidences >= 3) {
        let gottenPaylineInfo = new GottenPaylineInfo(
          payline,
          numConsecutiveCoincidences,
          numBigWins
        );
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
