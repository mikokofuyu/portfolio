import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import { scrollToElement } from '../utils'
import MyFace from '../assets/me.webp'
import { ArrowUp } from 'phosphor-react'

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
        <section className="flex flex-col items-center pt-16" id="home">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center">
            Joseph Lawson
          </h1>
          <img className="rounded-full mt-8" src={MyFace} width={180} height={180} />
          <div className="text-khaki-web text-xl font-semibold mt-8 max-w-md flex flex-col space-y-3">
            <span> Welcome to my portfolio!</span>
            <span>I am a full-stack developer with experience creating websites, mobile apps and apis.</span>
            <span>I favour my front-end web development skills most and like to focus on web accessibility.</span>
          </div>
        </section>
        <section className="flex justify-center pt-16" id="projects">
          <div className="border-b-4 border-khaki-web pb-4 w-1/6 flex justify-center">
            <h2 className="font-header text-3xl text-khaki-web">Projects</h2>
          </div>
        </section>
        <section className="flex justify-center h-screen pt-16" id="about">
          <h2 className="font-header text-3xl text-khaki-web">About</h2>
        </section>
        <section className="flex justify-center">
          <button
            className="flex items-center justify-center h-12 w-12 rounded-full bg-khaki-web"
            name="back to top"
            onClick={() => scrollToElement('home')}
          >
            <ArrowUp size={36} weight="bold" />
          </button>
        </section>
      </main>
    </div>
  )
}

export default Home
