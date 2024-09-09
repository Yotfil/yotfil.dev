'use client'
import { useEffect, useState } from 'react'
import style from './menu.module.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

type MenuProps = {
  isHome: string
}

const Menu = ({ isHome }: MenuProps) => {

  return (
    <nav className={style.nav}>
      <ul>
        {navItems.map(navItem => (
          <li key={navItem.id}>
            <a
              href={`#${navItem.id}`}
              className={isHome === navItem.id ? style.active : ''}>
              <span className={style.point}></span>
              <span className={style.label}>{navItem.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
