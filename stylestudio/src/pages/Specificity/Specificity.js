import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState,useEffect} from 'react'
import './Specificity.css'
import { specificityCalculator } from '../../Utilities/SpecificityCalculator';
export function Specificity() {
    const [cssInput,setCSSInput] = useState('')
    const [cssSpec,setCSSSpec] = useState([])
    const [invalidInput,setInvalidInput] = useState(false)
    const [indents,setIndents] = useState(4)
    const ranking = {1:'st',2:'nd',3:'rd',4:'th'}
    const handleIndentChange=(e)=>{
        setIndents(e)
    }
    const handleCSSChange = (e) => {
        setCSSInput(e.target.value)
    }
    const handleButtonPress=()=> {
        if (cssInput!=='') {
            setInvalidInput(false)
            setCSSSpec(specificityCalculator(cssInput,indents))
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
                <span>
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
        <div>
        <Button variant='primary' className='go-button' onClick={handleButtonPress}>Go!</Button>
        <DropdownButton title={'indents: '+indents}>
            <Dropdown.Item title='2' onClick={()=>handleIndentChange(2)}>2</Dropdown.Item>
            <Dropdown.Item title='3' onClick={()=>handleIndentChange(3)}>3</Dropdown.Item>
            <Dropdown.Item title='4' onClick={()=>handleIndentChange(4)}>4</Dropdown.Item>
        </DropdownButton>
        </div>
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