"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("start");
const aString = "Hallo";
console.log("Aufgabe1:", aString);
let theNumber = 1;
const test = theNumber;
console.log("Aufgabe2:", test);
//! ---------------------------------------------------  Aufgabe 3 ---------------------------------------------------
function introduction(param1) {
    console.log("Aufgabe3", `Hallo, mein Inhalt ist: ${param1}`);
}
introduction("Franz");
//! ---------------------------------------------------  Aufgabe 4 ---------------------------------------------------
function showContent(param1) {
    if (param1 === undefined) {
        console.log("Ich habe keinen Inhalt");
    }
    if (typeof param1 === "string") {
        console.log("Hallo, mein Inhalt ist " + param1);
    }
}
showContent("Test");
showContent(undefined);
//# sourceMappingURL=learning2.js.map