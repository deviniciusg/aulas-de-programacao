const html = document.querySelector('html')
const menu = document.querySelector('menu')

menu.addEventListener('click', () =>
    html.setAttribute('data-contexto', 'foco')
)