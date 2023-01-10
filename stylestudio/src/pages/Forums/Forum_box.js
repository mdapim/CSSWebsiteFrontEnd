import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Forums.css";

export function Forum_box() {
  return (
    <div className="forum-box-container">
      <div className="card-container">
        <div className="card-content">
          <Card.Body>
            <Card.Title style={{ marginBottom: "2rem" }}>
              Simplify your JavaScript – Use .map(), .reduce(), and .filter()
            </Card.Title>
            <Card.Text style={{ marginBottom: "2rem" }}>
              If you’re starting in JavaScript, maybe you haven’t heard of
              .map(), .reduce(), and .filter(). For me, it took a while as I had
              to support Internet Explorer 8 until a couple years ago. But if
              you don’t need to be compatible with this very old browser, you
              have to become familiar with those methods....
            </Card.Text>
            <div className="user-interaction">
              <p>502 comments</p>

              <FontAwesomeIcon className="thumb-down" icon={faArrowUp} />
              <FontAwesomeIcon className="thumb-up" icon={faArrowDown} />
            </div>

            <Button variant="primary">View Post</Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
