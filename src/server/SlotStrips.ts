import { Slot } from './Slot.js';

const slotInfo00 = new Slot(0, 'Strawberry');
const slotInfo01 = new Slot(1, 'Watermelon');
const slotInfo02 = new Slot(2, 'Grape');
const slotInfo03 = new Slot(3, 'Orange');
//const //slotInfo04 = new Slot(4, 'Clover');
//const //slotInfo05 = new Slot(5, 'Apple');
//const //slotInfo06 = new Slot(6, 'Horseshoe');
//const //slotInfo07 = new Slot(7, 'Seven');

export const wildcard = new Slot(8, 'Diamond');
export const wildcardBigWin = new Slot(9, 'Big Win');

export const strips: Slot[][] = [];

//Strip #01
strips.push([
  slotInfo01,
  slotInfo03,
  slotInfo02,
  slotInfo00,
  slotInfo02,
  slotInfo03,
  slotInfo01,
  slotInfo00,
  slotInfo03,
  slotInfo02,
  slotInfo00,
  slotInfo01,
  slotInfo01,
  slotInfo00,
  slotInfo03,
  slotInfo02,
]);

//Strip #02
strips.push([
  slotInfo02,
  slotInfo00,
  slotInfo03,
  slotInfo01,
  slotInfo01,
  slotInfo00,
  slotInfo02,
  slotInfo03,
  slotInfo03,
  slotInfo01,
  slotInfo00,
  slotInfo02,
  slotInfo02,
  slotInfo03,
  slotInfo01,
  slotInfo00,
]);

//Strip #03
strips.push([
  slotInfo03,
  slotInfo01,
  slotInfo02,
  slotInfo01,
  slotInfo02,
  slotInfo00,
  slotInfo00,
  slotInfo03,
  slotInfo02,
  slotInfo03,
  slotInfo01,
  slotInfo00,
  slotInfo03,
  slotInfo01,
  slotInfo00,
  slotInfo02,
]);

//Strip #04
strips.push([
  slotInfo01,
  slotInfo03,
  slotInfo00,
  slotInfo02,
  slotInfo03,
  slotInfo00,
  slotInfo02,
  slotInfo01,
  slotInfo00,
  slotInfo02,
  slotInfo01,
  slotInfo03,
  slotInfo02,
  slotInfo01,
  slotInfo03,
  slotInfo00,
]);

//Strip #05
strips.push([
  slotInfo01,
  slotInfo03,
  slotInfo00,
  slotInfo02,
  slotInfo03,
  slotInfo00,
  slotInfo02,
  slotInfo01,
  slotInfo00,
  slotInfo02,
  slotInfo01,
  slotInfo03,
  slotInfo02,
  slotInfo01,
  slotInfo03,
  slotInfo00,
]);
