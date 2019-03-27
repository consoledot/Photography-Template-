const menu = document.querySelector('.menu');
let topOfmenu = menu.offsetTop;

const stickNav = ()=>{
    if(window.scrollY >= topOfmenu){
        document.body.style.paddingTop = menu.offsetHeight + 'px';
        menu.classList.add('fixed-nav');
    }
    else{
        menu.classList.remove('fixed-nav');
        document.body.style.paddingTop =0;
    }
}

window.addEventListener('scroll', stickNav);

const menuIcon = document.getElementsByClassName('menu-icon')[0];
menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('change');
});