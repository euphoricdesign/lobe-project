import logo from '../assets/logo.png'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Button } from './Button'
import { useState } from 'react'

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => setIsActive(!isActive)


  return (
    <>
      <nav className='navbar-expand-lg'>
        <a className='linkLogo' href="" style={{textDecoration: 'none'}}>
          <h1 className='h1Logo'>lobe</h1>
          <img className='logo' src={logo} alt="" />
        </a>
        <HiBars3BottomRight onClick={handleClick} style={{width: "30px", height: "30px"}} />
      </nav>

      <div className={` ${ isActive ? "show-menu" : "nav-links" }`}>
        <ul>
          <hr className='nav-hr' style={{width:'100vw', color: '#767676', margin: '1rem auto' }} />
          <li>Overview</li>
          <li>Examples</li>
          <li>Tour</li>
          <li>Blog</li>
          <li>Help</li>
          <Button width={300} name={'Download'} marginTop={0} marginBottom={60} />
        </ul>
      </div>


    </>
  )
}

