import ListGroup from 'react-bootstrap/ListGroup';
import { Link, animateScroll as scroll } from "react-scroll";
import { Resource } from './Resource.js';
import { useState,useEffect} from 'react';
import { SideBar } from './Sidebar.js';
import {AddResource} from './AddResource.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Guides.css'
export function Guides({userType}) {
    const [resources,setResources] = useState([])
    const [resourceSent,setResourceSent] = useState(0)
    const [addedResource,setAddedResource] = useState({
        resource_description:"",
        resource_link:"",
        category_name:"",
        user_type:"1"
    })
    const [confirmedResource,setConfirmedResource] = useState(addedResource)
    const [categoriesList,setCategoriesList] = useState([])

    const fetchResources = async ()=> {
        const res = await fetch('https://csswebsitebackend-production.up.railway.app/guides_links')
        const responseData = await res.json()
        setResources(responseData)
        setCategoriesList(responseData[0])
    }
    const sendNewResource = async () => {
        console.log(JSON.stringify([confirmedResource]))
        console.log('now sending')
        const res = await fetch('https://csswebsitebackend-production.up.railway.app/guides_links',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([confirmedResource])
        })
        const responseData = await res.json()
        setResourceSent(resourceSent+1)

    }
    useEffect(()=> {
        if (Object.keys(confirmedResource).some(key=>confirmedResource[key]==="")) {
        } else {
            sendNewResource()
        }
    },[confirmedResource])

    useEffect(()=> {
        fetchResources()
    },[resourceSent])

    const handleAddedResource = (value,descriptor)=> {
        setAddedResource((prev)=> {
            return {...prev,[descriptor]:value}
        })
    }
    const confirmAddedResource = ()=> {
        setConfirmedResource({...addedResource})
    }
    const addResource=()=> {
        return (<AddResource handleAddedResource={handleAddedResource} 
            addedResource={addedResource} confirmAddedResource={confirmAddedResource}
        categoriesList={categoriesList}/>)
    }
    const generateResources=()=> {
        const inCategories = {}
        Object.keys(resources[0]).forEach(category_id=>{
            inCategories[category_id]=[]})
        resources[1].forEach((resource)=> {
            inCategories[resource.resource_category_id].push(resource)})
        const categoryJSX = []
        for (const category_id of Object.keys(inCategories)) {
            categoryJSX.push(
                <div>
                <Resource title={resources[0][category_id]} links={inCategories[category_id]}/>
                </div>
            )
        }
        return categoryJSX
    }

    return (
        <div>
        <header>
            <h1>Guides</h1>
            <p>Here you'll find a list of all the useful guides. The left panel contains a list of some categories to browse through.</p>
            <div>
            {userType===1? addResource():''}
            </div>
            
        </header>
        <hr/>
        <div id='main'>
            <div className='side-bar'>
                <SideBar/>
            </div>
            <div className='resources'>
                {resources.length===0?'':generateResources()}
            </div>
        </div>

        </div>
    )
}