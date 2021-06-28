function isIsogram(str){
    const str1 = str.toLowerCase()
    console.log(str1);
    let hold = str1.split('')  //If you write let hold = str1.split('').sort() -->it takes more runtime around 100ms extra
    console.log(hold);
    hold.sort() //So add the sort method here it reduces the runtime
    console.log(hold);
    for(let i=0; i<hold.length; i++)
    {
        if(hold[i] === hold[i+1])
        {
            return false
        }
    }
    return true
  }

  const str = "aba"
  console.log(isIsogram(str))