import React from "react";

import { Container, Form, Nav, Navbar } from "react-bootstrap";
import StarRating from "../movieCards/starRating/StarRating";
import { Link } from "react-router-dom";
import SettGenre from "../settGenre/SettGenre";

const HeaderNav = ({ search, handleChange, ratefil, handleRating }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{ backgroundColor: "grey" }}>
        <img
          className="imgNav"
          src="https://cdn.shopify.com/s/files/1/0869/2880/files/Family-Movie-Night.gif"
          alt=""
        />
        <Link to={`/`} className="titleNav">
          FAMILY MOVIE NIGHT
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={handleChange}
              type="search"
              value={search}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <StarRating rating={ratefil} handleRating={handleRating} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
