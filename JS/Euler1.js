var divis=0;

for(var x=0; x<1000; x++)
{
    if(x%3==0 || x%5==0)
        divis += x;
}

document.getElementById("result").innerHTML = divis.toString();