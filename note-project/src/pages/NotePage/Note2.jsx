import React from "react";
import { Container, Row, Col } from "reactstrap";
import TodoAdd from "../asd/TodoAdd";
import TodoSearch from "../asd/TodoSearch";

export default function Note2() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <TodoAdd />
          </Col>
          <Col>
            <TodoSearch />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
