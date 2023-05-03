export function rps(prs){
    const game_pieces = ["rock", "paper", "scissors"];

    const index = Math.floor(Math.random()*3);
    const oppo = game_pieces[index];
    const lower = prs.toLowerCase();
    if(prs==null){
        return{ player: oppo
        };
    }
    if(!lower in game_pieces){
        console.error("No Can Do");
        throw new RangeError();
    }
    else{
        return{
            player: lower,
            opponent: oppo,
            result: win_condition(prs, oppo)
            };
    }
        
}

export function rpsls(slprs){
    const game_pieces = ["rock", "paper", "scissors", "lizard", "spock"];
    const index = Math.floor(Math.random()*5);
    let oppo = game_pieces[index];
    let lower = slprs.toLowerCase();
    if(slprs==null){
        return{
            player: oppo
        };
    }
    if(!lower in game_pieces){
        console.error("No Can Do");
        throw new RangeError();
    }
    else{
        return{
            player: lower,
            opponent: oppo,
            result: win_condition(slprs, oppo)
            };
    }

}
function win_condition(p1, p2){
    const l1 = p1.toLowerCase();
    const l2 = p2.toLowerCase();
    if(l1 == l2){
        return "tie";
    }
    else if(l1 == "rock" && (l2 == "scissors" || l2 == "lizard")){
        return "win";
    }
    else if(l1=="paper" && (l2 == "rock" || l2 == "spock")){
        return "win";
    }
    else if(l1=="scissors" && (l2 == "paper" || l2 == "lizard")){
        return "win";
    }
    else if(l1=="spock" && (l2 =="rock" || l2 =="scissors")){
        return "win";
    }
    else if(l1="lizard" && (l2 == "spock" || l2 =="paper")){
        return "win";
    }
    else{
        return "lose";
    }
}
