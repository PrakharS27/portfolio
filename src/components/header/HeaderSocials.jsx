import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/devprakhar27/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PrakharS27"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:prakharshivam0@gmail.com" target="_blank" rel="noreferrer">
          <SiGmail />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
