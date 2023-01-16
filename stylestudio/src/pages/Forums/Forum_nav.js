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
    <div>
      <h2 className="forum-title">Forums</h2>
      <Nav className="forum_nav" fill variant="tabs" defaultActiveKey="">
        <Nav.Item>
          <h4 onClick={fetchForumData}>Posts</h4>
        </Nav.Item>
        <Nav.Item>
          <h4 onClick={() => toggleShow()}>Add Forum Post + </h4>
        </Nav.Item>
        <Nav.Item>
          <label>
            Search for a post..
            <input
              onChange={filterDataSearch}
              className="search"
              type="text"
              placeholder="Search posts.."
            ></input>
          </label>
        </Nav.Item>
        <Nav.Item></Nav.Item>
        <FormAdd
          currentUserDetails={currentUserDetails}
          staticModal={staticModal}
          setStaticModal={setStaticModal}
          toggleShow={toggleShow}
        />
      </Nav>
    </div>
  );
}
