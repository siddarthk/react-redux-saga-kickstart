import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: any;
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-items: flex-start;
  padding-right: 10px;
  padding-top: 10px;
  min-height: 75vh;
`;

const PageMenu = (props: Props) => {
  const { children } = props;
  return (
    <Wrapper className='container'>
      {children}
    </Wrapper>
  )
}

export default PageMenu
