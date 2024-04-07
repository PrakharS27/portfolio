import { Component } from "react";
import {
  IoLogoTwitter,
  // IoLogoFacebook,
  IoLogoInstagram,
  // IoLogoYoutube,
} from "react-icons/io";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <a href="#" className="footer__logo">
          iNext
        </a> */}
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="#testimonials">Testimonials</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/devprakhar27/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://instagram.com/prashiv2712"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram />
          </a>
          <a href="https://x.com/prakhardev27" target="_blank" rel="noreferrer">
            <IoLogoTwitter />
          </a>
          <a
            href="https://github.com/PrakharS27"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        {/* <div className="footer__copyright">
          <small>&copy; iNext Dev Company. All rights reserved</small>
        </div> */}
      </footer>
    );
  }
}

export default Footer;
