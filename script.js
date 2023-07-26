//Function: Add 7 

function add7(num){
    return num + 7; 
}


//Function: Multiply 

function multiply (num1, num2) {
    const product = num1 * num2;
    return product;
}

const result = multiply (2, 2);
alert (result);


//Function: Capatalize  

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}


//Function: lastLetter  

function lastLetter(str) {
    return str[str.length - 1];
  }

console.log(lastLetter("abcd")); // "d"
console.log(lastLetter("hello")); // "o"
console.log(lastLetter("world")); // "d"
console.log(lastLetter(""));      // "" (an empty string has no last letter)
