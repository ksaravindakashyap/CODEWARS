function dirReduc(arr){
  for(let j=0;j<arr.length;j++)
  {
    for(let i=0;i<arr.length-1;i++)
    {
      if(((arr[i] == "NORTH" && arr[i+1] == "SOUTH") ||(arr[i] == "EAST" && arr[i+1] == "WEST")) || ((arr[i] == "SOUTH" && arr[i+1] == "NORTH") ||(arr[i] == "WEST" && arr[i+1] == "EAST")))
      {
        arr.splice(i,2)
      }
    }
  }
  return arr;
  }

arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
let res = dirReduc(arr)
console.log(res);