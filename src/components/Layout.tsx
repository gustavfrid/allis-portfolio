import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      {children}
    </>
  )
}
