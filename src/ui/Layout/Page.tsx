import React from 'react'

interface Props {
  children: any;
}

const Page = (props: Props) => {
  const { children } = props;
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Page
