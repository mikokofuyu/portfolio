import React, { ReactElement } from 'react'

const Certifications: React.FC = (): ReactElement => (
  <section className="flex flex-col items-center justify-center pt-16" id="education">
    <h2 className="font-header text-3xl text-khaki-web mb-10">Certifications</h2>
    <div className="flex flex-col items-center max-w-lg space-y-10">
      <div className="flex flex-col items-center">
        <span className="text-morning-blue font-semibold text-xl mb-2">Google Cloud</span>
        <div className="flex flex-col space-y-6 items-center text-khaki-web text-xl text-center">
          <span>Developing Applications with Google Cloud Specialization</span>
          <span>Getting Started With Application Development</span>
          <span>Google Cloud Platform Fundamentals: Core Infrastructure</span>
          <span>Securing and Integrating Components of your Application</span>
          <span>App Deployment, Debugging, and Performance</span>
          <span className="text-morning-blue text-base">August 2021</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-morning-blue font-semibold text-xl mb-2">Red Hat</span>
        <div className="flex flex-col space-y-6 items-center text-khaki-web text-xl text-center">
          <span>Introduction to Containers, Kubernetes, and Red Hat OpenShift</span>
          <span className="text-morning-blue text-base">November 2019</span>
        </div>
      </div>
    </div>
  </section>
)

export default Certifications
