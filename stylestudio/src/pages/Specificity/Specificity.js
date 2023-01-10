import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useState,useEffect} from 'react'
import './Specificity.css'
import { specificityCalculator } from '../../Utilities/SpecificityCalculator';
export function Specificity() {
    const [cssInput,setCSSInput] = useState('')
    const [cssSpec,setCSSSpec] = useState([])
    const [invalidInput,setInvalidInput] = useState(true)
    const ranking = {1:'st',2:'nd',3:'rd',4:'th'}
    const handleCSSChange = (e) => {
        setCSSInput(e.target.value)
    }
    const handleButtonPress=()=> {
        if (cssInput!=='') {
            setInvalidInput(false)
            setCSSSpec(specificityCalculator(cssInput))
        } else {
            setCSSSpec('')
            setInvalidInput(true)
        }
    }
    const generateLeaderboard = (cssSpec,type)=> {
        let rankAppend = ''
        if (!invalidInput) {
        const leaderboard = cssSpec.map((el,i)=> {
            if (i<=2) {
                rankAppend = ranking[i+1]
            } else {
                rankAppend = ranking[4]
            }
            return (
                <div className='rank-card'>
                <span >
                    {type==='leaderboard'? i+1 + rankAppend+' :'+el :el}
                </span>
  
                </div>)
        })
        return leaderboard
    }
    }
    useEffect(()=> {
        generateLeaderboard(cssSpec)
    },[cssSpec])
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
            {cssSpec.length===0?'':generateLeaderboard(cssSpec[0],'leaderboard')}
            {invalidInput? <Alert variant='danger'>Please input some CSS code</Alert>:''}
        </div>
        <div className='scoring'>
            {cssSpec.length===0?'':generateLeaderboard(cssSpec[1],'score')}
        </div>
        </div>
        </>
    )
}