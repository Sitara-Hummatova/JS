const letsGo=document.querySelector('body')
const createDiv=document.querySelector('button')

const makeDivs=document.querySelector('.clicks')
createDiv.addEventListener('click'. doIt)

function doIt(e) {
    e.preventDefault()
    
    const newDiv=document.createElement('div')
   
    letsGo.appendChild(makeDivs)
    newDiv.classList.add('div-1')

}