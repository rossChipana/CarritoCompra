const btn=document.querySelectorAll('.btn-menu');


btnmenu.ddEventListener('click',()=>{
    document.querySelector('.ds-left-menu').classList.toggle('menu active');
    document.querySelector('.ds-panel').classList.toggle('tab-menu');
})



