let subscribeSection = document.querySelector('.container');
let form = document.querySelector('#signup-form')
let thanksSection= document.querySelector('.thanks-section')
let dismiss = thanksSection.querySelector('button')

dismiss.addEventListener('click', ()=>{
    window.location.reload()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = form.querySelector('#email').value
 
    if (!validEmail(email)){
        form.classList.add('error')
    }
    else {        
        form.classList.remove('error')
        subscribeSection.style.display = 'none'    
        thanksSection.style.display = 'flex'
        thanksSection.querySelector('p b').innerText = email
    }

})

function validEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
