function longestConsec(strarr, k) {
    var resultlength =0
    for(let i=0;i<strarr.length-1;i++)
    {
        for(let j=i;j<(i+1);j++)
        {
            var tempLength = strarr[j].length + strarr[j+1].length
            console.log(tempLength);
            if(resultlength < tempLength)
            {
                resultlength = tempLength;
                console.log(resultlength);
                var resultString = strarr[j] + strarr[j+1]
                console.log(resultString);

            }
        }
        
        
    }
    return resultString
    
}

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
k = 2

console.log(longestConsec(strarr,k))

//LATEST EDITED
// function longestConsec(strarr, k) {
//     //console.log(strarr)
//     //console.log("k ->" + k)
//           var resultlength =0
//           var tempLength = 0;
//           var tempList = []
//           var resultList = []
//           tempList = new Array(strarr.length)
//           resultList = new Array(strarr.length)
//           var count =0
//           if(strarr.length===0 || k>strarr.length || k<= 0){
//             return ''
//           }
//     if(k === 1)
//       {
//         for(let i=0;i<strarr.length-1;i++)
//           {
//             if(strarr[i].length<strarr[i+1].length)
//               {
//                var resultString = strarr[i+1]
//               }
//           }
//         return resultString
//       }
//     else
//     {
//       for(let i=0;i<strarr.length-1;i++)
//       {
//         //console.log("i -> " + i)
//         tempLength = 0
//         for(let j=i;j<k+i;j++)
//           {
//             if(typeof(strarr[j]) === 'undefined')
//               {
//                 return (String(resultList))
//               }
//           else{
//             tempLength += strarr[j].length
//             //console.log("templength" + tempLength)
//             //push the string to the list
//             tempList.push(strarr[j])
//             //count+=1
//             }
//           }
        
//         if(resultlength < tempLength)
//               {
//                 resultlength = 0 //EDITED 0.1
//                 resultlength = tempLength
//                 tempLength = 0
//                 //empty the final string
//                 resultList= []
//                //Another for  loop use join method
//                 tempList = tempList.join('')
//                 //console.log("tmep list->" + tempList);
//                 //insert temp answer to resulstring
//                 resultList = tempList;
//                 //console.log(resultList)
//                 //empty the tempstring list
//                 tempList = []
//                 //resultString = ''
//                 //resultString = String(resultList)
//               }
//           }
//       }
//     return (String(resultList))
//     }
  