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
import BackToTopBtn from '@/components/Buttons/BackToTopBtn'

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, { method: 'GET' });

  const data = await response.json();

  console.log(data);

  return (
    <>
      <NavBar />

      <Intro />

      <About />

      <Projects />

      <Skills />

      <Contact />

      <BackToTopBtn />

      <Footer />

      <ThemeToggle />
    </>
  )
}
