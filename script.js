let searchInput = document.querySelector('.head__inp')
let searchButton = document.querySelector('.head__lupe')

let contentBlock = document.getElementById('content').outerHTML
let footerBlock = document.getElementById('footer').outerHTML
let titleBlock = document.getElementById('title').outerHTML
let videoBlock = document.getElementById('video').outerHTML
let fishBlock = document.getElementById('fishs').outerHTML


let content = 'content'
let footer = 'footer'
let title = 'title'
let video = 'video'
let fish = 'fish'

let modal = document.querySelector('.head__alert')
let list = document.querySelector('.head__list')

let searchArray = [content,footer,title,video,fish]

let search = document.querySelector('.head__search')
searchInput.addEventListener('click',function(){
    list.classList.toggle('new')
})
window.addEventListener('click', e =>{
    const target = e.target
    if (!target.closest('.head__inp')) {
        list.classList.remove('new')
    }
})

let first = document.getElementById('firstP')
first.addEventListener('click',function(){
    searchInput.value = 'title'
})
let second = document.getElementById('secondP')
second.addEventListener('click',function(){
    searchInput.value = 'content'
})
let third = document.getElementById('thirdP')
third.addEventListener('click',function(){
    searchInput.value = 'video'
})
let fourth = document.getElementById('fourthP')
fourth.addEventListener('click',function(){
    searchInput.value = 'footer'
})
let fifth = document.getElementById('fifthP')
fifth.addEventListener('click',function(){
    searchInput.value = 'fish'
})

searchButton.addEventListener('click', function(){
    let searchInputValue = searchInput.value
    for(let i = 0; i < searchArray.length; i++){
        if(searchArray[i] === searchInputValue){
            switch(searchArray[i]){
                case 'content':
                    sessionStorage.setItem('result', contentBlock)
                    break
                case 'footer':
                    sessionStorage.setItem('result', footerBlock)
                    break
                case 'fish':
                    sessionStorage.setItem('result', fishBlock)
                    break
                case 'title':
                    sessionStorage.setItem('result', titleBlock)
                    break
                case 'video':
                    sessionStorage.setItem('result', videoBlock)
                    break
            }
            window.location.href='./search.html'
            return
        }
    }
    modal.style.display = 'block'
})

document.addEventListener('keydown', function(){
    if(event.key === 'Enter'){
        let searchInputValue = searchInput.value
    for(let i = 0; i < searchArray.length; i++){
        if(searchArray[i] === searchInputValue){
            switch(searchArray[i]){
                case 'content':
                    sessionStorage.setItem('result', contentBlock)
                    break
                case 'footer':
                    sessionStorage.setItem('result', footerBlock)
                    break
                case 'fish':
                    sessionStorage.setItem('result', fishBlock)
                    break
                case 'title':
                    sessionStorage.setItem('result', titleBlock)
                    break
                case 'video':
                    sessionStorage.setItem('result', videoBlock)
                    break
            }
            window.location.href='./search.html'
            return
        }
    }
    modal.style.display = 'block'
    }
})

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