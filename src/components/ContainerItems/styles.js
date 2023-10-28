import styled from 'styled-components'

export const ContainerItems = styled.div`
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%,
    rgba(255, 255, 255, 0.60) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    height: 100vh;


    ${props => props.isBlur && `
    backdrop-filter: blur(22.5px);
    min-height: calc(100vh - 11rem);
    ` }
`