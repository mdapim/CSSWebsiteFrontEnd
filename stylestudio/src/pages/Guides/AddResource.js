import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import "../Styling.css";
import { MDBSpinner } from "mdb-react-ui-kit";
import DropdownButton from "react-bootstrap/DropdownButton";
export function AddResource({
  handleAddedResource,
  addedResource,
  confirmAddedResource,
  categoriesList,
  loadingAddResource,
  handleClose,
  handleShow,
  show,
  errorAddResource,
}) {
  const [showAddCategory, setShowAddCategory] = useState(false);

  const categoriesNames = () => {
    return Object.keys(categoriesList).map((key) => categoriesList[key]);
  };
  const handleAddCategory = () => {
    setShowAddCategory(!showAddCategory);
  };
  const refreshAddResource = () => {
    const presets = {
      resource_description: "",
      resource_link: "",
      category_name: "",
      user_type: "1",
    };
    Object.keys(presets).forEach((key) =>
      handleAddedResource(presets[key], key)
    );
  };

  return (
    <div className="add-resource">
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          refreshAddResource();
        }}
      >
        Upload a new resource!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding a Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label>Resource Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Resource Name"
                autoFocus
                onChange={(e) =>
                  handleAddedResource(e.target.value, "resource_description")
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Resource Link</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  handleAddedResource(e.target.value, "resource_link")
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>categories</Form.Label>
              <DropdownButton title={addedResource["category_name"]}>
                {categoriesNames().map((category) => {
                  return (
                    <Dropdown.Item
                      title={category}
                      onClick={(e) =>
                        handleAddedResource(e.target.title, "category_name")
                      }
                    >
                      {category}
                    </Dropdown.Item>
                  );
                })}
                <Dropdown.Item
                  title="Add a category"
                  onClick={handleAddCategory}
                >
                  Add a category
                </Dropdown.Item>
              </DropdownButton>
              {showAddCategory ? (
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add a category</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) =>
                      handleAddedResource(e.target.value, "category_name")
                    }
                  ></Form.Control>
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        {loadingAddResource && (
          <MDBSpinner id="guide-spinner" role="status"></MDBSpinner>
        )}
        {errorAddResource && (
          <Alert className="shake-horizontal m-4 text-center">
            Please ensure you've inputted a category, a title, and a resource
            link
          </Alert>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              confirmAddedResource();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
