import{u as e,R as t,c as l,A as a,r as n,B as s,S as c,a as r,b as m}from"./vendor.ea1e552a.js";const i=e=>{var t;null==(t=document.getElementById(e))||t.scrollIntoView({behavior:"smooth"})},o=({activeMenuItem:a})=>{const n=e(),s=e=>{"resume"!==e?"/resume"===n.location.pathname?n.push(`/#${e}`):i(e):n.push("/resume")},c=e=>l("h-11 text-khaki-web hover:text-morning-blue hover:border-b-2 hover:border-morning-blue flex items-center cursor-pointer",e===a||n.location.pathname.replace("/","")===e?"border-b-2  border-morning-blue text-morning-blue":"");return t.createElement("nav",{className:"fixed top-0 w-full bg-light-purple flex items-center justify-center px-2"},t.createElement("ul",{className:"text-lg font-bold font-body flex space-x-4 xs:space-x-8 items-center",role:"menu"},t.createElement("li",{className:c("home"),role:"none"},t.createElement("a",{role:"menuitem",onClick:()=>s("home"),tabIndex:0},"Home")),t.createElement("li",{className:c("projects"),role:"none"},t.createElement("a",{role:"menuitem",onClick:()=>s("projects"),tabIndex:0},"Projects")),t.createElement("li",{className:c("about"),role:"none"},t.createElement("a",{role:"menuitem",onClick:()=>s("about"),tabIndex:0},"About")),t.createElement("li",{className:c("resume"),role:"none"},t.createElement("a",{role:"menuitem",onClick:()=>s("resume"),tabIndex:0},"Resume"))))};const x=()=>t.createElement("footer",{className:"flex flex-col w-full py-4 bg-light-purple items-center justify-center px-4 mt-10 "},t.createElement("a",{className:"text-morning-blue text-lg underline hover:brightness-75 font-semibold tracking-wide",href:"mailto:lawsonjd16@gmail.com"},"LawsonJD16@gmail.com"),t.createElement("div",{className:"flex space-x-6 mt-6"},t.createElement("a",{href:"https://www.linkedin.com/in/josephdlawson/",target:"_blank",rel:"noreferrer",className:"h-10 w-10 rounded-full bg-khaki-web  flex items-center justify-center"},t.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6"},t.createElement("title",null,"LinkedIn"),t.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))),t.createElement("a",{href:"https://github.com/mikokofuyu",target:"_blank",rel:"noreferrer",className:"h-10 w-10 rounded-full bg-khaki-web flex items-center justify-center"},t.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6"},t.createElement("title",null,"GitHub"),t.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))),t.createElement("button",{className:"flex items-center justify-center h-12 w-12 rounded-full bg-morning-blue mt-8",name:"back to top","aria-label":"back to top",onClick:()=>i("home")},t.createElement(a,{size:36,weight:"bold"}))),u=()=>{const l=e(),[a,s]=n.exports.useState("home");return n.exports.useEffect((()=>{if(l.location.hash.includes("#")){const e=l.location.hash.split("#")[1];i(e),s(e)}}),[l.location.hash]),t.createElement("div",{className:"w-screen min-h-screen bg-dark-purple "},t.createElement(o,{activeMenuItem:a}),t.createElement("main",{className:"flex flex-col justify-center w-full mt-11 h-auto px-4 pb-8 "},t.createElement("section",{className:"flex flex-col items-center py-16",id:"home",onMouseEnter:()=>s("home")},t.createElement("h1",{className:"text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center"},"Joseph Lawson"),t.createElement("img",{className:"rounded-full mt-8",src:"/assets/me.9da540d7.webp",width:180,height:180,alt:"Joseph Lawson"}),t.createElement("div",{className:"text-khaki-web text-xl font-semibold mt-8 max-w-md flex flex-col space-y-3"},t.createElement("span",null,"Welcome to my portfolio!"),t.createElement("span",null,"I am a full-stack developer with experience creating websites, mobile apps and apis."),t.createElement("span",null,"I favour my front-end web development skills most and like to focus on web accessibility."))),t.createElement("section",{className:"flex flex-col items-center justify-center py-16",id:"projects",onMouseEnter:()=>s("projects")},t.createElement("div",{className:"border-b-4 border-khaki-web pb-4 w-1/6 flex justify-center max-w-xl "},t.createElement("h2",{className:"font-header text-3xl text-khaki-web"},"Projects")),t.createElement("div",{className:"mt-8 max-w-xl flex justify-center flex-col items-center"},t.createElement("h2",{className:"font-header text-3xl text-khaki-web text-center my-4"},"Persona 2 - Character Input"),t.createElement("img",{src:"/assets/P2.925950b6.webp",alt:"Tatsuya from Persona 2",width:256,height:256,className:"rounded-full my-8"}),t.createElement("p",{className:"text-khaki-web text-xl text-center"},"This project was inspired by my love for Persona 2: Innocent Sin, a game for the PSP. Like many games you have the ability to customise your character's name. I wanted to test my abilities and see how closely I could replicate the character name input interface using React and Tailwind. The project was fun to complete and gave me a greater understanding of how to improve user experience in my websites with the use of keyboard navigation."))),t.createElement("section",{className:"flex flex-col items-center justify-center py-16",id:"about",onMouseEnter:()=>s("about")},t.createElement("div",{className:"border-b-4 border-khaki-web pb-4 w-1/6 flex justify-center"},t.createElement("h2",{className:"font-header text-3xl text-khaki-web"},"About")),t.createElement("div",{className:"mt-8 max-w-xl"},t.createElement("p",{className:"text-khaki-web text-xl text-center"},"An adaptable and driven developer, tackling numerous problems within a safety-critical company. Possessing strong frontend and backend development skills with a specific focus on the MERN stack, supported by two years of professional experience working in an agile environment. Continuously striving to improve and extend existing knowledge by following emerging technologies and practises. Experience working closely with design to create products with a solid user experience.")))),t.createElement(x,null))},p=()=>t.createElement("section",{className:"flex flex-col items-center justify-center pt-16",id:"education"},t.createElement("h2",{className:"font-header text-3xl text-khaki-web mb-10"},"Certifications"),t.createElement("div",{className:"flex flex-col items-center max-w-lg space-y-10"},t.createElement("div",{className:"flex flex-col items-center"},t.createElement("span",{className:"text-morning-blue font-semibold text-xl mb-2"},"Google Cloud"),t.createElement("div",{className:"flex flex-col space-y-6 items-center text-khaki-web text-xl text-center"},t.createElement("span",null,"Developing Applications with Google Cloud Specialization"),t.createElement("span",null,"Getting Started With Application Development"),t.createElement("span",null,"Google Cloud Platform Fundamentals: Core Infrastructure"),t.createElement("span",null,"Securing and Integrating Components of your Application"),t.createElement("span",null,"App Deployment, Debugging, and Performance"),t.createElement("span",{className:"text-morning-blue text-base"},"August 2021"))),t.createElement("div",{className:"flex flex-col items-center"},t.createElement("span",{className:"text-morning-blue font-semibold text-xl mb-2"},"Red Hat"),t.createElement("div",{className:"flex flex-col space-y-6 items-center text-khaki-web text-xl text-center"},t.createElement("span",null,"Introduction to Containers, Kubernetes, and Red Hat OpenShift"),t.createElement("span",{className:"text-morning-blue text-base"},"November 2019"))))),d=()=>t.createElement("section",{className:"flex flex-col items-center justify-center pt-16",id:"education"},t.createElement("h2",{className:"font-header text-3xl text-khaki-web mb-10"},"Education"),t.createElement("div",{className:"flex flex-col items-center max-w-lg space-y-10"},t.createElement("div",{className:"flex flex-col items-center space-y-1"},t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center"},t.createElement("span",null,"BSc (Hons) Computer Science"),t.createElement("span",{className:"hidden sm:block"},"—"),t.createElement("span",null,"First Class")),t.createElement("div",{className:"flex flex-col sm:flex-row justify-between text-khaki-web text-xl sm:space-x-4 text-center"},t.createElement("span",null,"Keele University"),t.createElement("span",null,"2016 – 2019"))),t.createElement("div",{className:"flex flex-col items-center space-y-1"},t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center"},t.createElement("span",null,"BTEC Level 3 Extended Diploma IT"),t.createElement("span",{className:"hidden sm:block"},"—"),t.createElement("span",null,"D*DD")),t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center"},t.createElement("span",null,"Cheshire College South & West"),t.createElement("span",null,"2014 – 2016"))))),f=()=>t.createElement("section",{className:"flex flex-col items-center justify-center pt-16",id:"education"},t.createElement("h2",{className:"font-header text-3xl text-khaki-web mb-10"},"Employment"),t.createElement("div",{className:"flex flex-col items-center max-w-lg space-y-10"},t.createElement("div",{className:"flex flex-col items-center space-y-1"},t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center"},t.createElement("span",null,"FASTIC"),t.createElement("span",{className:"hidden sm:block"},"—"),t.createElement("span",null,"Remote")),t.createElement("div",{className:"flex flex-col sm:flex-row justify-between text-khaki-web text-xl sm:space-x-4 text-center"},t.createElement("span",null,"Full-Stack Software Engineer"),t.createElement("span",null,"Jun 2021 - Present")),t.createElement("div",{className:"h-8"}),t.createElement("ul",{className:"list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0"},t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Lead developer of Fastic’s web funnel (React / NextJS / Tailwind web app)")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Implemented SEO, Accessibility and performance best practices to optimise our Google Lighthouse statistics")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Worked with i18n libraries to localise the website in six different languages")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Managing payments using PayPal and Stripe SDKs")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Implementing affiliate tracking with Google tag manager and other third parties")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Using Vercel to build and deploy web applications")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Working with Google Cloud Platform tools such as Firebase and Firestore.")))),t.createElement("div",{className:"flex flex-col items-center space-y-1"},t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center"},t.createElement("span",null,"NETWORK RAIL"),t.createElement("span",{className:"hidden sm:block"},"—"),t.createElement("span",null,"Milton Keynes / Remote")),t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center"},t.createElement("span",null,"Full-Stack Software Engineer"),t.createElement("span",null,"Sep 2019 – June 2021")),t.createElement("div",{className:"h-8"}),t.createElement("ul",{className:"list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0"},t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Led a sprint team across eight sprints for an internal web app used by 3000 staff members.")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Working in an agile environment (daily stand-ups, sprints, retrospectives)")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Integrating with UI/UX to provide insight from a dev perspective and deliver user-friendly, accessible services to customers")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Experience using GitLab’s enterprise tooling; CICD, Feature flags, Environments")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Experience using Redux and similar state management")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Test driven development")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Creating email templates using MJML")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Acted as a subject-matter expert for accessibility, pushing for web apps to be made accessible in accordance with the WCAG")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Deploying apps to different environments using Jenkins")))),t.createElement("div",{className:"flex flex-col items-center space-y-1"},t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-morning-blue font-semibold text-xl sm:space-x-4 text-center"},t.createElement("span",null,"SANTANDER INTERNSHIPS"),t.createElement("span",{className:"hidden sm:block"},"—"),t.createElement("span",null,"Stoke-on-Trent")),t.createElement("div",{className:"flex flex-col sm:flex-row  justify-between text-khaki-web text-xl sm:space-x-4 text-center"},t.createElement("span",null,"Frontend Developer"),t.createElement("span",null,"Nov 2018 – March 2019")),t.createElement("div",{className:"h-8"}),t.createElement("ul",{className:"list-disc text-morning-blue text-xl sm:space-y-2 ml-6 md:ml-0"},t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Article written by Keele University celebrating the success of the internship")),t.createElement("li",null,t.createElement("span",{className:" text-khaki-web"},"Worked closely with a small business to design and develop a website using WordPress")))))),E=({skills:e})=>t.createElement("ul",{className:"list-disc flex space-x-10 items-center flex-wrap max-w-lg justify-center"},e.map((e=>t.createElement("li",{key:e,className:"text-khaki-web font-semibold text-xl"},t.createElement("span",{className:"text-morning-blue"},e))))),b=()=>t.createElement("section",{className:"flex flex-col items-center justify-center pt-16",id:"projects"},t.createElement("h2",{className:"font-header text-3xl mb-10 text-khaki-web"},"Skills"),t.createElement(E,{skills:["React","NextJS","JavaScript","TypeScript","React Testing Library","Jest","NodeJS","Express","Agile Methodologies","SEO","Accessibility","Performance Optimisation","NoSQL","Redux"]})),h=()=>t.createElement("div",{className:"w-screen min-h-screen bg-dark-purple "},t.createElement(o,{activeMenuItem:"resume"}),t.createElement("main",{className:"flex flex-col justify-center w-full mt-11 h-auto px-4 pb-8 "},t.createElement("section",{className:"pt-16",id:"home"},t.createElement("h1",{className:"text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-header text-khaki-web tracking-widest uppercase text-center"},"Joseph Lawson")),t.createElement(b,null),t.createElement(f,null),t.createElement(d,null),t.createElement(p,null)),t.createElement(x,null)),w=()=>t.createElement(s,null,t.createElement(c,null,t.createElement(r,{exact:!0,path:"/"},t.createElement(u,null)),t.createElement(r,{exact:!0,path:"/resume"},t.createElement(h,null))));m.render(t.createElement(t.StrictMode,null,t.createElement(w,null)),document.getElementById("root"));