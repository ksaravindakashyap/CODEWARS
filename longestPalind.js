//-----------------------------PENDING----------------------------------------



// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.
// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

//TEST CASES
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(longestPalindrome("a"), 1)
//   Test.assertEquals(longestPalindrome("aa"), 2)
//   Test.assertEquals(longestPalindrome("baa"), 2)
//   Test.assertEquals(longestPalindrome("aab"), 2)
//   Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
//   Test.assertEquals(longestPalindrome("baabcd"), 4)
//   Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)
//     });
//   })


longestPalindrome=function(s){
    let count = 0;
    var k=0
   var resultList = []
    if(s.length === 1)
        return 1;
    else if(s.length === 0)
        return 0;
    else{
        var hold = s.split('')
        console.log(hold);
    //     var temp = hold.length;
    // for(let b=0;b<temp;b++)
    // {
    //     console.log("b-> " + b);
        //hold.length = temp;
        loop1 :
        for(var i=0;i<hold.length;i++)
        {
            console.log("i "+ i);
            for(var j=hold.length-1;j>0;j--)
            {
               console.log("j " + j);
               if(i === j)
               {
                if(hold[i] === hold[j])
                {
                    continue
                }
               }
               else if(hold[i] === hold[j])
                {
                    count+=2;
                    console.log(i,j);
                    console.log(hold[i]);
                    resultList.push(hold[i],hold[j])
                    
                    hold.length = j;
                    continue loop1;
                }
                else{
                    continue;
                }
            }
        }
        // hold.length = temp;
        // i = 0;


    //}
        console.log(count);
        console.log(resultList);
    }
    return count;
  }


console.log(longestPalindrome("baablkj12345432133d"));