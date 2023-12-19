// Elementen selecteren; button, opmerkingensectie, bericht

let button = document.querySelector('.place-comment')
let commentBox = document.querySelector('.comment-section')
let message = document.querySelector('.msg')
let input = document.querySelector('.newmsg')

// Luisteren naar event; button 

button.addEventListener('click', function() {

// Text-area krijgt een border en bericht verschijnt

    input.classList.toggle('.inputfocus')
    message.classList.add('.show-msg')
    
})









