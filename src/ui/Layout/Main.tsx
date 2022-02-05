import React from 'react'
import styled, { css } from 'styled-components'
import { BreadCrumbs, Header, Footer, NavBar } from '../../ui'
import { VMenu } from '../Navigation'

interface Props {
  children: any
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  justify-items: flex-start;
  padding-right: 10px;
  padding-top: 10px;
`;

const items = [
  {label: 'Home', path: '/'},
  {label: 'Products', path: '/product'},
  {label: 'Blog', path: '/blog'},
  {label: 'Profile', path: '/profile'}
]

const Main = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <NavBar />
      <BreadCrumbs />
      <Wrapper className='container'>
        <VMenu items={items} />
        {children}
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Main

