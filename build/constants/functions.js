"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemainingCardType = exports.RemainingCards = exports.RemainingDecks = exports.registerCard = exports.TrueCount = exports.Count = exports.DeckCount = exports.TotalCardCount = exports.resetTable = exports.resetDeckCounter = void 0;
const STARTING_PARAMS_1 = require("../STARTING_PARAMS");
const consts_1 = require("./consts");
const resetDeckCounter = () => {
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
exports.resetDeckCounter = resetDeckCounter;
const resetTable = () => {
    exports.DeckCount = (0, exports.resetDeckCounter)();
    exports.Count = 0;
    exports.TotalCardCount = 0;
};
exports.resetTable = resetTable;
exports.TotalCardCount = 0;
exports.DeckCount = (0, exports.resetDeckCounter)();
exports.Count = 0;
(0, exports.resetTable)();
const TrueCount = () => (exports.Count / (0, exports.RemainingDecks)());
exports.TrueCount = TrueCount;
const registerCard = (card) => {
    exports.TotalCardCount++;
    exports.DeckCount[card]++;
    exports.Count += consts_1.CardValues[card];
};
exports.registerCard = registerCard;
const RemainingDecks = () => {
    return Math.floor((STARTING_PARAMS_1.NUMBER_OF_CARDS - exports.TotalCardCount) / 52 + 1);
};
exports.RemainingDecks = RemainingDecks;
const RemainingCards = () => (STARTING_PARAMS_1.NUMBER_OF_CARDS - exports.TotalCardCount);
exports.RemainingCards = RemainingCards;
const RemainingCardType = (card) => {
    return (STARTING_PARAMS_1.NUMBER_OF_CARD_TYPE - exports.DeckCount[card]);
};
exports.RemainingCardType = RemainingCardType;
