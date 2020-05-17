import styled from 'styled-components'
// import { Wanderer } from "../Assets/Wanderer.jpeg"




export const Image = styled.img`  
    height:auto;
    width:100% ;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px));

`
export const Background = styled.div`

     padding-top: 1em;
     background-color:#32324e !important ;




`
export const H1 = styled.h1`
    font-size: calc(6.6vh + 1rem);    

`