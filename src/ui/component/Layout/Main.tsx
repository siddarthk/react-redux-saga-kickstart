import React from 'react'

interface Props {
  children: any
}

const Main = (props: Props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  )
}

export default Main

