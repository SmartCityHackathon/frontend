for(const element of document.querySelectorAll('td')){

    element.addEventListener('click',()=>{
        if(element.classList.contains('not')){
            element.classList.remove('not')
        }else{
            element.classList.add('not')
        }
    });



}