const scrollUp = document.querySelector('#scroll-up')
const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const cerrarNav = document.querySelector('ul')

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})
 cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible')
 })

