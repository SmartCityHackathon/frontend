


function changeDate(element,moving){
    if(moving==='GOING'){
        element.classList.add('not')
    }else{
        element.classList.remove('not')
    }
}




let isMoving = false;

for(const element of document.querySelectorAll('td')){
    element.addEventListener('pointerdown',()=>{
    
        isMoving = element.classList.contains('not')?'NOT':'GOING';
        changeDate(element,isMoving)
    
    });


    for(const eventType of ['pointerleave','pointerenter']){
    element.addEventListener(eventType,()=>{
        if(isMoving){
            changeDate(element,isMoving);
        }
    });
    }

}


document.querySelector('body').addEventListener('pointerup',()=>{

    isMoving = 
    false;
});

