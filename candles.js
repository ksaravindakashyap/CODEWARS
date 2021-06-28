function birthdayCakeCandles(candles) {
    candles.sort((a,b) => (a-b))
    var temp = candles[candles.length]
    var count = 1
    for(let i=candles.length;i>=0;i--)
    {
        console.log(candles[i])
        if(temp===candles[i])
        {
            count+=1
        }
    }
    console.log(candles)
    return count
}

candles = [4,4,1,3]

console.log(birthdayCakeCandles(candles))