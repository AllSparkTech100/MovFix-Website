import { Col, Row } from "react-bootstrap";
import "./pages.scss";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <Row className="align-items-end">
      <Col className="">
        <NavLink to="/shows" className=" w-100 shadow-none">
          <div className="btn-tabs d-flex align-items-end">
            <button className="tabs text-white">TV Shows</button>
          </div>
        </NavLink>
      </Col>
    </Row>
  );
}

export default Category;
