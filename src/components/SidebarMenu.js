import React from 'react'
import '../_styles/SideBarMenu.css'
import {Link} from 'react-router-dom';

const SidebarMenu = ({groups, expanded, collapsed}) => (
  <div className='SidebarMenu'>
    <Link to='/'>
        Home
    </Link> 
    <br/>
    <Link to='/hello'>
        Hello Router!
    </Link>
  </div>
)

export default SidebarMenu