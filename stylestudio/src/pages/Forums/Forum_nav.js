import "./Forums.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import FormAdd from "./Form_add.js";
import "../../App.css";

export function ForumNav({
  currentUserDetails,
  filterDataSearch,
  fetchForumData,
  handleCategorySearch,
  filterCategorySearch,
}) {
  //To toggle category
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
      <div className="cat-choice-flex">
        <div>
          <Popover.Body>
            <select
              name="category"
              onChange={handleCategorySearch}
              className="cat-filter"
            >
              <option value="">Select a category</option>
              <option value="Discussions">Discussions</option>
              <option value="Questions">Questions</option>
              <option value="Ideas">Ideas</option>
              <option value="ShowReel">ShowReel</option>
              <option value="Issues">Issues</option>
              <option value="General">General</option>
              <option value="All">All</option>
            </select>
          </Popover.Body>
        </div>
        <div className="cat-choice-flex-child">
          <button onClick={filterCategorySearch} className="cat-filter-button">
            ok
          </button>
        </div>
      </div>
    </Popover>
  );

  return (
    <div>
      <br />
      <h2 className="forum-title title-change">Forums</h2>
      <hr style={{ marginTop: "-20px" }} />
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
          <OverlayTrigger
            rootClose="true"
            trigger="click"
            placement="bottom"
            overlay={popover}
          >
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
