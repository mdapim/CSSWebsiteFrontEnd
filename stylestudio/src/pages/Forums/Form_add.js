import React, { useState } from "react";
import CodeFormat from "../../components/Code_format.js";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

function FormAdd({
  staticModal,
  setStaticModal,
  toggleShow,
  currentUserDetails,
}) {
  const [code, setCode] = useState("");

  const [addCode, setAddCode] = useState(false);
  const [currentForumInput, setCurrentForumInput] = useState({
    title: "",
    description: "",
    user_id: currentUserDetails[0]["id"],
    code: code,
  });
  const [handleValidation, setHandleValidation] = useState({
    EMPTY_INPUT: false,
    SUCCESSFUL_INPUT: false,
  });

  const handleAddCodeButton = () => {
    console.log("test");
    setAddCode(!addCode);
  };

  // const generateForums = async () => {
  //   for (let i = 0; i <= 10; i++) {
  //     const res = await fetch(
  //       "https://csswebsitebackend-production.up.railway.app/forum_post",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify([
  //           {
  //             title: "We Punched an Asteroid, and the Science Results are In",
  //             description:
  //               "OSeptember 26, 2022, NASA completed its DART (Double Asteroid Redirection Test) mission, a groundbreaking effort to study the feasibility of deflecting asteroids that could potentially impact Earth. NASAs DART spacecraft collided with Dimorphos, a small moonlet that orbited a larger Near-Earth Asteroid Didymos, to test kinetic impact. Kinetic impact is a planetary defense technique that involves steering a spacecraft to intentionally collide with an asteroid in hopes of deflecting its trajectory. You can read more about what happened during the mission here.",
  //             user_id: i,
  //           },
  //         ]),
  //       }
  //     );
  //     console.log(await res.json());
  //   }
  // };

  // generateForums();

  const handleNewFormInput = (e) => {
    let name;
    let value;
    if (typeof e === "string") {
      name = "code";
      value = e;
    } else {
      name = e.target.name;
      value = e.target.value;
    }

    setCurrentForumInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postNewForumData = async () => {
    console.log(currentForumInput);
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([currentForumInput]),
      }
    );

    const data = await res.json([]);
    if (data[0]["message"] === "One or more of the input fields are invalid") {
      setHandleValidation((prevState) => ({
        ...prevState,
        EMPTY_INPUT: true,
        SUCCESSFUL_INPUT: false,
      }));
    } else {
      setHandleValidation((prevState) => ({
        ...prevState,
        EMPTY_INPUT: false,
        SUCCESSFUL_INPUT: true,
      }));
    }
  };

  return (
    <div>
      {" "}
      <>
        <MDBModal
          staticBackdrop
          tabIndex="-1"
          show={staticModal}
          setShow={setStaticModal}
        >
          <div className="add-post">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add a forum post</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="input-container">
                  <div>
                    <h3>Title:</h3>
                    <textarea
                      onChange={handleNewFormInput}
                      className="forum-new-input-title"
                      type="text"
                      name="title"
                      rows="2"
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Description: </h3>
                    <textarea
                      onChange={handleNewFormInput}
                      className="forum-new-input-description"
                      type="text"
                      name="description"
                      rows="8"
                    />
                  </div>

                  <div>
                    <Button onClick={() => handleAddCodeButton()}>
                      Click here to enter your code to share..
                    </Button>
                    {addCode && (
                      <div className="code-format-add">
                        <CodeFormat
                          code={code}
                          setCode={setCode}
                          handleNewFormInput={handleNewFormInput}
                        />
                        <Button>OK</Button>
                      </div>
                    )}
                  </div>
                  <br />
                  {handleValidation["EMPTY_INPUT"] && (
                    <h4>Please fill in required fields..</h4>
                  )}
                  {handleValidation["SUCCESSFUL_INPUT"] && <h4>Success..</h4>}
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <Button color="secondary" onClick={toggleShow}>
                  Exit
                </Button>
                <Button onClick={postNewForumData}>Add</Button>
              </MDBModalFooter>
            </MDBModalContent>
          </div>
        </MDBModal>
      </>
    </div>
  );
}

export default FormAdd;
