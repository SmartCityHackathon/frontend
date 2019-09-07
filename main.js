


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
        changeDate(element,moving)
    
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

