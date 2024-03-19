export type Card = "2" |"3" |"4" |"5" |"6" |"7" |"8" |"9" |"10" |"J" |"Q" |"K" |"A" ;

export function isValidCard(cardString: string): cardString is Card {
    return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(cardString);
  }

export interface DeckCounter{
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    J:number;
    Q: number;
    K: number;
    A: number;

}