import React, { ReactElement } from 'react'

const Education: React.FC = (): ReactElement => (
  <section className="flex flex-col items-center justify-center pt-16" id="education">
    <h2 className="font-header text-3xl text-khaki-web mb-10">Education</h2>
    <div className="flex flex-col items-center max-w-lg space-y-10">
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center">
          <span>BSc (Hons) Computer Science</span>
          <span className="hidden sm:block">—</span>
          <span>First Class</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-khaki-web text-xl sm:space-x-4 text-center">
          <span>Keele University</span>
          <span>2016 – 2019</span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center">
          <span>BTEC Level 3 Extended Diploma IT</span>
          <span className="hidden sm:block">—</span>
          <span>D*DD</span>
        </div>
        <div className="flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center">
          <span>Cheshire College South & West</span>
          <span>2014 – 2016</span>
        </div>
      </div>
    </div>
  </section>
)

export default Education
