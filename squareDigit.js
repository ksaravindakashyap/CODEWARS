// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
     var holder1 = num.toString()
    var holder2 = holder1.split('')
    for(let i=0;i<(holder2.length);i++)
    {
        holder2[i] =  (holder2[i]**2)
    }
    var holder3 = parseInt(holder2.join(''))
    return holder3;
  
}
