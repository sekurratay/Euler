var sourceNum = 600851475143;
var highestPrime = function(n)
{
    var i=2;
    while(n > 1){
        while(n % i == 0)
            n=n/i;
        i++;
        if(i * i > n && n > 1){
            return n;
        }
    }
    return i;
}

document.getElementById("result").innerHTML = highestPrime(sourceNum);