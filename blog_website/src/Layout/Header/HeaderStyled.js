import styled from 'styled-components'
import { Navbar ,Nav} from 'react-bootstrap'

export const StyledToggle = styled(Navbar.Toggle)`
    background:none !important;
    outline:none !important;
    display: "";
    padding:10px;
    color: white;
    border:none;
    font-size: xxx-large;

    .navbar-toggler-icon{
        display: none !important;
  
    }
    
`

export const StyledNav = styled(Navbar)`
   background-color: #32324e;
   
    
`


export const SNav = styled(Nav.Link)`
   color: white !important;
   font-size:20px;
   font-family: 'Knewave', cursive;
   padding-left:5px !important;
   padding-right:30px !important;
`
export const Brand =styled(Navbar.Brand)`
    font-family:"OleoBold";
    font-size:35px;
    color: white !important;


`
