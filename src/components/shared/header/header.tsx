'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Menu from '../menu/menu'
import style from './header.module.css'

type HeaderProps = {
  currentView: string
}

const Header = ({ currentView }: HeaderProps) => {
  const [isHome, setIsHome] = useState<string>('')

  useEffect(() => {
    setIsHome(currentView)
  }, [currentView])

  return (
    <header className={style.header}>
      <a
        href='#home'
        className={style.linkLogo}
        onClick={() => setIsHome('home')}>
        <Image
          src='/imgs/logo.svg'
          alt='Logo Yotfil'
          className={style.logo}
          width={100}
          height={100}
          priority
        />
      </a>

      <Menu isHome={isHome}></Menu>
    </header>
  )
}

export default Header
