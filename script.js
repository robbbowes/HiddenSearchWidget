const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

// body.addEventListener('click', () => {
//     if (search.classList.contains('active')) {
//         search.classList.toggle('active')
//     }
// })