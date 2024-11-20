const age = 18;
const hasCar = true;

const canDrive = age >= 18 && hasCar ? "can drive" : "can't drive";
console.log(canDrive);

// ------------------------------ //

const isSunny = true; // -> true
const isntSunny = !isSunny; // -> false

let nothing = null;
// ?? = default value if something is null

console.log(nothing ?? false); // -> false
console.log(nothing ?? "dont have nothing here");

nothing = "1";

console.log(nothing ?? false); // 1

let blue = "blue";
const defaultValue = "White";
const websiteColor = blue || defaultValue;
blue = null;
const websiteColor2 = blue || defaultValue;

console.log(websiteColor);
console.log(websiteColor2);
