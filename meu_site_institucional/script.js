const html = document.querySelector('html')
const focoBt = document.querySelector('.btn')
const curtoBt = document.querySelector('.btn')
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', () =>
    html.setAttribute('data-contexto', 'foco')
)

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/imagens/foco.png')
})

// aula 02 atividade 04 criando funções

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})


function alterarContexto() {
    html.setAttribute('data-contexto', contexto)
}

function alterarContexto() {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}

// 02 05 alterando texto da página

<h1 class="app__title">
    Otimize sua produtividade,<br>
    <strong class="app__title-strong">mergulhe no que importa.</strong>
</h1>


const titulo = document.querySelector('.app__title')
