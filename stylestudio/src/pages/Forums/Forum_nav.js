import "./Forums.css";

import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import FormAdd from "./Form_add.js";

export function ForumNav({
  currentUserDetails,
  filterDataSearch,
  fetchForumData,
}) {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

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
        <Nav.Item></Nav.Item>
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
