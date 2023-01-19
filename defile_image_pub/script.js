var i_slide = document.getElementsByClassName('i_slide');
var etape = 0;
var nbr_img = i_slide.length;

function removeActiveImage(){
    for(var i = 0; i < nbr_img; i++){
        i_slide[i].classList.remove('active');
    }
}

setInterval (function(){
    etape++;
    if (etape >= nbr_img){
        etape = 0;
    }
    removeActiveImage();
    i_slide[etape].classList.add('active');
},1700)
