for(const element of document.querySelectorAll('.inner div')){

    element.addEventListener('click',()=>{
        if(element.classList.contains('not')){
            element.classList.remove('not')
        }else{
            element.classList.add('not');
        }
    });
}


function left() {



    document.querySelector('.outer').scrollLeft -= 400;


}

function right() {


    document.querySelector('.outer').scrollLeft += 400;


}