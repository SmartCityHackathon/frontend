

function changeDate(element){
    
    if(element.classList.contains('not')){
        element.classList.remove('not')
    }else{
        element.classList.add('not')
    }

}

let moving = false;

for(const element of document.querySelectorAll('td')){
    element.addEventListener('click',changeDate.bind(this,element));
    element.addEventListener('pointerenter',()=>{
        if(moving){
            changeDate(element);
        }
    });
}

document.querySelector('table').addEventListener('pointerdown',()=>{
    moving = true;
});


document.querySelector('table').addEventListener('pointerup',()=>{
    moving = false;
});

