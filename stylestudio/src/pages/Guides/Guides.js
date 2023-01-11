import ListGroup from 'react-bootstrap/ListGroup';
import { Link, animateScroll as scroll } from "react-scroll";
import { Resource } from './Resource.js';
import { SideBar } from './Sidebar.js';

import './Guides.css'
export function Guides() {
    return (
        <>
        <header>
            <h1>Guides</h1>
            <p>Here you'll find a list of all the useful guides. The left panel contains a list of some catagories to browse through.</p>
        </header>
        <hr/>
        <div className='main'>
            <div className='side-bar'>
            <SideBar/>
            </div>
            <div>
                <Resource/>
                <Resource/>
            </div>
        </div>

        </>
    )
}