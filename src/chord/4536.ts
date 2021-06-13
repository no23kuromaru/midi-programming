import {chord, clip} from 'scribbletune';

const scribble = require('scribbletune')

const c = clip({
  notes: [chord('F4 M'), chord('G4 M'), chord('E4 m'), chord('A4 m')],
  pattern: 'x___'.repeat(4)
});

scribble.midi(c, '4536.mid');
