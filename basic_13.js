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
    return sum = (sum/arr.length);
}

console.log(printAverageOfArray([1,2,3,4]));


// Return Odds Array 1-255
// returnOddsArray1To255()
// Create an array with all the odd integers between
// 1 and 255 (inclusive).

function returnOddsArray1To255(){
    let narr = [];
    for(let i = 0; i<=255; i++){
        if(i % 2 == 1){
            narr.push(i);
        }
    }
    return narr;
}

console.log(returnOddsArray1To255());


// Square Array Values
// squareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

function squareArrayVals(arr){
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(squareArrayVals([1,2,3,4,5]));


// Return Array Count Greater than Y
// returnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the
// number of array values greater than Y.

function returnArrayCountGreaterThanY(arr, y){
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count ++;
            console.log(arr[i]);
        }
    }
    return count;
}

console.log(returnArrayCountGreaterThanY([1,3,5,7,9,11,13,15,17,19], 9));


// Zero Out Array Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative
// values to zero.

function zeroOutArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(zeroOutArrayNegativeVals([1,3,-5,-7,9,-2,5673,5,2,7,-6]));

// Print Max, Min, Average Array Values
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average
// values for that array.

function printMaxMinAverageArrayVals(arr){
    let max=0, min=0, sum=0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < arr[i+1]){
            min = arr[i];
        }
    }
    console.log(max,min,sum/arr.length);
}

printMaxMinAverageArrayVals([5,2,7,4,1,8,6,3])


// Shift Array Values Left
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the
// left) by one index, dropping the first value and
// leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr){
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}

console.log(shiftArrayValsLeft([1,2,3,4,5]));



// Swap String for Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative
// values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr
}

console.log(swapStringForArrayNegativeVals([1,2,-3,4,5,-6,7,8,-9]));
