'use client'
import { useEffect, useState } from 'react'
import style from './menu.module.css'

const navItems = [
  { id: 'home', label: 'Home', disabled: false },
  { id: '', label: 'Technologies', disabled: true },
  { id: '', label: 'Projects', disabled: true },
  { id: '', label: 'Contact', disabled: true },
]
// const navItems = [
//   { id: 'home', label: 'Home', disabled: false },
//   { id: 'technologies', label: 'Technologies', disabled: true },
//   { id: 'projects', label: 'Projects', disabled: true },
//   { id: 'contact', label: 'Contact', disabled: true },
// ]

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
              className={`${isHome === navItem.id ? style.active : ''} ${navItem.disabled ? style.disabled : ''}`}>
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
