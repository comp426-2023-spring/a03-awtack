import {rpsls} from "../lib/rpsls.js";
import minimist from "minimist";

const rules = `Rock, Paper, Scissors, Lizard, Spock Rules:
    * Rock crushes Scissors
    * Scissors cuts Paper
    * Paper disproves spock
    * Spock vaporizes Rock
    * Rock smashes Lizard
    * Lizard bites Spock
    * Spock breaks Scissors
    * Scissors chop up Lizard
    * Lizard eats Paper
    * Paper covers Rock`

const help = `How to play: node-rpsls [ENTER rock, spock, ... ]
    -h, --help      Display this
    -r, --rules     Show rules of the game/win conditions
    Example:
        node-rpsls      Returns {player: spock'}
        node-rpsls paper     Returns{player: paper, opponent: spock, result: win
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
    console.log(JSON.stringify(rpsls(args._[0])));
} catch (error) {
    console.log("argument is out of range")
    process.exit();
}
