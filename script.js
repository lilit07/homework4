//2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4), we should see:


function stars(a, sym) {
    let res = '';

    while (a > 0){
        res = res + sym;
        a--;
    }
    return res;
}

function triangleStars(j) {
    let i = 0;
    temp = j;
    let star = 2*j - 1
    while (i < temp && j > 0){
        console.log(stars(i, ' ') + stars(star, '*'));
        i++;
        star = star - 2;
    }
}

triangleStars(5);

//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
 function multiToSingle(arr) {
let d = [];
let i = 0;

while (i < arr.length){
    let j = 0;

    while (j < arr[i].length){
        d[d.length] =arr[i][j];
        j++;
    }
    i++;
}
return d;
 }


console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));
 //4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.
//It returns the smallest number in the given array if the second argument is false.

function findMinMax(arr, boolean) {

    let max = arr[0];
    let min = arr[arr.length - 1]
    let i = 0;

    while (i < arr.length) {
        if (arr[i] < arr[i + 1]){
            max = arr[i + 1]
        }
        if (min > arr[i]){
            min = arr[i];
        }
        i++;
    }
    if (boolean === true) {
        console.log(max);
    }else{
        console.log(min);
    }
}
  findMinMax([1,2,3,4,5,6,9,-5],false);




 //5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

function forEach(arr,anyFunction) {
    let i = 0;
    while (i < arr.length){
 anyFunction(arr[i]);

        i++;
    }
}

forEach([4, 3, 2],  function(val){

    console.log(val * 4);

});

//6. Create a function 'sum' that takes an array of numbers and returns their sum.

function sum(arr) {
    let res = 0;
    let i = 0;
    while (i < arr.length){
        res = res + arr[i];
        i++;
    }
    console.log(res);
}

sum([1,2,3,5]);
//7. Write a function 'reverse' that reverses the given string.
function reverse(str) {
    let i = str.length - 1;
    let newStr = '';
    while (i >= 0){
        newStr = newStr + str[i];
        i--;
    }
    console.log(newStr);
}
reverse('absd');

//8.Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.

function checkerboard(num) {
    let sym = '*';
    let res = '';
    let temp = num;
    let temp1 = num;
    while (temp1 > 0) {
        while (temp > 0) {
            res = res + sym
            temp--;

        }
        if (temp1%2 === 0){
            console.log(' ' + res);
        }else {
            console.log(res);
        }

        temp1--;
    }
}
checkerboard(6);

