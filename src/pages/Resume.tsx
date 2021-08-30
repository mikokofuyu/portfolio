import React, { ReactElement } from 'react'
import Nav from '../components/Nav'
import { scrollToElement } from '../utils'
import { JavaScriptIcon, NextIcon, ReactIcon, TypeScriptIcon } from '../utils/icons'

const Resume: React.FC = (): ReactElement => {
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
          <h2 className="font-header text-3xl text-khaki-web">Skills</h2>
          <div className="flex">
            <img src={JavaScriptIcon} height={32} width={32} />
            <img src={TypeScriptIcon} height={32} width={32} />
            <img src={ReactIcon} height={32} width={32} />
            <img src={NextIcon} height={32} width={32} />
          </div>
        </section>
        <section className="flex justify-center h-screen pt-16" id="projects">
          <h2 className="font-header text-3xl text-khaki-web">Employment</h2>
        </section>
        <section className="flex justify-center h-screen pt-16" id="projects">
          <h2 className="font-header text-3xl text-khaki-web">Education</h2>
        </section>
        <section className="flex justify-center h-screen pt-16" id="projects">
          <h2 className="font-header text-3xl text-khaki-web">Certificates</h2>
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

export default Resume
