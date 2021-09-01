import React, { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import { scrollToElement } from '../utils'
import { MyFace, P2 } from '../utils/assets'
import Footer from '../components/Footer'

const Home: React.FC = (): ReactElement => {
  const history = useHistory()
  const [activeMenuItem, setActiveMenuItem] = useState('home')

  useEffect(() => {
    if (history.location.hash.includes('#')) {
      const navigationRef = history.location.hash.split('#')[1]
      scrollToElement(navigationRef)
      setActiveMenuItem(navigationRef)
    }
  }, [history.location.hash])

  return (
    <div className="w-screen min-h-screen bg-dark-purple ">
      <Nav activeMenuItem={activeMenuItem} />
      <main className="flex flex-col justify-center w-full mt-11 h-auto px-4 pb-8 ">
        <section className="flex flex-col items-center py-16" id="home" onMouseEnter={() => setActiveMenuItem('home')}>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center">
            Joseph Lawson
          </h1>
          <img className="rounded-full mt-8" src={MyFace} width={180} height={180} alt="Joseph Lawson" />
          <div className="text-khaki-web text-xl font-semibold mt-8 max-w-md flex flex-col space-y-3">
            <span>Welcome to my portfolio!</span>
            <span>I am a full-stack developer with experience creating websites, mobile apps and apis.</span>
            <span>I favour my front-end web development skills most and like to focus on web accessibility.</span>
          </div>
        </section>
        <section
          className="flex flex-col items-center justify-center py-16"
          id="projects"
          onMouseEnter={() => setActiveMenuItem('projects')}
        >
          <div className="border-b-4 border-khaki-web pb-4 w-1/6 flex justify-center max-w-xl ">
            <h2 className="font-header text-3xl text-khaki-web">Projects</h2>
          </div>
          <div className="mt-8 max-w-xl flex justify-center flex-col items-center">
            <h2 className="font-header text-3xl text-khaki-web text-center my-4">Persona 2 - Character Input</h2>
            <img src={P2} alt="Tatsuya from Persona 2" width={256} height={256} className="rounded-full my-8" />
            <p className="text-khaki-web text-xl text-center">
              This project was inspired by my love for Persona 2: Innocent Sin, a game for the PSP. Like many games you
              have the ability to customise your character&apos;s name. I wanted to test my abilities and see how
              closely I could replicate the character name input interface using React and Tailwind. The project was fun
              to complete and gave me a greater understanding of how to improve user experience in my websites with the
              use of keyboard navigation.
            </p>
          </div>
        </section>
        <section
          className="flex flex-col items-center justify-center py-16"
          id="about"
          onMouseEnter={() => setActiveMenuItem('about')}
        >
          <div className="border-b-4 border-khaki-web pb-4 w-1/6 flex justify-center">
            <h2 className="font-header text-3xl text-khaki-web">About</h2>
          </div>
          <div className="mt-8 max-w-xl">
            <p className="text-khaki-web text-xl text-center">
              An adaptable and driven developer, tackling numerous problems within a safety-critical company. Possessing
              strong frontend and backend development skills with a specific focus on the MERN stack, supported by two
              years of professional experience working in an agile environment. Continuously striving to improve and
              extend existing knowledge by following emerging technologies and practises. Experience working closely
              with design to create products with a solid user experience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
