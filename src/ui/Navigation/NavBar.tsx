import React from 'react'

interface Props {

}

const NavBar = (props: Props) => {
  return (
    <nav className='navbar'>
       <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
       </div>
    </nav>
  )
}

export default NavBar