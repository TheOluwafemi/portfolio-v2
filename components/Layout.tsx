import React, { ReactNode, FC } from 'react'
import NavigationBar from './layout/NavigationBar'
import Footer from './layout/Footer'
import { ChildrenProp } from '../types'

const Layout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
