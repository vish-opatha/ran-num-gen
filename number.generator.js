let numberOfRows = 0;
const submitBtn = document.getElementById("btnSubmit");

let myStr='';
let newSet = new Set();

function spliceNumbers(numArray){
    let numbers = [];

    // if(!(numArray.inclues(','))){

    // }
    numbers = numArray.trim().split(",");
    
    if (numbers.length<6){
        window.alert("Ha ha ha, you need at least 6 numbers");
        return;
    }

    // if()
    
    return numbers;
}

function generateNumbers(numArray){
    let arrayLength = numArray.length;
    let a;
    
    while(newSet.size<6){
        a = Math.floor(Math.random() * arrayLength );
        newSet.add(numArray[a]);
    }
    
    newSet.forEach((el)=>{
        myStr = myStr + `${el} `;
    });
    
    myStr = `${myStr} </br>`;
    newSet.clear();
}

function generateRandomRows(rowCount, numArray){
    let i =0;
    for(i; i<rowCount; i++){
        generateNumbers(numArray);
    }
}

submitBtn?.addEventListener('click', function(event){
    event.preventDefault();
    let numbersGiven = document.getElementById("numbersOfChoice").value;
    let rowCount = document.getElementById('numberOfRepeats').value;
    let displayEl = document.getElementById('displayStr');
    console.log('ROW COUNT',rowCount);
    let rows = parseInt(rowCount);
    let splicedArray= spliceNumbers(numbersGiven);
    
    generateRandomRows(rows,splicedArray);
    
    console.log(newSet);
    console.log(myStr);
    displayEl.innerHTML = myStr;
});
