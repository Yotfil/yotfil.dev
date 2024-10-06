import React from 'react'
import style from './contact.module.css'

const buttonsContact = [
  {
    href: 'mailto:jefryeguevarav@gmail.com',
    text: 'Say me, hi!',
    img: '/icons/email.svg',
    alt: 'email icon',
    download: false,
  },
  {
    href: '/docs/CV_Jefry_Guevara.pdf',
    text: 'Check my cv',
    img: '/icons/download.svg',
    alt: 'download icon',
    download: true,
  },
]

const buttonsSocial = [
  {
    href: 'https://www.linkedin.com/in/jefry-guevara-software-developer/',
    img: '/icons/linkedin.svg',
    alt: 'linkedin icon',
  },
  {
    href: 'https://github.com/Yotfil',
    img: '/icons/github.svg',
    alt: 'github icon',
  },
]

const Contact = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        {buttonsContact.map((button, index) => (
          <a
            target='_blank'
            download={button.download}
            key={index}
            href={button.href}
            className={style.button}>
            {button.text}
            <img
              src={button.img}
              alt={button.alt}
            />
          </a>
        ))}
      </div>
      <div className={style.container}>
        {buttonsSocial.map((button, index) => (
          <a
            target='_blank'
            key={index}
            className={style.iconContainer}
            href={button.href}>
            <img
              className={style.icon}
              src={button.img}
              alt=''
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
