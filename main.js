
// Elementen selecteren; button, textarea, bericht en gehele operkingensectie

let button = document.querySelector('.sndbtn')
let commentInput = document.querySelector('textarea')
let message = document.querySelector('.msg')
let commentBox = document.querySelector('.comment-section')

// Naar event luisteren (button wordt geklikt)

button.addEventListener('click', function() {

// Bericht verschijnt

    message.classList.add('show-msg')
})
// Naar event luisteren (bericht wordt geklikt)

message.addEventListener('click', function() {

// bericht wordt verwijdert

    message.remove('msg')
})





