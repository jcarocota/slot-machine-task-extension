import { Slot } from './Slot.js';

const slotInfo00 = new Slot(0, 'Strawberry');
const slotInfo01 = new Slot(1, 'Watermelon');
const slotInfo02 = new Slot(2, 'Grape');
const slotInfo03 = new Slot(3, 'Orange');
const slotInfo04 = new Slot(4, 'Clover');
const slotInfo05 = new Slot(5, 'Apple');
const slotInfo06 = new Slot(6, 'Horseshoe');
const slotInfo07 = new Slot(7, 'Seven');
const slotInfo08 = new Slot(8, 'Diamond');
const slotInfo09 = new Slot(9, 'Big Win');

export const wildcard = slotInfo08;
export const wildcardBigWin = slotInfo09;

export const strips: Slot[][] = [];

//Strip #01
strips.push([
  slotInfo00,
  slotInfo05,
  slotInfo07,
  slotInfo02,
  slotInfo08,
  slotInfo06,
  slotInfo00,
  slotInfo04,
  slotInfo01,
  slotInfo07,
  slotInfo03,
  slotInfo03,
  slotInfo02,
  slotInfo09,
  slotInfo06,
  slotInfo08,
  slotInfo00,
  slotInfo01,
  slotInfo07,
  slotInfo06,
  slotInfo04,
  slotInfo00,
  slotInfo01,
  slotInfo05,
  slotInfo05,
]);

//Strip #02
strips.push([
  slotInfo06,
  slotInfo05,
  slotInfo05,
  slotInfo06,
  slotInfo00,
  slotInfo07,
  slotInfo01,
  slotInfo05,
  slotInfo04,
  slotInfo09,
  slotInfo07,
  slotInfo02,
  slotInfo00,
  slotInfo03,
  slotInfo08,
  slotInfo01,
  slotInfo03,
  slotInfo00,
  slotInfo02,
  slotInfo07,
  slotInfo08,
  slotInfo04,
  slotInfo00,
  slotInfo01,
  slotInfo06,
]);

//Strip #03
strips.push([
  slotInfo07,
  slotInfo03,
  slotInfo02,
  slotInfo04,
  slotInfo06,
  slotInfo00,
  slotInfo07,
  slotInfo08,
  slotInfo01,
  slotInfo03,
  slotInfo00,
  slotInfo09,
  slotInfo06,
  slotInfo01,
  slotInfo04,
  slotInfo07,
  slotInfo05,
  slotInfo04,
  slotInfo02,
  slotInfo05,
  slotInfo06,
  slotInfo01,
  slotInfo02,
  slotInfo08,
  slotInfo03,
]);

//Strip #04
strips.push([
  slotInfo01,
  slotInfo04,
  slotInfo02,
  slotInfo03,
  slotInfo08,
  slotInfo06,
  slotInfo05,
  slotInfo00,
  slotInfo06,
  slotInfo09,
  slotInfo02,
  slotInfo03,
  slotInfo06,
  slotInfo01,
  slotInfo07,
  slotInfo08,
  slotInfo02,
  slotInfo05,
  slotInfo04,
  slotInfo07,
  slotInfo00,
  slotInfo05,
  slotInfo04,
  slotInfo01,
  slotInfo07,
]);

//Strip #05
strips.push([
  slotInfo04,
  slotInfo00,
  slotInfo01,
  slotInfo02,
  slotInfo07,
  slotInfo03,
  slotInfo08,
  slotInfo05,
  slotInfo01,
  slotInfo04,
  slotInfo05,
  slotInfo03,
  slotInfo07,
  slotInfo02,
  slotInfo09,
  slotInfo01,
  slotInfo08,
  slotInfo04,
  slotInfo06,
  slotInfo07,
  slotInfo02,
  slotInfo00,
  slotInfo06,
  slotInfo01,
  slotInfo06,
]);