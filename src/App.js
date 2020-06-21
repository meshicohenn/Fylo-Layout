import React from 'react';
import logo from './images/logo.svg'
import './styles/global.scss';

export default function App() {
  return (
    <div className="main-container">
      <header className="main-header flex align-center space-between">
        <img className="logo" alt="logo" src={logo} />
        <ul className="main-nav clean-list flex">
          <li><a href="#">Features</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
      </header>
      <main className="main-section-container column flex align-center">
        <div className="img-container"><img src={require("./images/illustration-intro.png")} alt="" /></div>
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
      </main>
      <section className="benefits flex justify-center align-center">
        <div className="benefits-container flex wrap justify-center align-center">
          <div className="benefit-item">
            <img src={require("./images/icon-access-anywhere.svg")} alt="" />
            <h4>Access your files, anywhere</h4>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>
          <div className="benefit-item">
            <img src={require("./images/icon-security.svg")} alt="" />
            <h4>Security you can trust</h4>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
          </div>
          <div className="benefit-item">
            <img src={require("./images/icon-collaboration.svg")} alt="" />
            <h4>Real-time collaboration</h4>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          </div>
          <div className="benefit-item">
            <img src={require("./images/icon-any-file.svg")} alt="" />
            <h4>Store any type of file</h4>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
          </div>
        </div>
      </section>
      <section className="stay-productive flex justify-center align-center wrap">
        <img src={require("./images/illustration-stay-productive.png")} alt="" />
        <div className="txt-conatiner flex column ">
          <h2>Stay productive, wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <div className="link-fylo flex justify-center align-center">
            <a href="#">See how Fylo works</a>
            <img src={require("./images/icon-arrow.svg")} alt="" />
          </div>
        </div>
      </section>
      <section className="recommen-container flex justify-center align-center wrap">
        <div className="recommen-item">
        <div className="recommen-img"><img src={require("./images/bg-quotes.png")} alt="" /></div>
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="user-container flex">
            <div className="flex justify-center align-center"><img src={require("./images/profile-1.jpg")} alt="" /></div>
            <div className="user-details ">
              <div className="user-name">Satish Patel</div>
              <div className="user-profession">Founder &#38; CEO, Huddle</div>
            </div>
          </div>
        </div>
        <div className="recommen-item">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="user-container flex">
            <div className="flex justify-center align-center"><img src={require("./images/profile-2.jpg")} alt="" /></div>
            <div className="user-details ">
              <div className="user-name">Bruce McKenzie</div>
              <div className="user-profession">Founder &#38; CEO, Huddle</div>
            </div>
          </div>
        </div>
        <div className="recommen-item">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="user-container flex">
            <div className="flex justify-center align-center"><img src={require("./images/profile-3.jpg")} alt="" /></div>
            <div className="user-details ">
              <div className="user-name">Iva Boyd</div>
              <div className="user-profession">Founder &#38; CEO, Huddle</div>
            </div>
          </div>
        </div>
      </section>
      <section className="get-started-container flex justify-center align-center">
        <div className="get-started ">
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          <input className="email-input" name="email" type="email" placeholder="email@example.com" />
          <button>Get Started For Free</button>
        </div>
      </section>
      <footer className="footer-container full ">
        <img className="logo" alt="logo" src={logo} />
        <div className="details-container flex space-between wrap">
          <div className="location-item flex">
            <img src={require("./images/icon-location.svg")} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="contact-us-container">
            <div className="phone-item">
              <img src={require("./images/icon-phone.svg")} alt="" />
              <span>+1-543-123-4567</span>
            </div>
            <div className="phone-item">
              <img src={require("./images/icon-email.svg")} alt="" />
              <span>example@fylo.com</span>
            </div>
          </div>
          <div className="web-links flex">
            <ul className="clean-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <ul className="clean-list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className="social-media flex ">
            <div className="social-item flex justify-center align-center"><img src={require("./images/facebook-logo-18.png")} alt="" /></div>
            <div className="social-item flex justify-center align-center"><img src={require("./images/twitter-logo.png")} alt="" /></div>
            <div className="social-item flex justify-center align-center"><img src={require("./images/instegram-logo.png")} alt="" /></div>
          </div>
        </div>
      </footer>
    </div >
  );
}

