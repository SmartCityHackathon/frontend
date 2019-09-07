

function changeDateOld(element){
    if(element.classList.contains('not')){
        element.classList.remove('not')
    }else{
        element.classList.add('not')
    }
}


function changeDate(element,moving){
    if(moving==='GOING'){
        element.classList.add('not')
    }else{
        element.classList.remove('not')
    }
}




let moving = false;

for(const element of document.querySelectorAll('td')){
    element.addEventListener('pointerdown',()=>{
    
        moving = element.classList.contains('not')?'NOT':'GOING';
        changeDateOld(element)
    
    });


    for(const eventType of ['pointerleave','pointerenter']){
    element.addEventListener(eventType,()=>{
        if(moving){
            changeDate(element,moving);
        }
    });
    }

}


document.querySelector('body').addEventListener('pointerup',()=>{
    moving = false;
});

