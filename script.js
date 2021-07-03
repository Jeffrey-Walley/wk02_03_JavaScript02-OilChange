function oilFunction() {
    let oilMiles = prompt("How many miles has it been since your last oil change?:");
    if (oilMiles < 500) {
        console.log("Your car doesn't need an oil change.");
    } else {
        console.log("Your car needs an oil change.");
    }
}
oilFunction()