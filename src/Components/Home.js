import "./Home.css";

export function Home() {
  return (
    <div id="home">
      <div className="home-text-container">
        <div className="home-text">
          <h1>About Me</h1>
          <p>Hello,</p>
          <p>
            I am a Full Stack Developer with 5+ years of experience building
            scalable React and Node.js applications in healthcare and SaaS
            domains.
          </p>
          <p>
            Led the development of micro-frontend platforms for enterprise
            clients, reducing onboarding time by 99%. Strong expertise in
            frontend architecture, performance optimization, and API
            integration, with hands-on experience delivering scalable solutions
            in agile and HIPAA-compliant environments. Proven ability to design
            and build responsive user interfaces, develop robust backend
            systems, and create high-performance single-page applications that
            meet both technical and business requirements, taking projects from
            initial concept through to successful production deployment.
            Comfortable working across multiple frameworks and both client-side
            and server-side technologies.
          </p>
          <p>Thank you, Enjoy.</p>
          <div className="home-links-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shankar-mylesamy/"
              className="home-links"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/shankar-mylesamy/"
              className="home-links"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://leetcode.com/u/shankar-mylesamy/"
              className="home-links"
            >
              Leetcode
            </a>
          </div>
        </div>
      </div>
      <div className="home-image-container">
        <img
          className="home-image"
          src={require("../Images/myphoto.jpg")}
          alt="mypic"
        ></img>
      </div>
    </div>
  );
}
