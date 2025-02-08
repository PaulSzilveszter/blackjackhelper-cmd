"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var readline = __toESM(require("readline"));

// src/STARTING_PARAMS.ts
var NUMBER_OF_DECKS = 8;
var NUMBER_OF_CARDS = 52 * NUMBER_OF_DECKS;
var NUMBER_OF_CARD_TYPE = 4 * NUMBER_OF_DECKS;

// src/constants/consts.ts
var CardValues = {
  2: 0.5,
  3: 1,
  4: 1,
  5: 1.5,
  6: 1,
  7: 0.5,
  8: 0,
  9: -0.5,
  10: -1,
  J: -1,
  Q: -1,
  K: -1,
  A: -1
};

// src/constants/functions.ts
var resetDeckCounter = () => {
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
var resetTable = () => {
  DeckCount = resetDeckCounter();
  Count = 0;
  TotalCardCount = 0;
};
var TotalCardCount = 0;
var DeckCount = resetDeckCounter();
var Count = 0;
resetTable();
var TrueCount = () => Count / RemainingDecks();
var registerCard = (card) => {
  TotalCardCount++;
  DeckCount[card]++;
  Count += CardValues[card];
};
var RemainingDecks = () => {
  return Math.floor((NUMBER_OF_CARDS - TotalCardCount) / 52 + 1);
};

// src/constants/interfaces.ts
function isValidCard(cardString) {
  return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(cardString);
}

// src/index.ts
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function showData() {
  console.clear();
  console.log("\n\n##########  DATA  ##########");
  console.log(DeckCount);
  console.log(TotalCardCount);
  console.log(`Count: ${Count}`);
  console.log("$$$  " + TrueCount() + "  $$$");
  console.log("######################\n\n");
}
rl.on("line", (input) => {
  input = input.toUpperCase();
  if (input == "R") {
    console.log("@ RESETED THE DECK! \n\n@");
    resetTable();
  } else if (isValidCard(input)) {
    registerCard(input);
  }
  showData();
});
