var resis=document.getElementsByName('resistance'),
    tension=document.getElementById('tension'),
    btn=document.getElementById("btn");

var res = new Array(4);

var U,I1,I2,I3,U1,U2,U3,Re;

resis[0].addEventListener('input', function(e){
    res[0]=parseFloat(e.target.value);
});
resis[1].addEventListener('input', function(e){
    res[1]=parseFloat(e.target.value);
});
resis[2].addEventListener('input', function(e){
    res[2]=parseFloat(e.target.value);
});
resis[3].addEventListener('input', function(e){
    res[3]=parseFloat(e.target.value);
});
tension.addEventListener('input', function(e){
    U=parseFloat(e.target.value);
});

btn.addEventListener('click',function(){
    
    Re=res[0]+((res[1]*res[2])/(res[1]+res[2]))+res[3];
    I1=U/Re;
    U1=res[0]*I1;
    I2=res[2]/(res[1]+res[2]);
    U2=res[1]*I2;
    I3=res[1]/(res[1]+res[2]);
    U3=res[3]*I1;
    document.querySelector('.i1').value=I1;
    document.querySelector('.i2').value=I2;
    document.querySelector('.i3').value=I3;
    document.querySelector('.u1').value=U1;
    document.querySelector('.u2').value=U2;
    document.querySelector('.u3').value=U3;
});