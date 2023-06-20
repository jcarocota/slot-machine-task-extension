import { strips, wildcard, wildcardBigWin } from './SlotStrips.js';
import { paylines } from './SlotPaylines.js';
import { GottenPaylineInfo } from './GottenPaylineInfo.js';
export class SlotMachine {
    numberOfStrips = strips.length;
    numberOfSymbolsByStrip = strips[0].length;
    numberOfRowsAsResult = 3;
    winPercentageBySymbol = 0.2;
    moneyBalance;
    currency;
    constructor(initialMoneyBalance, currency) {
        this.moneyBalance = initialMoneyBalance;
        this.currency = currency;
    }
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
    calculatePaylines = (symbolsArray, stake) => {
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
                const amountWinByLine = stake +
                    stake * this.winPercentageBySymbol * numConsecutiveCoincidences;
                let gottenPaylineInfo = new GottenPaylineInfo(payline, numConsecutiveCoincidences, numBigWins, amountWinByLine);
                gottenPaylinesInfo.push(gottenPaylineInfo);
            }
        });
        return gottenPaylinesInfo;
    };
    calculateAmountTotalWin = (gottenPaylinesInfo) => {
        let amountTotalWin = gottenPaylinesInfo.reduce((total, paylineInfo) => (total += paylineInfo.amountWinByLine), 0);
        amountTotalWin = Math.round((amountTotalWin + Number.EPSILON) * 100) / 100;
        return amountTotalWin;
    };
    spin = (stake) => {
        const symbolsArray = this.generateSymbolsArray();
        const gottenPaylinesInfo = this.calculatePaylines(symbolsArray, stake);
        const amountTotalWin = this.calculateAmountTotalWin(gottenPaylinesInfo);
        //const idsGottenPaylinesInfoArray: number[] = [];
        /*gottenPaylinesInfo.forEach(paylineInfo => {
          idsGottenPaylinesInfoArray.push(paylineInfo.payline.id);
        })*/
        this.moneyBalance += amountTotalWin - stake;
        this.moneyBalance =
            Math.round((this.moneyBalance + Number.EPSILON) * 100) / 100;
        const result = {
            symbolsArray: symbolsArray,
            gottenPaylinesInfo: gottenPaylinesInfo,
            moneyBalance: this.moneyBalance,
            amountTotalWin: amountTotalWin,
            //wildcard: wildcard,
            //wildcardBigWin: wildcardBigWin,
        };
        return result;
    };
}
//# sourceMappingURL=SlotMachine.js.map