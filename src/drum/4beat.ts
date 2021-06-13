const fs = require('fs');
const Midi = require('jsmidgen');

const file = new Midi.File();
const track = new Midi.Track();
file.addTrack(track);

const kick = 'C2';
const snare = 'D2';
const hat = 'G#2';

// 1
track.noteOn(0, kick, 0);
track.noteOff(0, kick, 32)
track.noteOn(0, hat, 32);
track.noteOff(0, hat, 32);

// 2
track.noteOn(0, kick, 32);
track.noteOn(0, snare);
track.noteOff(0, kick, 32)
track.noteOff(0, snare)
track.noteOn(0, hat, 32);
track.noteOff(0, hat, 32);

// 3
track.noteOn(0, kick, 32);
track.noteOff(0, kick, 32)
track.noteOn(0, hat, 32);
track.noteOff(0, hat, 32);

// 4
track.noteOn(0, kick, 32);
track.noteOn(0, snare);
track.noteOff(0, kick, 32)
track.noteOff(0, snare)
track.noteOn(0, hat, 32);
track.noteOff(0, hat, 32);


fs.writeFileSync('4beat.mid', file.toBytes(), 'binary');
