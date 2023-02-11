import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Moment from "../Moment/Moment";
import Gallery1 from "../../images/gallery-one.jpg";
import Gallery2 from "../../images/gallery-two.jpg";
import Gallery3 from "../../images/gallery-three.jpg";
import Gallery4 from "../../images/gallery-four.jpg";
import Gallery5 from "../../images/gallery-five.jpg";
import Gallery6 from "../../images/gallery-seven.jpg";
import Gallery7 from "../../images/gallery-nine.jpg";
import Gallery8 from "../../images/gallery-ten.jpg";
import "./Moments.css";

const Moments = () => {
  return (
    <section className="moments-area">
      <Container>
        <h3 className="text-center mb-5">Some Moments</h3>
        <Row>
          <Moment image={Gallery1} />
          <Moment image={Gallery2} />
          <Moment image={Gallery3} />
          <Moment image={Gallery4} />
          <Moment image={Gallery5} />
          <Moment image={Gallery6} />
          <Moment image={Gallery7} />
          <Moment image={Gallery8} />
        </Row>
      </Container>
    </section>
  );
};
export default Moments;
