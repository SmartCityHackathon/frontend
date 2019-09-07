for(const element of document.querySelectorAll('.inner div')){

    element.addEventListener('click',()=>{
        if(element.classList.contains('not')){
            element.classList.remove('not')
        }else{
            element.classList.add('not');
        }
    });
}

p = 2;
function left() {
   if (p>0) {
       p --;
   }
    console.log(p);

    document.querySelector('.outer').scrollLeft -= 50;


}

function right() {
    p ++;
    console.log(p);


    document.querySelector('.outer').scrollLeft += 50;


}