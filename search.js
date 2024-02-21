let result = sessionStorage.getItem('result')
const resultBlock = document.querySelector('.block')

resultBlock.innerHTML = result

let lastScroll = 0
const defaultOffset = 50
const header = document.querySelector('.head')

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide')

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide')
    }
    else if(scrollPosition() < lastScroll && containHide()){
        header.classList.remove('hide')
    }
    lastScroll = scrollPosition()
})