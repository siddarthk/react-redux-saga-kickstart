import React from 'react'

interface Props {
  children: any;
}

const PageWrapper = (props: Props) => {
  const { children } = props;
  return (
    <div className='content'>
      {children}
    </div>
  )
}

export default PageWrapper
