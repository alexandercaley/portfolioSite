import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import workData from "../../Data/workData.json";

export default function WorkExpCard() {
  let PresentWorkData = () => {
    let workDataArray = [];
    workData.forEach((experience) => {
      workDataArray.push(
        <>
          <div className="itemTitle">{experience.company}</div>
          {experience.roles.map((role, index) => {
            return (
              <div key={index}>
                <div className="personItemDetails">{role.name}</div>
                <div className="itemDate">{role.year}</div>
                <div>
                  {role.description.map((item, index) => {
                    return (
                      <div key={index} className="itemInformation">
                        • {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      );
    });
    return workDataArray.map((item, index) => {
      return (
        <ListGroupItem variant="info" key={index}>
          {item}
        </ListGroupItem>
      );
    });
  };

  return (
    <Card
      className="contextCard"
      id="infoCard"
      bg="dark"
      text="white"
      style={{
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card.Body>
        <Card.Title
          className="cardTitle"
          style={{ textAlign: "left", fontWeight: "bold", fontSize: "20pt" }}
        >
          <Image
            src={"/assets/glyphs/briefcaseGlyph.png"}
            rounded
            style={{
              maxHeight: "45px",
              paddingRight: "15px",
            }}
          />
          Work Experience
        </Card.Title>
      </Card.Body>
      <ListGroup
        className="list-group-flush"
        style={{ borderRadius: "20px", marginTop: "-1rem" }}
      >
        <PresentWorkData />
      </ListGroup>
    </Card>
  );
}
