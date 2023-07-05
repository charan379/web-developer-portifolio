import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <>
      <NavBar />

      <Intro />

      <About />

      <Projects />

      <Skills />

      <Contact />
      
      <Footer />

      <ThemeToggle />
    </>
  )
}
