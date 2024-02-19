const navALL = {
    navCorpo: document.querySelector('nav'),
    navBtnMobile: document.querySelector('.menu__mobile'),
    navList: document.querySelector('.nav__list'),
    navItens: document.querySelectorAll('.nav__item')
}

console.log(navALL)

navALL.navBtnMobile.addEventListener('click', () =>{
    navALL.navCorpo.classList.toggle('nav__mobile__active')
})

navALL.navItens.forEach( (navItem) =>{
    navItem.addEventListener('click', () =>{
        navALL.navCorpo.classList.toggle('nav__mobile__active')
    })
})