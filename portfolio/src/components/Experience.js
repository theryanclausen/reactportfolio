import React from 'react'
import styled from 'styled-components'

const ExperienceWrapper = styled.div`
    background: #006F3A;
    width: 100%;
    min-height: 105vh;
    .container {
    width: 85%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 84px;
      margin: 25px auto;
    }
    }
`
export default () => {
  return (
    <ExperienceWrapper id='experience'>
      <div className='container'>

      </div>
    </ExperienceWrapper>
  )
}
