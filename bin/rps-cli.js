import {rps} from "../lib/rpsls.js";
import minimist from "minimist";

const rules = `Rock, Paper, Scissors, Lizard, Spock Rules:
    * Rock crushes Scissors
    * Scissors cuts Paper
    * Paper covers Rock
`

const help = `How to play: node-rpsls [ENTER rock, ... ]
    -h, --help      Display this
    -r, --rules     Show rules of the game/win conditions
    Example:
        node-rpsls      Returns {player: rock'}
        node-rpsls paper     Returns{player: paper, opponent: rock, result: win
`
const args = minimist(process.argv.slice(2));
if(args.h){
    console.log(help);
    process.exit(0);
}
if(args.r){
    console.log(rules);
    process.exit(0);
}

try {
    console.log(JSON.stringify(rps(args._[0])));
} catch (error) {
    console.log("argument is out of range")
    process.exit();
}