import React from 'react';
import styled from 'styled-components';
const DivWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    
    background-color: #ffad1a;
    color: #1c1c1c;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    
`;

const Pagination = ({plusPage, scrollTo}) => {

    
    return(
        <DivWrapper>
            <Button onClick={() => {
                plusPage();
                scrollTo();
            }}>Load more</Button>
        </DivWrapper>
    )
}

export default Pagination;