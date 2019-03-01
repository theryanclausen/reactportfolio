import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
      width:85%;
      margin: 25px auto;
  }
  p{
    line-height: 1.5;
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
