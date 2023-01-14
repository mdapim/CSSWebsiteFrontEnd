import "./Forums.css";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import FormAdd from "./Form_add.js";

export function ForumNav({
  currentUserDetails,
  searchInput,
  filterDataSearch,
  fetchForumData,
}) {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  return (
    <Nav className="forum_nav" fill variant="tabs" defaultActiveKey="">
      <Nav.Item>
        <Button onClick={fetchForumData}>Posts</Button>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={() => toggleShow()}>Add Forum Post</Button>
      </Nav.Item>
      <Nav.Item>
        <input
          onChange={filterDataSearch}
          className="search"
          type="text"
          eventKey="link-2"
          placeholder="Search posts.."
        ></input>
      </Nav.Item>
      <Nav.Item></Nav.Item>
      <FormAdd
        currentUserDetails={currentUserDetails}
        staticModal={staticModal}
        setStaticModal={setStaticModal}
        toggleShow={toggleShow}
      />
    </Nav>
  );
}
