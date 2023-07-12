import React from "react";
import Card from "react-bootstrap/Card";

function CertifCard(props) {
    return (
        <Card className="project-card-view">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <br></br>
            <Card.Text style={{ textAlign: "center" }}>
          {props.description}
          <b><p style={{ color: "grey" }}>{props.text}</p></b>
        </Card.Text>
            {"\n"}
            {"\n"}
          </Card.Body>
        </Card>
      );
}

export default CertifCard;