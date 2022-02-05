import React from 'react'
import { PageMenu } from '../../Layout';
import { VMenu } from '../../Navigation';

interface Props {
  
}

const links = [
  {label: 'List', description: 'List of products avaialble', path: '/product' },
  {label: 'Media', description: 'List of products media', path: '/product/media' }
];

const Product = (props: Props) => {
  const { } = props;
  
  return (
    <PageMenu>
      <div>Product</div>
      <VMenu items={links} mode={'multi'} />
    </PageMenu>
  )
}

export default Product
