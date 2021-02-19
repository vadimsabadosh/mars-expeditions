import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from 'styled-components';

const Wrap = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:50px;
`;
export default class App extends React.Component {
  render() {
    return (

        <Wrap>
            <Loader
                type="Puff"
                color="#FFF"
                height={150}
                width={150}
            />
        </Wrap>
    );
  }
}