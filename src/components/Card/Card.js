import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 20%;
    padding: 5px;
    overflow: hidden;
    margin-bottom: 30px;
    @media screen and (max-width: 639px){
        width: 100%;
    }

`;
const CardName = styled.span`
    color: #ffad1a;

`;
const CardImg = styled.img`
    border-radius: 5px;
    height: 285px;
    object-fit: cover;
    width: 100%;
    cursor: pointer;
`;
const CardText = styled.span`
    color: rgb(150, 150, 150);

`;
const Text = styled.p`
    font-size: 14px;
    margin-bottom: 8px;
`;


const Card = ({item}) => {
    return(
        <CardDiv>
            <CardImg src={item.img_src} alt={item.rover.name}/>
            <h4>Rover: <CardName>{item.rover.name}</CardName></h4>
            <Text>Earth date: <CardText>{item.earth_date}</CardText></Text>
            <Text>Sol: <CardText>{item.sol}</CardText></Text>

        </CardDiv>
    )
}

export default Card;