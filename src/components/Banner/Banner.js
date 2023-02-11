import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../images/banner-one.jpg";
import Banner2 from "../../images/banner-two.jpg";
import Banner3 from "../../images/banner-three.jpg";
import Button from "react-bootstrap/Button";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="banner-area">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className="banner-button">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>SSPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className="banner-button">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className="banner-button">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
