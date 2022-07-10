import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Erica Dippold</h2>
        <p><a href="mailto:ericavdippold@gmail.com">ericavdippold@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Erica. I like productivity, learning, and optimizing processes. One of my favorite things to do is ask myself, <i>"how can I make this process more efficient?" </i>
         and with that I continue to iterate and iterate until a system of efficiency is designed. I believe in long-term thinking, continuous self-improvement, 
        <br>
        </br>
        <br>
        </br>
        I am currently a Software Engineer who previously worked in Finance. I enjoy utilizing my Finance domain knowledge in tandem with my techincal skillsets
        to enhance productivity for finance and technical teams.

        {/* , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>. */}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Check Out My Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
