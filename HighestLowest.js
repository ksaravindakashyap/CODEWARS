function highAndLow(numbers){
    var holder1 = numbers.split(' ') 
    var holder2 = holder1.sort((a,b) => a-b) //Is user for sorting if unsorted string is obtained
    const heighest = holder2[((holder2.length)-1)] // To get the last element since it contains the highest element
    const lowest = holder2[0] //Always gives the lowest element
    return (`${heighest} ${lowest}`)
}

//GIVE A TRY WITH CALLING THE FUNCTION WITH SOME STRINGS EX: highAndLow("1 9 3 4 -5")