import {footerFunction } from './componentes/footer.js';

function footerRender(){
    let $body = document.querySelector('body');
    $body.insertAdjacentElement('beforeend', footerFunction());
}

window.addEventListener('DOMContentLoaded', () =>{
    footerRender();
});