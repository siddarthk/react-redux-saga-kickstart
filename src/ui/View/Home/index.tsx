import React from 'react'
import { PageMenu } from '../../Layout';
import { VMenu } from '../../Navigation';

interface Props {
  
}

const Home = (props: Props) => {
  const { } = props;
  
  return (
    <PageMenu>
      <div>Home</div>
      <VMenu items={[]} />
    </PageMenu>
  )
}

export default Home
