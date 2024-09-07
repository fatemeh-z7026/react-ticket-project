import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Ticket.css";

export default class Ticket extends Component {
  render() {
    return (
      <div className="container">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter Phone Number" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Select Country...">
                <option>Select Country...</option>
                <option>Iran</option>
                <option>Turkey</option>
                <option>United State</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose City...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center mt-5">
            <Button variant="primary" type="submit">
              Book a ticket
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
