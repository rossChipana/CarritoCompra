let listElementos = document.querySelectorAll('.list__item--click');

listElementos.forEach(listElementos=>{
    listElementos.addEventListener('click',()=>{
        listElementos.classList.toggle('arrow');

        let height =0;
        let menu =listElementos.nextElementSibling;
        if(menu.clienheight=="0"){
            height=menu.scrollheight;
        }
        menu.style.height=`${height}px`;
    })
});