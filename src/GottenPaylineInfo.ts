import { Payline } from './Payline.js';

export class GottenPaylineInfo {
  payline: Payline;
  numberOfCoincidences: number;
  numberOfBigWins: number;

  constructor(
    payline: Payline,
    numberOfCoincidences: number,
    numberOfBigWins: number
  ) {
    this.payline = payline;
    this.numberOfCoincidences = numberOfCoincidences;
    this.numberOfBigWins = numberOfBigWins;
  }
}
