import { Component } from "react";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>5+ WorldWide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>
            <p>
              I am a seasoned Full Stack MERN (MongoDB, Express.js, React.js,
              Node.js) Developer with over 2 years of hands-on experience in the
              field. With a strong foundation in web development and a passion
              for crafting efficient, scalable, and user-friendly applications,
              I am dedicated to delivering high-quality solutions tailored to
              meet my clients' needs.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
