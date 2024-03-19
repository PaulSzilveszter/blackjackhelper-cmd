"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCard = void 0;
function isValidCard(cardString) {
    return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(cardString);
}
exports.isValidCard = isValidCard;
