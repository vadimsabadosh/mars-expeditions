import React from 'react';
import styled from 'styled-components';
import {Container} from '../Style/Container'

const MainTitle = styled.h1`
    margin-top: 100px;
    text-align: center;
    color: aliceblue;
    font-size: 2rem;
    margin-bottom: 50px;
    @media screen and (max-width: 639px){
            font-size: 1.3rem;
        }
`;

const Subtitle = styled.h3`
    text-align: center;
    color: aliceblue;
    font-size: 1rem;
`;

const Header = () => {
    return(
        <header>
            <Container >
                <MainTitle>This is the one-page site was developed to helps people to explore NASA's expeditions to Mars</MainTitle>
                <Subtitle>There you can select a Rover, Camera and Sol(Mars day). Then i'll show the images were done by the Rover</Subtitle>
            </Container>
        </header>
    )
}

export default Header;