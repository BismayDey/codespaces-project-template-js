/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FREEZZZ - A freelancing platform",
    description:
      "'FREEZZZ' is a freelancing platform that connects freelancers with clients seeking various services. It offers a user-friendly interface where freelancers can showcase their skills, and clients can easily browse and hire talent for projects. The platform streamlines the hiring process with features like job posting, proposal submissions, and secure payment options, making it ideal for both freelancers and businesses.",
    url: "https://bismaydey.github.io/FREEZZZ/",
  },
  {
    title: "Code editor",
    description:
      "This code editor app, built using React with Monaco Editor, is a powerful and customizable platform for writing and managing code. It features syntax highlighting, file and folder creation, and extension support, allowing developers to enhance their coding experience. With a sleek design that centers the coding area and integrates visual enhancements like file type icons and dark mode, it provides a seamless and intuitive environment for coding projects. Additionally, it includes a terminal feature for running commands directly within the editor.",
    url: "https://code-editor-ruby-one.vercel.app/",
  },
  {
    title: "Voice Controlled app",
    description:
      "This voice-controlled web app, built with JavaScript, allows users to interact with websites through voice commands. It includes voice feedback for a more immersive experience and offers expanded command options for greater functionality. Designed for mobile compatibility, the app features improved styling, animations, and accessibility enhancements with ARIA attributes. Users can customize the interface with themes like dark mode and personalize commands. The app also supports touch gestures and allows users to easily switch between different modes using a custom toggle slider.",
    url: "https://voice-controlled-app.vercel.app/",
  },
  {
    title: "Chatting App",
    description:
      "This is an online platform where users can engage in real-time conversations. It features a clean and responsive interface, making it accessible across different devices. The app is designed for smooth user interaction with quick message delivery and minimal lag, ensuring seamless communication.",
    url: "https://chating-app-smoky.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
