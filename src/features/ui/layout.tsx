import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='layout-wrapper'>
      {children}
    </div>
  )
}

export default Layout