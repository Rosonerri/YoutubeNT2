import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Header';
const Layout2 = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout2;
