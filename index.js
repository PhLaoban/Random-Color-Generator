// get package into index.js
import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomCol = '#' + Math.floor(Math.random() * 16777215).toString(16);

const row = `##############################\n##############################\n##############################\n#####                    #####\n#####      ${randomCol}       #####\n#####                    #####\n##############################\n##############################\n##############################`;

const luminosity = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const hue = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

if (!luminosity && !hue) {
  console.log(chalk.hex(randomCol).bold(row));
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(row),
  );
}
