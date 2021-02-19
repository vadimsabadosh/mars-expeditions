import React from 'react';
import styled from 'styled-components';

const EmptyText = styled.h1`
    text-align: center;
    width: 100%;
    padding-top: 150px;
`;


const Empty = ({submitted}) => {
    return(
        <>
        {submitted ? <EmptyText>There are no photos. Please change the settings</EmptyText> :<EmptyText>Here will be the all photo were done by the Rover</EmptyText>}
        </>
    )
}

export default Empty;