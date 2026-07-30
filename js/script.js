const bar = document.querySelector('#bars')
const sidebar = document.querySelector('.side-bar')
const close = document.querySelector('#close')
const body = document.querySelector('body')
bar.addEventListener('click', ()=>{
    sidebar.style.display = 'block'
})
close.addEventListener('click', ()=>{
    sidebar.style.display = 'none'
})

