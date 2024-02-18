let searchInput = document.querySelector('.head__inp')
let searchButton = document.querySelector('.head__lupe')

let contentBlock = document.getElementById('content').outerHTML
let footerBlock = document.getElementById('footer').outerHTML
let titleBlock = document.getElementById('title').outerHTML
let videoBlock = document.getElementById('video').outerHTML
let fishBlock = document.getElementById('fish').outerHTML


let content = 'content'
let footer = 'footer'
let title = 'title'
let video = 'video'
let fish = 'fish'

let modal = document.querySelector('.head__alert')

let searchArray = [content,footer,title,video,fish]

searchButton.addEventListener('click', function(){
    let searchInputValue = searchInput.value
    for(let word of searchArray){
        if(word === searchInputValue){
            switch(searchInputValue){
                case 'content':
                    sessionStorage.setItem('result', contentBlock)
                    break
                case 'content':
                    sessionStorage.setItem('result', footerBlock)
                    break
            }
            window.location.href='./search.html'
            return
        }
    }
    modal.style.display = 'block'
    /* modal.style.transform = 'transform: translateX(0)' */
})