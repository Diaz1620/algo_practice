// Print 1-255
// print1To255()
// Print all the integers from 1 to 255.

function Print1to255() {
    for(let i = 1; i<=255; i++){
        console.log(i);
    }
}

Print1to255()

// Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.

function printOdds1To255(){
    for(let i = 1; i<=255; i+=2){
        console.log(i);
    }
}

printOdds1To255()

// Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each
// integer print the sum so far.

function printIntAndSum() {
    let sum = 0
    for(let i = 0; i<=255; i++){
        console.log(i);
        sum += i;
        console.log(sum);
    }
}
printIntAndSum()


// Print Array Values
// printArrayVals(arr)
// Iterate through a given array, printing each value.

function printArrayVals(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

printArrayVals([1,3,5,7,9])


// Print Max of Array
// printMaxOfArray(arr)
// Given an array, find and print its largest element.

function printMaxOfArray(arr){
    let max=0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

console.log(printMaxOfArray([1,3,5,7,9]));



// Print Average of Array
// printAverageOfArray(arr)
// Analyze an array’s values and print the average.

function printAverageOfArray(arr){
    let sum = 0;
    for(let i = 0; i<=arr.length; i++){
        sum += i;
        console.log(sum);
    }
    return sum = (sum/2);
}

console.log(printAverageOfArray([1,2,3,4]));


