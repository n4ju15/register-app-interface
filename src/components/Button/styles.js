import styled from 'styled-components'

export const Button = styled.button`
    width: 21rem;
    height: 4.5rem;
    margin-top: 8rem;

    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0)'};
    border-radius: 14px;
    border: ${props => props.isBack ? 'border: 1px solid #FFF;' : 'none'};

    color: #FFF;
    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    img {
        transform: ${ props => props.isBack && 'rotateY(180deg)' };
    }
`