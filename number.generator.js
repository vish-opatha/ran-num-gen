let numbersRequired = 6;
let numberOfRows = 0;
const submitBtn = document.getElementById("btnSubmit");
let luckyString = '';

let arrayOfNumbers = [];
function spliceNumbers(numArray){
    arrayOfNumbers = numArray.trim().split(",");
    return arrayOfNumbers;
}

function randomSelect(arrayOfNumbers, numberOfRows){
    console.log('********* INSIDE RANDOME SELECT');

    const len = (arrayOfNumbers.length); 
    console.log('********* AFTER LEN', len);
    let pushArray = [];
    for(let i=0; i<len; i++){
        const a = Math.floor(Math.random() * len );
        let isGiven = pushArray.find(a);
        luckyString =+ arrayOfNumbers[a];
        console.log(`***** Random number ${a} | lucky string ${luckyString} | IS GIVEN ${isGiven} `);
    }
}




submitBtn?.addEventListener('click', function(event){
event.preventDefault();
let numbersGiven = document.getElementById("numbersOfChoice").value;
let arrayOfNumbers = spliceNumbers(numbersGiven);
console.log(arrayOfNumbers);

numberOfRows = 8;

randomSelect(arrayOfNumbers, numberOfRows);
});
