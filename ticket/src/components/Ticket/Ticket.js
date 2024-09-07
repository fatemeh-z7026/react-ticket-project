import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Ticket.css";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: {
        Iran: ["Tehran", "Tabriz", "Shiraz", "Esfahan", "Mashhad"],
        Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
        US: ["Los Angles", "San Diego", "Chicago"],
      },
      selectedCountrysCity: [],
    };
  }

  countrySelection(event) {
    if (event.target.value === "-1") {
      this.setState({
        selectedCountrysCity: [],
      });
    } else {
      let choosenCountry = this.state.countriesData[event.target.value];

      this.setState({
        selectedCountrysCity: choosenCountry,
      });
    }
  }
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
              <Form.Select
                defaultValue="Select Country..."
                onChange={(event) => this.countrySelection(event)}
              >
                <option value="-1">Select Country...</option>
                <option value="Iran">Iran</option>
                <option value="Turkey">Turkey</option>
                <option value="US">United State</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                {this.state.selectedCountrysCity.length ? (
                  this.state.selectedCountrysCity.map((city) => (
                    <option value={city}>{city}</option>
                  ))
                ) : (
                  <option value="-1">Choose...</option>
                )}
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
