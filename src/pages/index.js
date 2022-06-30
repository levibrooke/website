import React from 'react';

import Layout from '../layouts';
import levi from '../img/levi-grayscale.jpg';
import umwhat from '../img/umwhat.png';
import telescope from '../img/telescope.png';
import recipeasy from '../img/recip-easy2.png';
import smartaina from '../img/smart-aina.jpg';
import devleague from '../img/devleague.jpg';

export default function Index() {
  return (
    <Layout>
      <div id="hero-wrapper">
        <header>
          <div className="nav">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-code">
            <a href="https://github.com/levibrooke/website">View on GitHub</a>
          </div>
        </header>
        <section id="home-img" className="home">
          <img src={levi} alt="Levi Porter" />
          {/* <Img 
          alt="Levi Porter on a mountain."
          fluid={props.data.imageOne.childImageSharp.fluid}
        /> */}
        </section>
        <section className="intro">
          <div className="intro-container">
            <h1>Levi<span className="break-text">Porter</span></h1>
            <h2>Software Engineer</h2>
          </div>
          <a href="mailto:levi@levibrooke.com" id="intro-cta" className="button-solid">Say Hello</a>
        </section>
      </div>
      <div id="next-wrapper">
        <section className="bio-intro" id="about">
          <h1>About</h1>
        </section>
        <section className="bio-content">
          <div className="bio-container">
            <div className="bio-container__copy">
              <p>I'm a software engineer with a passion for collaborating with talented teams to build unique user experiences. Most recently, I worked on the Sign-in team at Amazon Web Services.</p>
              <p>I am a graduate of <a href="https://devleague.com">DevLeague</a> and <a href="https://www.codefellows.org/">Code Fellows</a>, learning bootcamps where I studied software development in Javascript and Java. Prior to becoming an engineer, I served in the Coast Guard and worked in digital marketing.</p>
              <p>When I'm not working, you can find me on a soccer field, riding motorcycles, or exploring the PNW.</p>
              <p>Technologies that I have experience with:</p>
              <div className="tools">
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>Amazon Web Services</li>
                  <li>Relational Databases</li>
                  <li>Angular</li>
                  <li>CI/CD</li>
                  <li>Git</li>
                </ul>
                <ul>
                  <li>JavaScript</li>
                  <li>Node</li>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Express</li>
                  <li>CSS & SASS</li>
                  <li>Testing</li>
                </ul>
              </div>
            </div>
            <div className="bio-image">
              <img src={devleague} alt="DevLeague graduation." />
            </div>
          </div>
        </section>
        <section className="projects-intro" id="work">
          <h1>Work</h1>
        </section>
        <section className="projects-content">
          <div className="project-item">
            <div className="project-item__container">
              <h4>01</h4>
              <h3>Um What Day Is It?</h3>
              <p>Built in early 2020, this project was a fun way to answer the question a lot of people had during the repetitiveness of the pandemic.</p>
              <p className="project-item__tools">React, Gatsby, Google Sheets CMS, Netlify</p>
              <div className="project-item__buttonrow">
                <a href="https://umwhatdayisit.com/" className="button-outline-smaller button-work">Visit site</a>
                <a href="https://github.com/levibrooke/um-what-day-is-it" className="work-link">View on GitHub</a>
              </div>
            </div>
            <img id="umwhat__img" src={umwhat} alt="Um What Day Is It? Because seriously, what day is it?"/>
          </div>
          <div className="project-item">
            <img id="telescope__img" src={telescope} alt="Telescope. A stock ticker for the political economy."/>
            <div className="project-item__container">
              <h4>02</h4>
              <h3>Telescope</h3>
              <p>A stock ticker for the political economy, Telescope is a web application used to observe federal campaign finance activity in real-time.</p>
              <p className="project-item__tools">Node, Express, NextJS, Redux</p>
              <div className="project-item__buttonrow">
                <a href="https://medium.com/circa-victor/telescope-a-stock-ticker-for-the-political-economy-26e884f795ef" className="button-outline-smaller button-work">Read Blog Post</a>
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item__container">
              <h4>03</h4>
              <h3>Recip-Easy</h3>
              <p>A web application that tracks grocery items and generates recipe ideas.</p>
              <p className="project-item__tools">Node, Express, React, Redux, Watson Visual Recognition, Barcode Scanning</p>
              <div className="project-item__buttonrow">
                <a href="https://github.com/jblau07/final_project" className="button-outline-smaller button-work">View on Github</a>
              </div>
            </div>
            <img id="recipeasy__img" src={recipeasy} alt="Recip-Easy. A web application that tracks grocery items and generates recipe ideas."/>
          </div>
          <div className="project-item">
            <div className="project-item__image">
              <img id="smartaina__img" src={smartaina} alt="Smart Aina. An IoT project that detects and deters intruders on small-yield farms, and sends alerts that can be monitored via a user dashboard."/>
              <div id="smartaina__img-frame" />
            </div>
            <div className="project-item__container">
              <h4>04</h4>
              <h3>Smart Aina</h3>
              <p>An IoT project that detects and deters theft on small-yield farms, and sends alerts that can be monitored via a user dashboard.</p>
              <p className="project-item__tools">Node, PostgreSQL, React, Android, Google Firebase, Particle Photon Microcontroller</p>
              <div className="project-item__buttonrow">
                <a href="https://smartyields.com/smart-yields-backs-hackathon-teams/" className="button-outline-smaller button-work">Read Blog Post</a>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-intro" id="contact">
          <h1>Contact</h1>
        </section>
        <section className="contact-content">
          <div className="contact-container">
            <p>Feel free to reach out if you'd like to connect or discuss any project or employment opportunities. Or if you're in Seattle, come say hi at the weekly <a href="http://seattlejshackers.com/">Seattle JS Hackers</a> meetup!</p>
            <a href="mailto:levi@levibrooke.com" className="button-outline-smaller button-work">Say Hello</a>
          </div>
        </section>
        <footer>
        </footer>
      </div>
    </Layout>
  )
};

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "levi-grayscale.jpg" }) {
//       childImageSharp {
//         fluid(
//           maxWidth: 600
//         ) 
//         {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `