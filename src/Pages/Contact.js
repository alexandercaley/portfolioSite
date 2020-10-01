import React from "react";

import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      disabled: true,
    });

    axios
      .post("http://localhost:4000/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: true,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
            <div>
              <h1 className="title">Contact</h1>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  },
                }}
              >
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="full-name" className="formLabel">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      id="full-name"
                      name="name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="email" className="formLabel">
                      Email
                    </Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="message" className="formLabel">
                      Message
                    </Form.Label>
                    <Form.Control
                      id="message"
                      name="message"
                      as="textarea"
                      rows="3"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button
                    className="d-inline-block"
                    variant="primary"
                    type="submit"
                    disabled={this.state.disabled}
                  >
                    Send
                  </Button>

                  {this.state.emailSent === true && (
                    <p
                      className="d-inline success-msg"
                      style={{ color: "green" }}
                    >
                      Email Sent
                    </p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-msg" style={{ color: "red" }}>
                      Email Not Sent
                    </p>
                  )}
                </Form>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
