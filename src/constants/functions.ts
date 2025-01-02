import { Card, DeckCounter } from "./interfaces";
import { NUMBER_OF_CARDS, NUMBER_OF_CARD_TYPE, NUMBER_OF_DECKS } from "../STARTING_PARAMS";
import { CardValues } from "./consts";

export const resetDeckCounter = (): DeckCounter => {
    return {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        J: 0,
        Q: 0,
        K: 0,
        A: 0
    };
};
export const resetTable = () => {
    DeckCount = resetDeckCounter();
    Count = 0;
    TotalCardCount = 0;
}


export let TotalCardCount = 0

export let DeckCount: DeckCounter = resetDeckCounter();
export let Count: number = 0;
resetTable();

export const TrueCount = (): number => (Count / RemainingDecks())

export const registerCard = (card: Card) => {

    TotalCardCount++;

    DeckCount[card]++;
    
    Count+= CardValues[card];


}


export const RemainingDecks = ()=>{
    return Math.floor((NUMBER_OF_CARDS-TotalCardCount)/52+1);
}

export const RemainingCards=()=>(NUMBER_OF_CARDS-TotalCardCount)

export const RemainingCardType=(card:Card)=>{
    return (NUMBER_OF_CARD_TYPE - DeckCount[card])  ;
    
}





