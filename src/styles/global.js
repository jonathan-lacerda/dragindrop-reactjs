import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box; //para que paddin e o margin n extrapolem a altura e largura do elemento
    }

    html, body, #root {
        height: 100% //assim ele ocupa no maximo e totalmente 100% de altura da tela, evitando scrollbar, etc
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important; // deixa a fonte um pouco mais detalhada 
    }

    ul {
        list-style: none //tira as bolinhas das listas;
    }

`;