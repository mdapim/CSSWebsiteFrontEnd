import ListGroup from 'react-bootstrap/ListGroup';
import { Link, animateScroll as scroll } from "react-scroll";
import { Resource } from './Resource.js';
import { useState } from 'react';
import { SideBar } from './Sidebar.js';

import './Guides.css'
export function Guides({}) {
    const [data,setData] = useState([])
    
    const fetchResources = async ()=> {
        const res = await fetch('resource link')
        const data = await res.json()
        setData(data)
    }
    // useEffect(()=> {
    //     fetchResources()
    // },[])


    return (
        <>
        <header>
            <h1>Guides</h1>
            <p>ggggHere you'll find a list of all the useful guides. The left panel contains a list of some catagories to browse through.</p>
        </header>
        <hr/>
        <div id='main'>
            <div className='side-bar'>
                <SideBar/>
            </div>
            <div className='resources'>
                <Resource/>
                <Resource/>
            </div>
        </div>

        </>
    )
}