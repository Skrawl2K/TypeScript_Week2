console.log("start");

//! ---------------------------------------------------  Aufgabe 1 ---------------------------------------------------
// Type String wurde in "myString umbenannt"
type myString = string;
const aString: myString = "Hallo";
console.log("Aufgabe1:", aString);

//! ---------------------------------------------------  Aufgabe 2 ---------------------------------------------------
type StringOrNumber = string | number;
let theNumber: number = 1;
const test: StringOrNumber = theNumber;

console.log("Aufgabe2:", test);

//! ---------------------------------------------------  Aufgabe 3 ---------------------------------------------------
function introduction(param1: StringOrNumber) {

    console.log("Aufgabe3", `Hallo, mein Inhalt ist: ${param1}`);

}

introduction("Franz");

//! ---------------------------------------------------  Aufgabe 4 ---------------------------------------------------
function showContent(param1: string | undefined) {
    if (param1 === undefined) {
        console.log("Ich habe keinen Inhalt");
    }

    if (typeof param1 === "string") {
        console.log("Hallo, mein Inhalt ist " + param1);
    }
}

showContent("Test");
showContent(undefined);






export { }