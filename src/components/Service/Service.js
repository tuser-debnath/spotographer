import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Service = ({ image, heading, price, text }) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <div className="single-service-image">
          <img src={image} className="w-100" />
        </div>
        <div className="single-service-text">
          <h3>{heading}</h3>
          <h4>Price: ${price}</h4>
          <p>{text}</p>
          <Button className="service-button">Book Now</Button>
        </div>
      </div>
    </Col>
  );
};
export default Service;
