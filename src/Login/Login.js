import { Form, Button, Alert } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar';
import img from '../images/loginImage.jpg'
import newBikeSvg from '../images/newBike.svg'
import classes from './Login.module.css';
import { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';
import bikeSvg from '../images/bikeSvgLogin.svg'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/user-slice'
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader';
import { Sidebar } from 'semantic-ui-react'
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown'
import { firebase, auth } from '../firebase';
import LoginSvg from '../images/bikeSvg2.svg'
import { useCookies } from 'react-cookie'



const Login = () => {

    const [redirect, setRedirect] = useState(false);
    const [register, changeRegister] = useState(false);
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    const [accessoryBrand, changeAccessBrands] = useState([])
    const [productNames, changeProductNames] = useState([]);
    const [otp, changeOtp] = useState(false)
    const [location, changeLocation] = useState(0)
    const [status, changeStatus] = useState(false);
    const [otpSend, changeOtpSend] = useState(false)
    // const [cookies, setCookies] = 
    const [cookies, setCookie] = useCookies(['jwt']);
    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const userState = useSelector((state) => {
        return state.user
    })

    const cartSelector = useSelector((state)=>{
        return state.cart
    })


    
    const otpRef = useRef()
    const numberRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/userAuthenticated`, {
            headers: {
                jwt: cookies.jwt
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            dispatch(userActions.changeUser(response))
            fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
                return response.json()
            }).then((response) => {
                changeCategories(response);
                fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response) => {
                    return response.json()
                }).then((response) => {
                    changeProductNames(response)
                    changeLoader(false)
                })
            })
        })
    }, [])

    const nextHandler = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_FETCH_LINK}/loginUser`, {
            headers: {
                phone: phoneRef.current.value,
                otp: otpRef.current.value
            },
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.message === 'no authentication') {
                changeRegister(true);
            }
            else {
                setCookie('jwt', response._id, { path: '/' })
                dispatch(userActions.changeUser(response))
                fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({status: 'not logged in', carts: cartSelector.cart, userid: response._id  })
                }).then((response) => {
                    return response.json()
                }).then((response) => { 
                    setRedirect(true)
                })
            }

        })

    }

    const loginHandler = (e) => {
        e.preventDefault();
        if (phoneRef.current.value.length === 10) {

            fetch(`${process.env.REACT_APP_FETCH_LINK}/numberOtpGen`, {
                headers: {
                    'number': phoneRef.current.value
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {

                if(response.error === "Nouser"){
                    changeStatus({msg: "You are not registered"})
                }else{
                    fetch(`https://manage.hivemsg.com/api/send_transactional_sms.php?username=u6575&msg_token=Zj3ea7&sender_id=Tissot&message=Your+one+time+code+is+${response.otp}+to+change+passowrd+in+tissotsports.com&mobile=${phoneRef.current.value}`).then((response) => {
                    return response.json()
                }).then((response) => {
                    console.log(response)
                }).catch((response) => {
                    changeOtpSend(true)
                })
                }
                
            })

        }
        
    }

    const otpHandler = () => {
        changeOtp(true)
    }
    const directHandler = (e) => {
        e.preventDefault()
        if(numberRef.current.value.length !== 10){
            changeStatus({msg: 'Enter a valid number'})
            return
        }else if(passwordRef.current.value > 4){
            changeStatus({msg: "Enter a Valid Password"})
            return
        }else{
            fetch(`${process.env.REACT_APP_FETCH_LINK}/directLogin`, {
                headers: {
                    number: numberRef.current.value,
                    password: passwordRef.current.value
                }
            }).then((response)=>{
                return response.json()
            }).then((response)=>{
                console.log(response);
                if (response.message === 'no authentication') {
                    changeRegister(true);
                }
                else {
                    setCookie('jwt', response._id, { path: '/' })
                    dispatch(userActions.changeUser(response))
                    fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({status: 'not logged in', carts: cartSelector.cart, userid: response._id  })
                    }).then((response) => {
                        return response.json()
                    }).then((response) => { 
                        console.log('____________________---')
                        setRedirect(true)
                    })
                }  
            })
        }
    }


    const registerHandler = () => {
        changeRegister(true)
    }

    if (!(!userState.user || userState.user.status === 'not logged in')) {
        return (
            <Redirect to='/home'></Redirect>
        )
    }

    else {
        if (redirect) {
            return (
                <Redirect to='/home' ></Redirect>
            )
        }
        else {
            if (register) {
                return (
                    <Redirect to='/register'></Redirect>
                )
            }
            else {


                return (

                    <>

                        {loader && <FullScreenLoader></FullScreenLoader>}

                        {!loader && <>
                            <>

                                <Sidebar style={{ width: '100%' }}
                                    animation='overlay' inverted onHide={() => { changeSidebar(false) }} vertical visible={sidebar} width='thin'>
                                    <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand} accessBrand={accessoryBrand}
                                    categories={categories} sidebar={sidebar}></MobileDropDown>
                                </Sidebar>

                                <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand} accessBrand={accessoryBrand}
                                    categories={categories} sidebar={sidebar}></NavBar>


                                <div className={classes.divContainer}>
                                    <div className={classes.imgDiv}>
                                        <img src={LoginSvg} alt="Login Background" />
                                    </div>
                                    <div className={classes.loginDiv}>
                                        <Form className={classes.loginForm1}>
                                            {status && <Alert variant={`${status.nature}`}>{status.msg}</Alert>}


                                            {!otp &&
                                                <>
                                                    <Form.Group className={'mb-3'}>
                                                        <Form.Label>Enter Phone Number</Form.Label>
                                                        <Form.Control ref={numberRef} placeholder="Enter Number" type="number"></Form.Control>
                                                    </Form.Group>
                                                    <Form.Group className={'mb-3'}>
                                                        <Form.Label>Enter Password</Form.Label>
                                                        <Form.Control ref={passwordRef} placeholder="Enter Password" type="password"></Form.Control>
                                                    </Form.Group>
                                                </>
                                            }
                                            {!otp &&
                                                <>
                                                        {!otp && <Button variant="primary" type="submit" onClick={directHandler} className={classes.otpBtn}>Login</Button>}
                                                        <p style={{margin: "0", textAlign: 'center'}}>Or</p>
                                                        {!otp && <Button variant="primary" type="submit" onClick={otpHandler} className={classes.otpBtn}>
                                                            Request OTP
                                                        </Button>}

                                                </>}

                                            {otp && 
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Enter Phone Number</Form.Label>
                                                    <Form.Control ref={phoneRef}></Form.Control>
                                                </Form.Group>}
                                            {otp && 
                                            <Button onClick={loginHandler} className={classes.submitBtn}>
                                                Send OTP
                                            </Button>}
                                            {otpSend &&
                                                <Form.Group className={'mb-3'}>
                                                    <Form.Label>OTP Number</Form.Label>
                                                    <Form.Control className={classes.otpInput} maxLength={'4'} ref={otpRef} type="number"></Form.Control>
                                                </Form.Group>}
                                                {otpSend && <Button variant='primary' type='submit' onClick={nextHandler} className={classes.submitBtn}>Log In
                                                        </Button>}
                                            <p onClick={registerHandler}><span className={classes.forgotPassword}>Register</span></p><br />
                                        </Form>
                                    </div>
                                </div>
                            </>
                        </>}
                    </>
                )
            }
        }

    }

}

export default Login


{/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
                    </Form.Group> */}


                    // console.log('login Handler')

        // if(!(validateEmail(emailRef.current.value))){
        //     changeStatus({nature: 'danger', msg: "Enter a Valid Email"})
        //     return
        // }
        // else if(passwordRef.current.value.length <  5){
        //     changeStatus({nature: 'danger', msg: "Enter a Valid Password"})
        //     return
        // }else{
        //     console.log()
        //     fetch(`${process.env.REACT_APP_FETCH_LINK}/loginUser`, {
        //         headers: {
        //             email: emailRef.current.value,
        //             password: passwordRef.current.value
        //         }, 
        //     }).then((response) => {
        //         return response.json()
        //     }).then((response) => {
        //         if (response.message === 'no authentication') {
        //             changeRegister(true);
        //         }
        //         else{
        //             setCookie('jwt', response._id, {path: '/'})
        //             dispatch(userActions.changeUser(response))
        //             setRedirect(true)    
        //         }

        //     })
        // } 