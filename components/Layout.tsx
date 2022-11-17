import React, { ReactNode, FC } from 'react'
import NavigationBar from './layout/navigation-bar/NavigationBar'
import Footer from './layout/footer/Footer'
import { ChildrenProp } from '../types'

const Layout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="wrapper">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
