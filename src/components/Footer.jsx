import { GitHub, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="socialMedia">
        <a
          href="https://github.com/SharadMangal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        <a
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="http://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </section>

      <p>&copy; 2024 SharadMangal</p>
    </footer>
  );
};

export default Footer;
