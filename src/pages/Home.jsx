import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="about">
        <h1>Hi, My Name is Sharad Mangal</h1>
        <article className="prompt">
          <p>
            A full stack javascript developer with a passion for learning and
            creating{" "}
          </p>
          <a
            href="https://github.com/SharadMangal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="mailto:sharadmangal1010@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email />
          </a>
          <a
            href="https://github.com/SharadMangal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </article>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <h3>Languages</h3>
            <span>HTML, CSS, JavaScript</span>
          </li>
          <li className="item">
            <h3>Backend</h3>
            <span>NodeJS, ExpressJS, MongoDB, MySQL</span>
          </li>
          <li className="item">
            <h3>Frontend</h3>
            <span>
              ReactJS, Bootstrap, TailwindCSS, MaterialUI,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h3>Miscellaneous</h3>
            <span>Firebase, Heroku, Postman, Git &amp; Github, JWT</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
