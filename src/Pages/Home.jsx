import "./pages.scss";
import { Container, Col, Row } from "react-bootstrap";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Category from "./Category";

function Home() {
  return (
    <>
      <main>
        <Container fluid className="bg-image hero">
          <Col md={12} lg={8} sm={12} className="mt-5 ms-lg-3">
            <div className="">
              <h5 className="text-warning fw-semibold">Movfix</h5>
              <h3 className="text-white fw-bold">
                Unlimited <span className="text-warning">Movie,</span>
                <br /> TV Shows & More
              </h3>
              <div className="under-text">
                <button className="white_btn fw-bold">PG 18</button>
                <button className="trans_btn fw-bold">HD</button>
                <p className="mt-3 fw-medium">Romance, Drama</p>
                <p className="mt-3 fw-medium d-flex align-items-center justify-content-center">
                  <FaCalendarAlt className="text-warning" size={15} /> &nbsp;
                  2024
                </p>
                <p className="mt-3 fw-medium d-flex align-items-center justify-content-center">
                  <IoMdTime className="text-warning" size={15} /> &nbsp; 120 min
                </p>
              </div>
            </div>

            <button className="trans_yel_btn mt-4  ">
              <span className="mx-2">
                <FaPlay size={15} />
              </span>
              <a className="fs-5 fw-medium" href="">
                Watch Now
              </a>
            </button>
          </Col>
        </Container>

        <Container fluid>
          <section className="mt-5">
            <h5 className="text-warning fs-6 text-uppercase fw-semibold">
              Online Streaming
            </h5>
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="fw-bold text-white fs-1">Upcoming Movies</h2>
              <Category/>
            </div>
          </section>
        </Container>
        <Container fluid>
        <Row></Row>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
        <Container fluid>
          <section className="mt-5">
            <h4 className="text-warning fw-medium">Online Streaming</h4>
            <h2 className="fw-bold">Upcoming Movies</h2>
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;
