import React, { ReactNode, FC } from 'react'
import { ChildrenProp } from '../types'

const Layout: FC<ChildrenProp> = ({ children }, props) => {
  return (
    <div className="wrapper dark" {...props}>
      {children}
    </div>
  )
}

export default Layout
