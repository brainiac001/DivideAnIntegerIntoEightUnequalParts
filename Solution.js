/* 
for(let i  = -100; i < 101; i++) console.log(eightUnequal(i));
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
*/
function eightUnequal(num){
    const midpoint = Math.floor(num/8);
    let sum = 0;
    const arr = [];
    for(let i = 0; i < 7; i++){
        arr[i] = midpoint -4 + i;;
        sum += arr[i];
    }
    arr[7] = num - sum;
    sum += arr[7];
    //console.log(sum);
    //console.log(hasDuplicates(arr));
    return arr;
}
/* Am assuming the 8 unequal numbers can be negative or positive
There are many ways to solve this problem but I will go with the easiest approach in my opinion
Am also assuming that the unequal numbers are not necessarily random
Using random numbers is posible but can lead to an unpredictable time complexity or might require more lines of code
remove comment from the above code to log result
*/