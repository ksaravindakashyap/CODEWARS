function DNAStrand(dna){
    const holder1 = dna.split('')
     //console.log(holder1);
     for(let i=0;i<holder1.length;i++)
     {
         if(holder1[i] === 'A')
         {
             holder1[i] = 'T'
         }
         else if(holder1[i] === 'T')
         {
             holder1[i] = 'A'
         }
         else if(holder1[i] === 'G')
         {
             holder1[i] = 'C'
         }
         else if(holder1[i] === 'C')
         {
             holder1[i] = 'G'
         }
 
     }
     var holder2 = holder1.join('')
    //console.log(holder2);
     return holder2
   
 }

//DNAStrand("AAA") for testing purpose