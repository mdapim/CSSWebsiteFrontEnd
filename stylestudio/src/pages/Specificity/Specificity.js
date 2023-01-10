import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react'
import './Specificity.css'
import { specificityCalculator } from '../../Utilities/SpecificityCalculator';
export function Specificity() {
    const [cssInput,setCSSInput] = useState('')
    const [cssSpec,setCSSSpec] = useState([])
    const handleCSSChange = (e) => {
        setCSSInput(e.target.value)
    }
    const handleButtonPress=()=> {
        setCSSSpec(specificityCalculator(cssInput))
    }
    useEffect(()=> {
        generateLeaderboard(cssSpec)
    },[cssSpec])
    const generateLeaderboard = cssSpec=> {
        const leaderboard = cssSpec.map(el=> {
            return <div className='rank-card'>{el}</div>
        })
        return leaderboard
    }
    return (
        <>
        <h1>Specificity Leaderboard</h1>
        <div className='main'>
        <Form>
            <Form.Group className='mb-3 css-area'>
                <Form.Label>Your CSS code</Form.Label>
                <Form.Control as='textarea' onChange={e=>handleCSSChange(e)} rows={20}></Form.Control>
            </Form.Group>
        </Form>
        <Button variant='primary' className='go-button' onClick={handleButtonPress}>Go!</Button>
        <div className='leaderboard'>
            {cssSpec.length===0?'':generateLeaderboard(cssSpec)}
        </div>
        </div>
        </>
    )
}