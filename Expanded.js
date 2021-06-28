function expandedForm(num) {
        var result = []
      var res = []
      var temp = 1;
     let len = String(num);
      let numDiv = len.length;
      for(let i=0;i<numDiv;i++)
      {
          temp *= 10
          n = num%10
          num = parseInt(num/10);
          let hold = n * (temp/10);
          if(hold!==0)
          {
              result.unshift(hold) // to insert element to the beginning
          }
          console.log(result);
           res = result.join(" + ")
      }
    return res
  }

  
  expandedForm(4982342);