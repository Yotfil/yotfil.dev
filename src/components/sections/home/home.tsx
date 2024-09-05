import style from './home.module.css'
import Layout from '@/components/view/layout/layout'

const Home = () => {
  return (
    <Layout>
      <h2 className={style.name}>Hello! Yotfil here</h2>
      <h1 className={style.title}>Software Developer</h1>
      <p className={style.description}>
        They also call me Jef, but you can call me <a href='mailto:jefryeguevarav@gmail.com'>here :) (or write me).</a>
      </p>
      <p className={style.description}>
        Software developer with +5 years of experience. Expert working with <span>Angular, </span> <span>React, </span>
        <span>Nodejs, </span>
        <span>ExpressJs, </span>
        <span>Nest, </span> and the basics,<b> HTML, CSS and Vanilla Javascript </b>{' '}
      </p>
    </Layout>
  )
}

export default Home
