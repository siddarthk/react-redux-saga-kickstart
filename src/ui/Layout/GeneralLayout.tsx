import React from 'react';
import { BreadCrumbs, Header, Footer, NavBar } from '../../ui'

interface Props {
  children: any
}


const GeneralLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default GeneralLayout

