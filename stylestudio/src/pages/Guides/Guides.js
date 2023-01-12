import ListGroup from 'react-bootstrap/ListGroup';
import { Link, animateScroll as scroll } from "react-scroll";
import { Resource } from './Resource.js';
import { useState } from 'react';
import { SideBar } from './Sidebar.js';
import {AddResource} from './AddResource.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Guides.css'
export function Guides({userType}) {
    const [resources,setResources] = useState([])
    const [addedResource,setAddedResource] = useState({
        resource_description:"",
        resource_link:"",
        resource_catagory:"",
    })
    const [confirmedResource,setConfirmedResource] = useState(addedResource)
    const testResources = [[{0:'flexbox',1:'Bootstrap',2:'CSS basics'}],
    [{resource_id:0,resource_catagory:0,resource_link:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",resource_description:"Guide to Flexbox"},
    {resource_id:1,resource_catagory:1,resource_link:"https://react-bootstrap.github.io/",resource_description:"Getting started with Bootstrap"}]]
    const [catagoriesList,setCatagoriesList] = useState(testResources[0][0])
    const fetchResources = async ()=> {
        const res = await fetch('resource link')
        const responseData = await res.json()
        setResources(responseData)
        setCatagoriesList(responseData[0][0])

    }
    const sendNewResource = async () => {
        const res = await fetch('link',{
            method:'POST',
            header: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([confirmedResource])
        })
        const responseData = await res.json()
        
    }
    // useEffect(()=> {
    //     fetchResources()
    // },[])
    const handleAddedResource = (e,descriptor)=> {
        let value;
        value = descriptor==='resource_catagory'? e.target.title:e.target.value
        console.log(e.target.title)
        setAddedResource((prev)=> {
            return {...prev,[descriptor]:value}
        })
    }
    const confirmAddedResource = ()=> {
        setConfirmedResource({...addedResource})
        console.log(addedResource)
    }
    const addResource=()=> {
        return (<AddResource handleAddedResource={handleAddedResource} addedResource={addedResource} confirmAddedResource={confirmAddedResource}
        catagoriesList={catagoriesList}/>)
    }

    const generateResources=()=> {
        const inCatagories = {}
        Object.keys(testResources[0][0]).forEach(catagory_id=>inCatagories[catagory_id]=[])
        testResources[1].forEach((resource)=>inCatagories[resource.resource_catagory].push(resource))
        const catagoryJSX = []
        for (const catagory_id of Object.keys(inCatagories)) {
            catagoryJSX.push(
                <div>
                <Resource title={testResources[0][0][catagory_id]} links={inCatagories[catagory_id]}/>
                </div>
            )
        }
        return catagoryJSX
    }

    return (
        <div>
        <header>
            <h1>Guides</h1>
            <p>Here you'll find a list of all the useful guides. The left panel contains a list of some catagories to browse through.</p>
            <div>
            {userType===2? addResource():''}
            </div>
            
        </header>
        <hr/>
        <div id='main'>
            <div className='side-bar'>
                <SideBar/>
            </div>
            <div className='resources'>
                {generateResources()}
            </div>
        </div>

        </div>
    )
}