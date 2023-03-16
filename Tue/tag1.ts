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

//! ---------------------------------------------------  Aufgabe 5 ---------------------------------------------------
function keepPlaying(param: boolean | number): boolean {
    let result = false;

    if (param === true || param < 10) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log("Aufgabe 5", keepPlaying(15));

//! ---------------------------------------------------  Aufgabe 6 ---------------------------------------------------

// moves: 
// left = 0
// right = 1
// up = 2
// down = 3

function move(input: string): number | undefined {
    let result: number | undefined = 0;


    switch (inputLow) {
        case "left":
            result = 0;
            break;
        case "right":
            result = 1;
            break;
        case "up":
            result = 2;
            break;
        case "down":
            result = 3;
            break;

        default:
            result = undefined;
    }
    return result;
}
let input: string = "DoWn"
let inputLow = input.toLowerCase();
move(input);

console.log("Move:", move(input));

//! ---------------------------------------------------  Aufgabe 7 ---------------------------------------------------


export { }