import React, { ReactElement } from 'react'

const Employment: React.FC = (): ReactElement => (
  <section className="flex flex-col items-center justify-center pt-16" id="education">
    <h2 className="font-header text-3xl text-khaki-web mb-10">Employment</h2>
    <div className="flex flex-col items-center max-w-lg space-y-10">
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center">
          <span>FASTIC</span>
          <span className="hidden sm:block">—</span>
          <span>Remote</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-khaki-web text-xl sm:space-x-4 text-center">
          <span>Full-Stack Software Engineer</span>
          <span>Jun 2021 - Present</span>
        </div>
        <div className="h-8" />
        <ul className="list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0">
          <li>
            <span className=" text-khaki-web">
              Lead developer of Fastic’s web funnel (React / NextJS / Tailwind web app)
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Implemented SEO, Accessibility and performance best practices to optimise our Google Lighthouse statistics
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Worked with i18n libraries to localise the website in six different languages
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">Managing payments using PayPal and Stripe SDKs</span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Implementing affiliate tracking with Google tag manager and other third parties
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">Using Vercel to build and deploy web applications</span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Working with Google Cloud Platform tools such as Firebase and Firestore.
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center">
          <span>NETWORK RAIL</span>
          <span className="hidden sm:block">—</span>
          <span>Milton Keynes / Remote</span>
        </div>
        <div className="flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center">
          <span>Full-Stack Software Engineer</span>
          <span>Sep 2019 – June 2021</span>
        </div>
        <div className="h-8" />
        <ul className="list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0">
          <li>
            <span className=" text-khaki-web">
              Led a sprint team across eight sprints for an internal web app used by 3000 staff members.
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Working in an agile environment (daily stand-ups, sprints, retrospectives)
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Integrating with UI/UX to provide insight from a dev perspective and deliver user-friendly, accessible
              services to customers
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Experience using GitLab’s enterprise tooling; CICD, Feature flags, Environments
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">Experience using Redux and similar state management</span>
          </li>
          <li>
            <span className=" text-khaki-web">Test driven development</span>
          </li>
          <li>
            <span className=" text-khaki-web">Creating email templates using MJML</span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Acted as a subject-matter expert for accessibility, pushing for web apps to be made accessible in
              accordance with the WCAG
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">Deploying apps to different environments using Jenkins</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center">
          <span>SANTANDER INTERNSHIPS</span>
          <span className="hidden sm:block">—</span>
          <span>Stoke-on-Trent</span>
        </div>
        <div className="flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center">
          <span>Frontend Developer</span>
          <span>Nov 2018 – March 2019</span>
        </div>
        <div className="h-8" />
        <ul className="list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0">
          <li>
            <span className=" text-khaki-web">
              Article written by Keele University celebrating the success of the internship
            </span>
          </li>
          <li>
            <span className=" text-khaki-web">
              Worked closely with a small business to design and develop a website using WordPress
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Employment
