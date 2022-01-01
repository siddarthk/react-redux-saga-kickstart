import React from 'react';
import { BreadCrumbs, Header, Footer, NavBar } from '../../ui'

interface Props {
  children: any
}


const Main = (props: Props) => {
  const { children } = props;
  return (
    <div className='app-container'>
      <Header />
      <NavBar />
      <BreadCrumbs />
      {children}
      <Footer />
    </div>
  )
}

export default Main

