import React from "react";
import HeaderCSS from './Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={HeaderCSS.title}>Clients</h1>
    </div>
  )
}

export default Header;