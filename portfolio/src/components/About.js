import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
    background: #B9F6D9;
    width: 100%;
    min-height: 105vh;
    img{
      width:300px;
      border-radius:50%;
    }
`
export default () => {
  return (
    <AboutWrapper id='about'>
    <img src={require('../assets/ryan-img.jpg')} alt='headshot' />
      
    </AboutWrapper>
  )
}
