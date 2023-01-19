
var A=document.getElementById("A");
var B=document.getElementById("B");
var C=document.getElementById("C");
var btn=document.getElementById("btn");

var a, b, delta, x1, x2;

A.addEventListener('input',function(e){
    a=parseFloat(A.value);
})

B.addEventListener('input',function(e){
    b=parseFloat(e.target.value);
})

C.addEventListener('input',function(e){
    c=parseFloat(e.target.value);
})

btn.addEventListener('click',function(){
    if(a!=0){
        delta=b*b-4*a*c;
        if(delta<0)
        {
            alert("pas de solution car DELTA<0");
        }
        else{
            x1=(-b-Math.sqrt(delta))/2*a;
            x2=(-b+Math.sqrt(delta))/2*a;
            document.getElementById("x1").value=x1;
            document.getElementById("x2").value=x2;
        }
    }
    else{
            x1=-c/b;
            document.getElementById("x1").value=x1;
            document.getElementById("x2").value="";
    }
    
    
});