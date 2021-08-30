import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import { scrollToElement } from '../utils'

const Home: React.FC = (): ReactElement => {
  const history = useHistory()

  useEffect(() => {
    if (history.location.hash.includes('#')) {
      scrollToElement(history.location.hash.split('#')[1])
    }
  }, [history.location.hash])

  return (
    <div className="w-screen min-h-screen bg-dark-purple ">
      <Nav />
      <main className="flex flex-col justify-center w-full mt-11 h-auto px-4 pb-8 ">
        <section className="pt-16" id="home">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center">
            Joseph Lawson
          </h1>
        </section>
        <section className="flex justify-center h-screen pt-16" id="projects">
          <h2 className="font-header text-3xl text-khaki-web">Projects</h2>
        </section>
        <section className="flex justify-center h-screen pt-16" id="about">
          <h2 className="font-header text-3xl text-khaki-web">About</h2>
        </section>
        <section className="flex justify-center">
          <button onClick={() => scrollToElement('home')}>UP</button>
        </section>
      </main>
    </div>
  )
}

export default Home
