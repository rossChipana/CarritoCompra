const tabs = document.querySelectorAll('[data-form]');
const forms = document.querySelectorAll('[data-form-id]');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        //  
        tabs.forEach((tabs) => tabs.classList.remove('active'));
        //agragamos la clase activ al tab que se le hizo click
        tabs[i].classList.add('active');
        //
        forms.forEach((form) => form.classList.remove('active'));
        forms[i].classList.add('active');
    })
}