import React from 'react'
import style from './contact.module.css'

const Contact = () => {
  return (
    <div className={style.container}>
      <a
        href='mailto:jefryeguevarav@gmail.com'
        className={style.button}>
        Say me, hi!
        <img
          src='/icons/email.svg'
          alt='email icon'
        />
      </a>
      <a
        href='/docs/CV_Jefry_Guevara.pdf'
        download
        className={style.button}>
        Check my cv
        <img
          src='/icons/download.svg'
          alt='email icon'
        />
      </a>
    </div>
  )
}

export default Contact
