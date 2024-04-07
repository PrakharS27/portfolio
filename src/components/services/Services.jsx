import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Chat Bot Integration</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Design and development of custom chatbots tailored to meet
                  your specific business needs and objectives.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Integration with popular messaging platforms such as Facebook
                  Messenger, Slack, or WhatsApp.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Incorporation of advanced NLP technologies to enable chatbots
                  to understand and respond to user queries more intelligently.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Development of chatbots for e-commerce platforms to assist
                  users with product recommendations, order tracking, and
                  customer support queries.
                </p>
              </li>
              {/* <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Integration of chatbots across multiple channels to provide
                  seamless communication experiences for users, including
                  websites, mobile apps, and social media platforms.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Development of chatbots for e-commerce platforms to assist
                  users with product recommendations, order tracking, and
                  customer support queries.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Implementation of chatbots for customer support to handle
                  frequently asked questions, troubleshoot common issues, and
                  escalate complex queries to human agents when necessary.
                </p>
              </li> */}
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              {/* <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Tailored web development solutions to meet your specific
                  business requirements, ensuring a seamless user experience and
                  optimal performance.
                </p>
              </li> */}
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Build scalable and feature-rich e-commerce websites and
                  applications to help you sell your products and services
                  online efficiently.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Expertise in developing cross-platform mobile applications
                  using cutting-edge technologies to reach a wider audience and
                  enhance user engagement.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Develop and integrate APIs to enable seamless communication
                  between different software applications, improving efficiency
                  and productivity.
                </p>
              </li>
              {/* <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Expertise in managing and optimizing databases to ensure data
                  integrity, security, and performance.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Provide training and consultation services to help you
                  understand and leverage the latest technologies in web
                  development and AI.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  We are committed to providing you with ongoing support and
                  assistance, ensuring that your website and applications run
                  smoothly and efficiently.
                </p>
              </li> */}
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Creation of visually appealing and user-friendly interfaces
                  for web and mobile applications.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Custom UI design solutions tailored to match your brand
                  identity and target audience preferences.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  mplementation of responsive design principles to ensure
                  optimal viewing experiences across devices of all sizes, from
                  desktops to smartphones and tablets.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Adaptation of UI elements and layout to maintain consistency
                  and usability across different screen resolutions.
                </p>
              </li>
              {/* <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Creation of UI style guides and component libraries to
                  maintain consistency and coherence across multiple screens and
                  interfaces within the application.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Documentation of design patterns, typography guidelines, color
                  palettes, and UI components for easy reference and consistency
                  in future development efforts.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Implementation of accessibility features such as keyboard
                  navigation, screen reader compatibility, and color contrast
                  adjustments.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Iterative refinement of UI/UX designs based on usability test
                  results to enhance user satisfaction and task efficiency.
                </p>
              </li> */}
              {/* <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Attention to detail in UI elements such as buttons, forms,
                  menus, and interactive components to enhance usability and
                  visual hierarchy.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Development of visually appealing UI designs incorporating
                  typography, color schemes, imagery, and iconography to create
                  a cohesive and engaging user experience.
                </p>
              </li> */}
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
