const hamburger_icon = document.querySelector('#hamburger_icon')
const nav_bottom = document.querySelector('#nav_bottom')
const h6 = document.querySelector('h6')
const nav_top = document.querySelector('#nav_top')
const a = document.querySelector('#nav_top a')
const hr = document.querySelector('#content_nav hr')
const content_nav = document.querySelector('#content_nav')
const website_content = document.querySelector('#website_content')
const x = window.matchMedia('(max-width:600px')

document.querySelector('#hamburger_icon').classList.add('hamburgerOpen')
var isOpen=true
console.log('start')

if(x.matches){
    hamburger_icon.style.display='none'

    website_content.style.gridTemplateColumns='none'
    website_content.style.gridTemplateRows='470px 1fr'


    console.log('removed the hamburger button')
}

function mediaQuery(x){
    if(x.matches){
        hamburger_icon.style.display='none'
        
        website_content.style.gridTemplateColumns='none'
        website_content.style.gridTemplateRows='470px 1fr'
        content_nav.style.height='470px'

        document.querySelector('#hamburger_icon').classList.add('hamburgerOpen')
        nav_bottom.style.display='block'
        nav_top.style.height='119px'
        h6.style.display='inline-block'
        a.style.display='block'
        hr.style.display='block'
        hamburger_icon.style.right='-30px'
        hamburger_icon.style.margin='none'
        content_nav.style.width='100%'  
        console.log('Opened the nav bar')
        console.log('removed the hamburger button')
        return isOpen=true
    }else{
        hamburger_icon.style.display='inline-block'

        website_content.style.gridTemplateColumns='200px 1fr'
        website_content.style.gridTemplateRows='none'
        content_nav.style.height='412px'

        console.log('added the hamburger button')
    }
}
x.addListener(mediaQuery)



function toggleSidebar(){
    if(isOpen==true){
        document.querySelector('#hamburger_icon').classList.remove('hamburgerOpen')
        nav_bottom.style.display='none'
        nav_top.style.height='35px'
        h6.style.display='none'
        a.style.display='none'
        hr.style.display='none'
        hamburger_icon.style.right='0'
        hamburger_icon.style.margin='auto'
        content_nav.style.width='65px'
        content_nav.style.height='65px'
        website_content.style.gridTemplateColumns='65px 1fr'
        console.log('Closed the nav bar')
        return isOpen=false
    }else{
        document.querySelector('#hamburger_icon').classList.add('hamburgerOpen')
        nav_bottom.style.display='block'
        nav_top.style.height='119px'
        h6.style.display='inline-block'
        a.style.display='block'
        hr.style.display='block'
        hamburger_icon.style.right='-30px'
        hamburger_icon.style.margin='none'
        content_nav.style.width='100%'
        content_nav.style.height='412px'
        website_content.style.gridTemplateColumns='200px 1fr'
        console.log('Opened the nav bar')
        return isOpen=true
    }
}
