'use client'
import Home from '@/components/sections/home/home'
import Header from '@/components/shared/header/header'
import { Lato } from 'next/font/google'
import { useRef, useEffect, useState } from 'react'

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] })

const HomePage = () => {
  const homeRef = useRef(null)
  const technologiesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const [currentView, setCurrentView] = useState<string>()

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setCurrentView(entry.target.id)
        }
      })
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    const observer = new IntersectionObserver(callback, options)

    const sections = [homeRef.current, technologiesRef.current, projectsRef.current, contactRef.current]
    sections.forEach(section => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  return (
    <>
      <main className={lato.className}>
        <Header currentView={currentView as string}></Header>
        <section
          id='home'
          ref={homeRef}>
          <Home></Home>
        </section>

        {/* <section
          id='technologies'
          ref={technologiesRef}>
          <h2>Technologies</h2>
        </section>

        <section
          id='projects'
          ref={projectsRef}>
          <h2>Projects</h2>
        </section>

        <section
          id='contact'
          ref={contactRef}>
          <h2>Contact</h2>
        </section> */}
      </main>
    </>
  )
}

export default HomePage
