// get package into index.js
import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomCol = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const row = `##############################\n##############################\n##############################\n#####                    #####\n#####      ${randomCol}       #####\n#####                    #####\n##############################\n##############################\n##############################`;

console.log(chalk.hex(randomCol)(row));
