import React from 'react'
import { SearchBox } from 'office-ui-fabric-react/lib-commonjs/SearchBox'
import './NavBar.css'

const NavBar = ( { onChange, onSearch } ) => (
  <div className="NavBar">
    <div className="logo ms-font-xl">
      <strong>React with Firebase and Fabric UI</strong>
    </div>
    <div className="searchbox">
      <SearchBox placeholder="Search"
      />
    </div>
  </div>
)


export default NavBar