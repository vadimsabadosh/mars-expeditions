import { createGlobalStyle } from 'styled-components';
import imgBg from '../../image/main.jpg';

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
}
*,
*::before,
*::after{
  box-sizing:inherit;
}
body{
    font-family: 'Arial';
    font-weight: 500;
    font-size: 16px;
    color: white;
    background: #040427 url(${imgBg}) no-repeat top center / contain;
    min-height: 100vh;
    position: relative;
    display: block;
    padding-bottom: 100px;
}
a{
  text-decoration:none;
  color:inherit;

}
ul{
  list-style:none;
  margin:0;
  padding:0;
}
h1,h2,h3{
  margin:0;
  padding:0;
  font-family: 'Arial', sans-serif;
}
p{
  margin:0;
  padding:0;
}
img{
  max-width: 100%;
  height:auto;
}
button{
  cursor:pointer;
  outline:none;
}
input, button{
  font-family: inherit;
}
input[type="number"] {
  -moz-appearance:textfieled;
  -webkit-appearance:textfieled;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance:none;

}
`;