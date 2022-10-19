var menu = document.querySelector('#menu')
var upToHeader = document.querySelector('#upToHeader')


window.addEventListener('scroll',() => {
    let scroll_Y = this.scrollY
    if(scroll_Y >= 80){
        upToHeader.className = 'on'
        menu.className = 'fixed'
    }
    else{
        upToHeader.className = 'off'
        menu.className = 'normal'
    }
})