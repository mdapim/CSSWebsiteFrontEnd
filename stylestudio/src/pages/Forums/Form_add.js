import React, { useState, useEffect } from "react";
import CodeFormat from "../../components/Code_format.js";
import Alert from "react-bootstrap/Alert";
import {
  MDBBtn,
  MDBModal,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBSpinner
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormAdd({
  staticModal,
  setStaticModal,
  toggleShow,
  currentUserDetails,
  fetchForumData,
}) {
  console.log({ currentUserDetails });

  const [code, setCode] = useState("");
  const [addCode, setAddCode] = useState(false);
  const [loading,setLoading] = useState(false)

  const [currentForumInput, setCurrentForumInput] = useState({
    title: "",
    description: "",
    user_id: currentUserDetails["id"],
    code: code,
    category: "",
  });
  const [handleValidation, setHandleValidation] = useState({
    EMPTY_INPUT: false,
    SUCCESSFUL_INPUT: false,
  });

  useEffect(() => {
    resetInputFields();
  }, [staticModal]);

  const resetInputFields = () => {
    setCurrentForumInput({
      title: "",
      description: "",
      user_id: currentUserDetails["id"],
      code: "",
      category: "",
    });
  };
  useEffect(() => {
    console.log("test");
    fetchForumData();
  }, [currentUserDetails, handleValidation]);

  const handleAddCodeButton = () => {
    console.log("test");
    setAddCode(!addCode);
  };

  const handleCategory = (e) => {
    const catChoice = e.target.value;

    setCurrentForumInput((prev) => {
      return { ...prev, category: catChoice };
    });
  };
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
  const resetValidation =()=> {
    setHandleValidation((prevState) => ({
      ...prevState,
      EMPTY_INPUT: false,
      SUCCESSFUL_INPUT: false,
    }));
  }

  const postNewForumData = async (e) => {
    setLoading(true)
    console.log({ currentForumInput });
    setCurrentForumInput((prev) => {
      return { ...prev, code: "" };
    });

    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([currentForumInput]),
      }
    );
    
    const data = await res.json();

    if (data[0]["message"] === "One or more of the input fields are invalid") {
      setHandleValidation((prevState) => ({
        ...prevState,
        EMPTY_INPUT: true,
        SUCCESSFUL_INPUT: false,
      }));
    } else {
      setStaticModal(false);
      setTimeout(() => {
        setHandleValidation((prev) => {
          return { ...prev, SUCCESSFUL_INPUT: false };
        }, 2000);
      });
      e.target.value = "";
      setHandleValidation((prevState) => ({
        ...prevState,
        EMPTY_INPUT: false,
        SUCCESSFUL_INPUT: true,
      }));
    }
    setLoading(false)
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
                  onClick={()=> {
                    toggleShow()
                    resetValidation()
                  }}
                ></MDBBtn>
              </MDBModalHeader>

              <MDBModalBody>
                <div className="input-container">
                  <div>
                    <h3>Title:</h3>
                    <textarea
                      maxLength="200"
                      onChange={handleNewFormInput}
                      className="forum-new-input-title"
                      type="text"
                      name="title"
                      rows="2"
                      value={currentForumInput["title"]}
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Description: </h3>
                    <textarea
                      maxLength="1000"
                      onChange={handleNewFormInput}
                      className="forum-new-input-description"
                      type="text"
                      name="description"
                      rows="8"
                      value={currentForumInput["description"]}
                    />

                    <select
                      name="category"
                      onChange={handleCategory}
                      className="cat-selector"
                      value={currentForumInput["category"]}
                    >
                      <option>Select a category</option>
                      <option value="Discussions">Discussions</option>
                      <option value="Questions">Questions</option>
                      <option value="Ideas">Ideas</option>
                      <option value="ShowReel">ShowReel</option>
                      <option value="Issues">Issues</option>
                      <option value="General">General</option>
                    </select>
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
                      </div>
                    )}
                  </div>
                  <br />
                  {loading && <MDBSpinner role='status'></MDBSpinner>}
                  {handleValidation["EMPTY_INPUT"] && (
                    <Alert className="m-1 shake-horizontal">
                    You haven't inputted everyting...Check your title, description, and select a category.
                  </Alert>
                  )}
                  {handleValidation["SUCCESSFUL_INPUT"] && <Alert>Success..</Alert>}
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <Button color="secondary" onClick={()=>{

                  toggleShow()
                  resetValidation();
                  }}>
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
