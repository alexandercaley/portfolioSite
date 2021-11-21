import React from "react";

import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";

export default function ContactFooter(props) {
  return (
    <div className={props.isFloating && "contactFooter"}>
      <ListGroup
        className="list-group-flush"
        style={{
          textAlign: "left",
          borderRadius: "20px",
          maxWidth: props.isFloating && "22rem",
        }}
      >
        {props.showResume && (
          <ListGroupItem variant="info">
            <Card.Link
              href="https://drive.google.com/file/d/130eGmBNs_dbvJmdKwGUBNdKtczMwgM3e/view?usp=sharing"
              target="_blank"
            >
              <Image
                src={"/assets/glyphs/resumeGlyph.png"}
                rounded
                style={{ maxHeight: "20px", paddingRight: "15px" }}
              />
              Résumé
            </Card.Link>
          </ListGroupItem>
        )}
        <ListGroupItem variant="info">
          <Card.Link href="https://github.com/alexandercaley" target="_blank">
            <Image
              src={"/assets/glyphs/githubGlyph.png"}
              rounded
              style={{ maxHeight: "20px", paddingRight: "15px" }}
            />
            Github
          </Card.Link>
        </ListGroupItem>
        <ListGroupItem variant="info">
          <Card.Link
            href="https://www.linkedin.com/in/alexandercaley/"
            target="_blank"
          >
            <Image
              src={"/assets/glyphs/linkedInGlyph.png"}
              rounded
              style={{ maxHeight: "20px", paddingRight: "15px" }}
            />
            LinkedIn
          </Card.Link>
        </ListGroupItem>
        <ListGroupItem variant="info">
          <Card.Link href="mailto:alexandercaley@gmail.com">
            <Image
              src={"/assets/glyphs/mailGlyph.png"}
              rounded
              style={{ maxHeight: "20px", paddingRight: "15px" }}
            />
            alexandercaley@gmail.com
          </Card.Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
