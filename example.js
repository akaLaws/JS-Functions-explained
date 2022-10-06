// Function syntax - two ways to write the same function¨

// Function [functionname] ([arguments]) {
//    [scope with actions to perform when function is called]
//    return [what the function should return in our case the calculation]
// }

function calc (a, b) {
    return a + b;
}

const calc = (a, b) => {
    return a + b;
}


// Example of a very simplyfied validation

function validate (name, age){
    if(name === "sarah" && age === 31){
        return "you tell the truth";
    }
    else{
        return "are you sure??";
    }
}

