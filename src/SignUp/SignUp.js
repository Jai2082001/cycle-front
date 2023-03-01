import { Form, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
    
const SignUp = () => {

    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const dispatch = useDispatch();
    

    const buttonHandler = (event) => {
        event.preventDefault();
        
        const userCred = { name: nameRef.current.value, password: passwordRef.current.value, email: emailRef.current.value}
        
        fetch(`${process.env.REACT_APP_FETCH_LINK}/userSignUp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCred)
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response);
        })
    }
        
    return (
            <div>
            <NavBar></NavBar>
            <Form className={'p-3'}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={ nameRef } type="Name" placeholder="Name" />
                </Form.Group>
                
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={ emailRef } placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={ buttonHandler }>
                    Sign Up
                </Button>
        </Form>

            </div>
        )    
    
}

export default SignUp