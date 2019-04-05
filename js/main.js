const menu = document.querySelector('.menu');
let topOfmenu = menu.offsetTop;
const navigation = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');
const navigationList = [...document.querySelectorAll('ul li')];

const stickNav = ()=>{
    if(window.scrollY >= topOfmenu){
        document.body.style.paddingTop = menu.offsetHeight + 'px';
        menu.classList.add('fixed-nav');
        menu.style.height = '';
    }
    else{
        menu.classList.remove('fixed-nav');
        document.body.style.paddingTop =0;
        menu.style.height= '70px';
    }
}

window.addEventListener('scroll', stickNav);
const displayNav = ()=>{
    menuIcon.classList.toggle('change');
   if(navigation.style.display === '' || navigation.style.display === 'none'){
         navigation.style.display = 'flex';
    }else{
       navigation.style.display='';  
   }
}

navigationList.forEach(list=>{
    list.addEventListener('click',displayNav);
})
menuIcon.addEventListener('click', displayNav);



