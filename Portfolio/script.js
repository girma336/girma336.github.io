const bars = document.querySelector('.bars-mob')
const navbar = document.querySelector('.nav-bar')
const closeBar = document.querySelector('.close-bar')
// const navbar = document.querySelector('.nav-bar')

bars.addEventListener('click', () => {
    navbar.classList.add('hubber')
})

closeBar.addEventListener('click', () => {
    navbar.classList.remove('hubber')
})
