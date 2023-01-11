import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Specificity } from './Specificity.js'


test('Textarea, button and dropdown are on screen',()=> {
    render(<Specificity/>)
    const textarea = screen.getByRole('textbox')
    const [button,dropdown] = screen.getAllByRole('button')
    expect(button).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
})

test('An empty string in the text area followed by a button press presents an error',()=> {
    render(<Specificity/>)
    userEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getByText(/Please input some CSS code/i)).toBeInTheDocument()
})
test('2 indents returns a valid leaderboard', ()=> {
    render(<Specificity/>)
    const txtInput = screen.getByRole('textbox')
    const [button,dropdown] = screen.getAllByRole('button')
    userEvent.click(dropdown)
    userEvent.click(screen.getByTitle('2'))
    const testString = `.myposts {
      background-color:red;
      test
    }`
    userEvent.type(txtInput,testString)
    userEvent.click(button)
    expect(screen.getByText('0010')).toBeInTheDocument()
    expect(screen.getByText('1st :.myposts')).toBeInTheDocument()
    expect(screen.queryByText('background-color:red')).toBeNull()
    expect(screen.queryByText('test')).toBeNull()

})

test('4 indents returns a valid leaderboard',()=> {
    render(<Specificity/>)
    const txtInput = screen.getByRole('textbox')
    const [button,dropdown] = screen.getAllByRole('button')
    userEvent.click(dropdown)
    userEvent.click(screen.getByTitle('4'))
    const testString = `.myposts {
    background-color:red;
    test
}`
    userEvent.type(txtInput,testString)
    userEvent.click(button)
    expect(screen.getByText('0010')).toBeInTheDocument()
    expect(screen.getByText('1st :.myposts')).toBeInTheDocument()
    expect(screen.queryByText('background-color:red')).toBeNull()
    expect(screen.queryByText('test')).toBeNull()
})
test('The leaderboard presents the tags and the specificity score',()=> {
    
})
// test('2 indents on a 4 indent selection returns an incorrect leaderboard',()=> {
//     render(<Specificity/>)
//     const txtInput = screen.getByRole('textbox')
//     const [button,dropdown] = screen.getAllByRole('button')
//     const testString = (
// `.mikesposts {
//   background-color:red;
//   test;
// }`
//     )
//     userEvent.type(txtInput,testString)
//     userEvent.click(button)
//     console.log(txtInput)
//     expect(screen.getByText('0010')).toBeInTheDocument()
//     expect(screen.getByText(/.mikesposts/i)).toBeInTheDocument()
//     // expect(screen.getByText(/background/i)).toBeInTheDocument()
//     expect(screen.getByText(/test/i)).toBeInTheDocument()
// })