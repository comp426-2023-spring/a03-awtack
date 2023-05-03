#!/usr/bin/env node

import rpsls from "../lib/rpsls.js";
import minimist from "minimist";

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`;

const help = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

const args = minimist(process.argv.slice(2));
if(args.h || args.help){
    console.log(help);
    process.exit(0);
}
if(args.r || args.rules){
    console.log(rules);
    process.exit(0);
}

try {
    console.log(JSON.stringify(rpsls(args._[0])));
} catch (error){
    if(error  instanceof RangeError)
    {
        console.error('${arg._[0]} is out of range');
        console.log(help);
        console.log(rules);
        process.exit(1);
    }
}
