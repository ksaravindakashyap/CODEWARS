//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//EXAMPLES :
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    var holder1 = numbers.split(' ') 
    var holder2 = holder1.sort((a,b) => a-b) //Is user for sorting if unsorted string is obtained
    const heighest = holder2[((holder2.length)-1)] // To get the last element since it contains the highest element
    const lowest = holder2[0] //Always gives the lowest element
    return (`${heighest} ${lowest}`)
}

//GIVE A TRY WITH CALLING THE FUNCTION WITH SOME STRINGS EX: highAndLow("1 9 3 4 -5")
