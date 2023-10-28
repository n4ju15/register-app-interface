import styled from 'styled-components'

import Background from '../../assets/background.svg'


export const Container = styled.div`
    background: url('${Background}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    
    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 2rem;
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 21rem;
    height: 3.5rem;

    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1rem;
        color: #FFF;  
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`