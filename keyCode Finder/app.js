
window.addEventListener('keydown',simple);

let div=document.querySelector('#codes');


function simple(e){
    
 let key=e.keyCode;
 div.textContent=key;
 
}