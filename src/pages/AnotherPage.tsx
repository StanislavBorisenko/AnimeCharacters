import React from 'react'
import styled from 'styled-components'

const TestDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh
`

const AnotherPage = () => {
  return (
    <TestDiv>Здесь пока пусто</TestDiv>
  )
}

export default AnotherPage