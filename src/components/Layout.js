import React from 'react'

const Layout = ({children,className=''}) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32 ${className} dark:bg-dark`}>
        {children}
    </div>
  )
}

export default Layout