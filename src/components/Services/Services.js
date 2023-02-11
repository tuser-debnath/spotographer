import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "../Service/Service";
import Service1 from "../../images/service-one.jpg";
import Service2 from "../../images/service-two.jpg";
import Service3 from "../../images/service-three.jpg";
import "../Services/Services.css";

const Services = () => {
  return (
    <section className="services-area">
      <Container>
        <h3 className="text-center mb-5">My Services</h3>
        <Row>
          <Service
            image={Service1}
            heading="Sporting Events Photography"
            price="300"
            text="I'm the leading sporting event photographer in Bangladesh. I offer quality products, on-site printing and great pricing!"
          />
          <Service
            image={Service2}
            heading="Live Match Photography"
            price="100"
            text="My live match photography is best in the world. The quality and ready to use for your next platform."
          />
          <Service
            image={Service3}
            heading="Team Picture Day Photography"
            price="100"
            text="I offers top quality posed team & individual photography services for and league. You will get best team photos from me."
          />
        </Row>
      </Container>
    </section>
  );
};
export default Services;
