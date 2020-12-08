import styled from 'styled-components'

export const Container = styled.div`
    display: flex ;//coloca em coluna
    padding: 30px 0;
    height: calc(100% - 80px); //para que o componente ocupe 100% da tela, pegando 100% da tela - 80px do header
`;