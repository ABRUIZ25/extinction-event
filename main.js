const FirstList = document.querySelector('.FirstList')
const OtherList = document.querySelector('.OtherList')
const PicList = document.querySelector('#row')
const button = document.querySelector('#destroy-all')




function LineThrough(event){
   event.target.style.textDecoration = 'line-through'
}

function ChangeOpacity(event){
    event.target.style.opacity = '.30'
}

function DoAll (){
    FirstList.style.textDecoration = 'line-through'
    OtherList.style.opacity = '.30'
    PicList.style.opacity = '.30'
    console.log('Boom!')
}



FirstList.addEventListener('click',LineThrough)
OtherList.addEventListener('click',ChangeOpacity)
PicList.addEventListener('click',ChangeOpacity)
button.addEventListener('click',DoAll)







  

