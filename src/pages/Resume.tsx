import React, { ReactElement } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Certifications from './Resume/Sections/Certifications'
import Education from './Resume/Sections/Education'
import Employment from './Resume/Sections/Employment'
import Skills from './Resume/Sections/Skills'

const Resume: React.FC = (): ReactElement => {
  return (
    <div className="w-screen min-h-screen bg-dark-purple ">
      <Nav activeMenuItem="resume" />
      <main className="flex flex-col justify-center w-full mt-11 h-auto px-4 pb-8 ">
        <section className="pt-16" id="home">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center">
            Joseph Lawson
          </h1>
        </section>
        <Skills />
        <Employment />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default Resume
