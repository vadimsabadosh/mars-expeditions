import React, { useState } from 'react';
import styled from 'styled-components';
import './style.css';
import {Container} from '../Style/Container';

const MainBlock = styled.div`
    margin-top:50px;
    margin-bottom: 50px;
`;

const FiltersWrap = styled.div`
    width: 100%;
    background-color: #1c1c1c;
    padding: 50px 100px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 639px){
        flex-wrap: wrap;
        padding: 40px 30px;
        justify-content: space-between;
    }

`;

const Main = ({handleForm, changeRover, changeCamera, changeSol}) => {

    return(
        <main>
            <Container>
                <MainBlock>
                    <form onSubmit={handleForm}>
                        <FiltersWrap>

                            <div className='rover-select'>
                                <select className="filter" id="rover" onChange={changeRover}>
                                    <option value="curiosity">Curiosity</option>
                                    <option value="opportunity">Opportunity</option>
                                    <option value="spirit">Spirit</option>
                                </select>
                            </div>
                            <div className='camera-select'>
                                <select className="filter" id="camera" onChange={changeCamera}>
                                    <option value="FHAZ">Front Hazard Avoidance Camera</option>
                                    <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                                    <option value="MAST">Mast Camera</option>
                                    <option value="CHEMCAM">Chemistry and Camera Complex</option>
                                    <option value="MAHLI">Mars Hand Lens Imager</option>
                                    <option value="MARDI">Mars Descent Imager</option>
                                    <option value="NAVCAM">Navigation Camera</option>
                                    <option value="PANCAM">Panoramic Camera</option>
                                    <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                                </select>
                            </div>
                            <div className='sol-select'>
                                <input className="filter input" type="number" min="0" max="1000" id="sol" placeholder="Sol (Mars day)" onChange={changeSol}/>
                            </div>
                            <button className="btn-submit">Submit</button>
                        </FiltersWrap>
                    </form>
                </MainBlock>
            </Container>
        </main>
    )
}

export default Main;