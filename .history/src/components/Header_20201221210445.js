import React from 'react'
import Tab from ''

export default function Header() {
  return (
    <div className='tabs'>
           <Tab> 
            <NavLink to='/'activeClass="is-active" exact={true}>Home</NavLink>
            </Tab>
            <Tab> 
            <NavLink to='/about'activeClass="is-active">About</NavLink>
            </Tab>
            <Tab> 
            <NavLink to='/contact'activeClass="is-active">Contact</NavLink>
            </Tab>
    </div>
  )
}
