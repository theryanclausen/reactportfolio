import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin: 30px auto;
  font-size: 48px;
  padding: ${props => `0 68px ${props.bottom}`};
  border-radius: 15px;
  background: radial-gradient(circle farthest-side, #330a2d5c, #a1c6d600);
  border: 3px solid #330a2d33;
  transition: all 500ms;
  color: #a1c6d6;
  :hover {
    border: 3px solid #330a2d;
  }
  .arrow {
    max-height: 24px;
    max-width: 24px;
    stroke: lightblue;
    stroke-width: 2px;
    transition: all 500ms;
    transform: scale(2.5);
    fill: none;
    .path{
      margin: 0 auto;
    }
    :hover {
      stroke: white;
    }
  }
`;

export default props => {
  return (
    <StyledLink bottom={props.end  ? '10px' : '15px'} to={props.destination} smooth={true} duration={1000}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className='arrow'
      >
        {props.end ? (
          <>
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline className="path" points="5 12 12 5 19 12" />
          </>
        ) : (
          <>
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </>
        )}
      </svg>
    </StyledLink>
  );
};
