import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



import { CardValues } from "./constants/consts";
import { Count, DeckCount, RemainingCardType, RemainingCards, TotalCardCount, registerCard, resetTable } from "./constants/functions";
import { TrueCount } from "./constants/functions";
import { isValidCard } from './constants/interfaces';





// registerCard("A")
// registerCard("Q")
// registerCard("J")


function showData(){

    console.clear();

    console.log("\n\n##########  DATA  ##########")




    console.log(DeckCount)
    console.log(TotalCardCount)
    console.log(`Count: ${Count}`)
  

    console.log("$$$  " + TrueCount() + "  $$$")

    console.log("######################\n\n")
}














rl.on('line', (input) => {

    input = input.toUpperCase()

    if (input == "R") {

        console.log("@ RESETED THE DECK! \n\n@")

        resetTable();

        

    }
    else if(isValidCard(input)){
        registerCard(input)
    }


    showData()



});

