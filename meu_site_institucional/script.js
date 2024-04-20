console.log('olá mundo');
const html = document.querySelector('html')
const menu_mobile = document.getElementById('menu_mobile')
menu_mobile.style.display = 'none';    



function abrirMenuMobile(){    
    if (menu_mobile.style.display == 'none') {
    console.log('Botão apertado! Display none.')
    menu_mobile.style.display = 'flex';
    } else {
    console.log('Botão apertado com sucesso! Display flex.')
    menu_mobile.style.display = 'none';    
    }
}