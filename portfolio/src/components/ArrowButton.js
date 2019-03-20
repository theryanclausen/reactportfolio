import React from "react";
import { Link } from "react-scroll";
import styled from 'styled-components';

const StyledLink = styled(Link)`


    .arrow{
        max-height: 24px;
        max-width: 24px;
        fill-opacity: 0;
        stroke: lightblue;
        stroke-width: 2px;
        stroke-linecap: "round";
        stroke-linejoin: "round";
        transition: all 500ms;
    }
`

export default props => {
  return (
    <StyledLink to="splash" smooth={true} duration={1000} className="App-link">
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          
          
          class="feather feather-arrow-down"
        >{props.experience ? (<>
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline className='path' points="5 12 12 5 19 12" /></>
      ) : (<>
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" /></>)}
        </svg>
      
    </StyledLink>
  );
};
