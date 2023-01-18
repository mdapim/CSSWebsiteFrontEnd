import "./Forums.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import FormAdd from "./Form_add.js";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export function ForumNav({
  currentUserDetails,
  filterDataSearch,
  fetchForumData,
}) {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

  const popover = (
    <Popover id="popover-basic">
      <h3
        style={{
          backgroundColor: "#212529",
          border: "none",
          color: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
        className="popover"
      >
        Pick a category
      </h3>
      <Popover.Body>
        <Breadcrumb>
          <Breadcrumb.Item className="catergory-select">
            Discussions
          </Breadcrumb.Item>
          <Breadcrumb.Item className="catergory-select">
            Questions
          </Breadcrumb.Item>
          <Breadcrumb.Item className="catergory-select">Ideas</Breadcrumb.Item>
          <Breadcrumb.Item className="catergory-select">
            ShowReel
          </Breadcrumb.Item>
          <Breadcrumb.Item className="catergory-select">Issues</Breadcrumb.Item>
          <Breadcrumb.Item className="catergory-select">
            General
          </Breadcrumb.Item>
        </Breadcrumb>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <br />
      <h2 className="forum-title">Forums</h2>
      <p className="forum-title">
        <strong>Style Studio</strong>Forum and Community, a place to discuss the
        latest technologies, design tools and anything else!
      </p>
      <hr style={{ marginBottom: "20px" }} />
      <Nav className="forum_nav" fill variant="tabs" defaultActiveKey="">
        <Nav.Item>
          <h4
            className="nav-button"
            style={{ cursor: "pointer" }}
            onClick={fetchForumData}
          >
            Posts
          </h4>
          <br />
        </Nav.Item>
        <Nav.Item>
          <h4
            className="nav-button"
            style={{ cursor: "pointer" }}
            onClick={() => toggleShow()}
          >
            New post +{" "}
          </h4>
        </Nav.Item>
        <Nav.Item>
          <input
            onChange={filterDataSearch}
            className="search"
            type="text"
            placeholder="Search posts.."
          ></input>
        </Nav.Item>
        <Nav.Item>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <h4
              className="nav-button"
              style={{ cursor: "pointer" }}
              variant="success"
            >
              Filter
            </h4>
          </OverlayTrigger>
        </Nav.Item>
        <FormAdd
          currentUserDetails={currentUserDetails}
          staticModal={staticModal}
          setStaticModal={setStaticModal}
          toggleShow={toggleShow}
          fetchForumData={fetchForumData}
        />
      </Nav>
    </div>
  );
}
