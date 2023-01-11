import React, { useState } from "react";
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

function FormAdd({ staticModal, setStaticModal, toggleShow }) {
  const [currentForumInput, setCurrentForumInput] = useState({
    title: "",
    description: "",
    user_id: 3,
  });
  const [handleValidation, setHandleValidation] = useState({
    EMPTY_INPUT: false,
    SUCCESSFUL_INPUT: false,
  });

  const handleNewFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCurrentForumInput((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(currentForumInput);
  };

  const postNewForumData = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([currentForumInput]),
      }
    );

    const data = await res.json([]);
    console.log(data[0]["message"]);
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
          <MDBModalDialog>
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
                    <input
                      onChange={handleNewFormInput}
                      className="title"
                      type="text"
                      name="title"
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Description: </h3>
                    <input
                      onChange={handleNewFormInput}
                      className="description"
                      type="text"
                      name="description"
                    />
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
          </MDBModalDialog>
        </MDBModal>
      </>
    </div>
  );
}

export default FormAdd;
