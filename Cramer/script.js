var coefficient=document.getElementsByName('coeff'),
    constante=document.getElementsByName('cost'),
    btn=document.getElementById("btn");

var i, delta, deltaX, deltaY, deltaZ;

var cost = new Array(3);
var coeff = new Array(9);

coefficient[0].addEventListener('input', function(e){
    coeff[0]=parseFloat(e.target.value);
});
coefficient[1].addEventListener('input', function(e){
    coeff[1]=parseFloat(e.target.value);
});
coefficient[2].addEventListener('input', function(e){
    coeff[2]=parseFloat(e.target.value);
});
coefficient[3].addEventListener('input', function(e){
    coeff[3]=parseFloat(e.target.value);
});
coefficient[4].addEventListener('input', function(e){
    coeff[4]=parseFloat(e.target.value);
});
coefficient[5].addEventListener('input', function(e){
    coeff[5]=parseFloat(e.target.value);
});
coefficient[6].addEventListener('input', function(e){
    coeff[6]=parseFloat(e.target.value);
});
coefficient[7].addEventListener('input', function(e){
    coeff[7]=parseFloat(e.target.value);
});
coefficient[8].addEventListener('input', function(e){
    coeff[8]=parseFloat(e.target.value);
});
    
constante[0].addEventListener('input', function(e){
    cost[0]=parseFloat(e.target.value);
});
constante[1].addEventListener('input', function(e){
    cost[1]=parseFloat(e.target.value);
});
constante[2].addEventListener('input', function(e){
    cost[2]=parseFloat(e.target.value);
});

btn.addEventListener('click',function(){
    delta=coeff[0]*coeff[4]*coeff[8] + coeff[3]*coeff[7]*coeff[2] + coeff[6]*coeff[1]*coeff[5] - coeff[2]*coeff[4]*coeff[6] - coeff[5]*coeff[7]*coeff[0] - coeff[8]*coeff[1]*coeff[3];

    deltaX=cost[0]*coeff[4]*coeff[8] + coeff[3]*coeff[7]*cost[2] + coeff[6]*cost[1]*coeff[5] - cost[2]*coeff[4]*coeff[6] - coeff[5]*coeff[7]*cost[0] - coeff[8]*cost[1]*coeff[3];

    deltaY=coeff[0]*cost[1]*coeff[8] + cost[0]*coeff[7]*coeff[2] + coeff[6]*coeff[1]*cost[2] - coeff[2]*cost[1]*coeff[6] - cost[2]*coeff[7]*coeff[0] - coeff[8]*coeff[1]*cost[0];

    deltaZ=coeff[0]*coeff[4]*cost[2] + coeff[3]*cost[1]*coeff[2] + cost[0]*coeff[1]*coeff[5] - coeff[2]*coeff[4]*cost[0] - coeff[5]*cost[1]*coeff[0] - cost[2]*coeff[1]*coeff[3];

    if(delta!=0){
        document.querySelector('.x').value=deltaX/delta;
        document.querySelector('.y').value=deltaY/delta;
        document.querySelector('.z').value=deltaZ/delta;
    }
    else{
        alert("delta=0");
    }

});