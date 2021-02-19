import React from 'react';
import styled from 'styled-components';
import {Container} from '../Style/Container';
import Card from '../Card/Card';
import Empty from '../Empty/Empty';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { animateScroll } from "react-scroll";


const CardsWrap = styled.div`
    
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #1c1c1c;
    border-radius: 10px;
    width: 100%;
    min-height: 30rem;

`;


const Section = ({images, submitted, loading, plusPage}) => {

    const scrollTo = () => {
        animateScroll.scrollTo(350, {
            duration: 500,
            delay: 0,
            smooth: true,
            containerId: 'ContainerElementID',
        });
    }
    return(
        <section name='top'>
            <Container >
                <CardsWrap>
                    { loading ? <Loader /> : <>{images.length ? images.map(item => <Card key={item.id} item={item}/>) : <Empty submitted={submitted}/>} </>}
                    {images.length === 25 ? <Pagination plusPage={plusPage} scrollTo={scrollTo}/> : null}
                </CardsWrap>
            </Container>
        </section>
    )
}

export default Section;