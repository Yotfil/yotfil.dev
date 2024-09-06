import { ReactNode } from 'react'
import style from './layout.module.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className={style.bg}>
    <div className={style.layout}>{children}</div>
    // </div>
  )
}

export default Layout
