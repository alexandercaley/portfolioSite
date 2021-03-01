import React from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";

import analytics from "./GoogleAnalytics/analytics";

let serverURL = "https://api.alexandercaley.com";

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
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      this.setState({
        emailSent: false,
      });
      return;
    }
    this.setState({
      disabled: true,
    });
    let payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post(`${serverURL}/email`, payload)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: true,
            emailSent: true,
          });
          analytics.sendEvent({
            category: "Contact",
            action: "Email sent",
            value: 2,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
          analytics.sendEvent({
            category: "Contact",
            action: "Email not sent",
            value: 3,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
        analytics.sendEvent({
          category: "Contact",
          action: "Email not sent (ERR)",
          value: 3,
        });
      });
  };

  render() {
    return (
      <div style={{ display: "inline" }}>
        <Form
          onSubmit={this.handleSubmit}
          style={{ maxWidth: `${this.props.maxWidth}` }}
        >
          <Form.Group>
            {/* <Form.Label htmlFor="full-name" className="formLabel">
                      Full Name
                    </Form.Label> */}
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              placeholder="Full Name"
              style={{ maxWidth: "1000px", display: "inline-block" }}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            {/* <Form.Label htmlFor="email" className="formLabel">
                      Email
                    </Form.Label> */}
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              style={{ maxWidth: "1000px", display: "inline-block" }}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            {/* <Form.Label htmlFor="message" className="formLabel">
                      Message
                    </Form.Label> */}
            <Form.Control
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
              rows="3"
              style={{ maxWidth: "1000px", display: "inline-block" }}
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>

          <div>
            <Button
              className="d-inline-block"
              variant="info"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
          </div>
          {this.state.emailSent && (
            <p className="d-inline msg" id="inlineMessageSuccess">
              Email Sent
            </p>
          )}
          {this.state.disabled === true && !this.state.emailSent && (
            <p className="d-inline msg" id="inlineMessageSending">
              Email Sending...
            </p>
          )}
          {this.state.emailSent === false && (
            <p className="d-inline msg" id="inlineMessageFail">
              Email Not Sent
            </p>
          )}
        </Form>
      </div>
    );
  }
}

export default Contact;
