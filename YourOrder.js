function order(words){
    var result = []
    var sorting = words.split(' ')
    var result = new Array(sorting.length) //The result array was not set initially so i have added this line
    console.log(sorting);
    for(let i=0; i<sorting.length;i++)
    {
      var temp = sorting[i].split('').sort()
      console.log(temp);
      var valueHolder = parseInt(temp)
        console.log(valueHolder);
      result.splice((valueHolder-1),1,sorting[i])
     // console.log(result);
    }
    console.log(result);
    //console.log(result.join(' '))
    var final = result.join(' ')
    console.log(final);
  }

//words = "is2 Thi1s T4est 3a"
words = "4of Fo1r pe6ople g3ood th5e the2"
order(words)


