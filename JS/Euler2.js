var sum = 0;
var currentNum = 2;
var prevNum = 1;

while(currentNum < 4000000)
{
    x = currentNum;
    if(currentNum % 2 == 0)
    {
        sum += currentNum;
    }
    currentNum += prevNum;
    prevNum = x;
}

document.getElementById("result").innerHTML = sum.toString();