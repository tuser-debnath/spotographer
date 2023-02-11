import Container from "react-bootstrap/Container";
import FooterLogo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area bg-dark">
      <Container>
        <div className="footer-content">
          <img src={FooterLogo} alt="" />
          <p>© 2023 Spotographer, All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
