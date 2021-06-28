 
  function findUniq(arr) {
    //console.log(arr)
        var initial = arr[0]
        if(initial !== arr[1])
          {
            if(initial === arr[2])
              {
                return arr[1]
              }
            return initial
          }
      //console.log(initial);
      for (const count of arr) {
          if(count!==initial)
          {
             // console.log(count);
              return count
          } 
      }
  
  }
  
  

  arr = [ 0, 0, 0.55, 0, 0 ]
  findUniq(arr)


