"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const functions_1 = require("./constants/functions");
const functions_2 = require("./constants/functions");
const interfaces_1 = require("./constants/interfaces");
// registerCard("A")
// registerCard("Q")
// registerCard("J")
function showData() {
    console.log("\n\n##########  DATA  ##########");
    console.log(functions_1.DeckCount);
    console.log(functions_1.Count);
    console.log(functions_1.TotalCardCount);
    console.log((0, functions_1.RemainingCards)());
    console.log((0, functions_1.RemainingCardType)("J"));
    console.log("$$$  " + (0, functions_2.TrueCount)() + "  $$$");
    console.log("######################\n\n");
}
rl.on('line', (input) => {
    input = input.toUpperCase();
    if (input == "R") {
        console.log("@ RESETED THE DECK! \n\n@");
        (0, functions_1.resetTable)();
    }
    else if ((0, interfaces_1.isValidCard)(input)) {
        (0, functions_1.registerCard)(input);
    }
    showData();
});
