import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex-grow: 0; //determina habilidade de um componente esticar mais do que o necessário
    flex-shrink: 0; //determina possibilidade de um componente encolher, gera uma barra de rolagem quando necessário
    flex-basis: 320px; //determina o tamanho base do elemento, no caso vai ser 320px para width
    opacity: ${ props => props.done ? 0.6 : 1};

    //para estilizar toda div, que antes dela tenha outra div
    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05)
    }

    header {
        display: flex;
        justify-content: space-between; //como tem 2 itens, cada um ficará em um canto
        align-items: center;
        height: 42px;

        h2{
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 42px;
            height: 42px;
            border-radius: 16px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }

        button:hover{
            background: #4B0082;
        }
    }

    ul {
        margin-top: 30px;
    }
`;