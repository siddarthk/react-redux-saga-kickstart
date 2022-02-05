import React from 'react'
import { useToggle } from '../../common/hooks'

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
  const [showHeader, toggle] = useToggle(true);
  return (
    <div className='header text-center' style={{display: showHeader ? 'block' : 'none'}}>
     
    </div>
  )
}

export default Header;