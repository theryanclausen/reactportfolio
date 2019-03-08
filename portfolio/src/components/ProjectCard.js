import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin:  25px;
  img{
      width:auto;
      height: 350px;
      margin: 25px auto;
      border-radius: 15px;
      border: 1px solid white;
  }
  p{
    line-height: 1.5;
    font-size: 22px;
  }
  a{
    color:white;
    text-decoration: none;
    font-size: 32px;
    margin: 25px 0;
    text-align: center;
    &:hover{
      color:red;
    }
  }
`;

export default ({ srcPath, title, blurb, url }) => {
  return (
    <CardWrapper>
      <img src={require(`../assets/${srcPath}`)} alt={title} />
      <a href={url}>{title}</a>
      <p>{blurb}</p>
    </CardWrapper>
  );
};
