import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export function AddResource({handleAddedResource,addedResource,confirmAddedResource, catagoriesList}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const catagoryNames = () => {
      return Object.keys(catagoriesList).map(key=>catagoriesList[key])
    }
    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Upload a new resource!
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding a Resource</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Resource Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Resource Name"
                  autoFocus
                  onChange={e=>handleAddedResource(e,'resource_description')}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Resource Link</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e=>handleAddedResource(e,'resource_link')}/>
              </Form.Group>
              <Form.Group className='mb-3'>
                    <Form.Label>Catagories</Form.Label>
                    <DropdownButton title={addedResource['resource_catagory']}>
            <Dropdown.Item title='2' onClick={e=>handleAddedResource(e,'resource_catagory')} >2</Dropdown.Item>
            <Dropdown.Item title='3' onClick={e=>handleAddedResource(e,'resource_catagory')}>3</Dropdown.Item>
            <Dropdown.Item title='4' onClick={e=>handleAddedResource(e,'resource_catagory')}>4</Dropdown.Item>
            {catagoryNames().map(catagory => {
              return <Dropdown.Item title={catagory} onClick={e=>handleAddedResource(e,'resource_catagory')}>{catagory}</Dropdown.Item>
            })}
        </DropdownButton>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              handleClose()
              confirmAddedResource()
              }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }