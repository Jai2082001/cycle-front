import classes from './Register.module.css'
import NavBar from '../NavBar/NavBar';
import { Form, Button, Alert } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router';
import newRegisterSvg from '../images/newRegister.svg'
import { Sidebar } from 'semantic-ui-react';
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown'
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader';
import registerSvg from '../images/registerSvg2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie'
import { userActions } from '../store/user-slice';

const Register = () => {
    const [login, changeLogin] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [productNames, changeProductNames] = useState([]);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    const [status, changeStatus] = useState(false)
    const [accessoryBrand, changeAccessBrands] = useState([])
    const [location, changeLocation] = useState(useLocation().pathname[0])
    const [loader, changeLoader] = useState(true);
    const [cookies, setCookie] = useCookies(['jwt']);
    const [otp, changeOtp] = useState(false);
    const [pass, setPass] = useState(false)


    const userState = useSelector((state) => {
        return state.user
    })


    const dispatch = useDispatch();

    const phoneRef = useRef()
    const otpRef = useRef()
    const passwordRef = useRef()

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const validatePassword = (number) => {
        let re = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}9[0-9](\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/
        return re.test(number)
    }


    useEffect(() => {
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
        // })

    }, [])


    const loginHandler = () => {
        changeLogin(true)
    }

    const registerHandler = (event) => {
        event.preventDefault();

        if (phoneRef.current.value.length === 10) {
            changeStatus(false)
            fetch(`${process.env.REACT_APP_FETCH_LINK}/numberOtpGenReg`, {
                headers: {
                    'number': phoneRef.current.value
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response);
                if (response.error === 'already') {
                    changeStatus({ msg: 'You are already logged in' })
                } else {
                    fetch(`https://manage.hivemsg.com/api/send_transactional_sms.php?username=u6575&msg_token=Zj3ea7&sender_id=Tissot&message=Your+one+time+code+is+${response.otp}+to+change+passowrd+in+tissotsports.com&mobile=${phoneRef.current.value}`).then((response) => {
                        return response.json()
                    }).then((response) => {
                        console.log(response)
                    }).catch((response) => {
                        changeOtp(true)
                    })
                }

            })

        }
    }

    const finalHandler = (event) => {
        event.preventDefault();
        console.log(passwordRef.current.value)
        if (passwordRef.current.value.length > 3) {
            console.log(passwordRef.current.value)
            fetch(`${process.env.REACT_APP_FETCH_LINK}/finalRegister`, {
                headers: {
                    number: phoneRef.current.value,
                    pass: passwordRef.current.value
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response)
                console.log(userState)
                changeLogin(true)
            })
        } else {
            changeStatus({ msg: 'Invalid Password' })
        }

    }

    const nextHandler = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_FETCH_LINK}/checkOtp`, {
            headers: {
                phone: phoneRef.current.value,
                otp: otpRef.current.value
            },
        }).then((response) => {
            return response.json()
        }).then((response) => {

            if (response.status === 'done') {
                changeStatus(false)
                setPass(true)
            } else {
                changeStatus({ msg: "Invalid OTP" })
            }
        })
    }


    if (login) {
        console.log("here")
        return (
            <Redirect to='/login'></Redirect>
        )
    }
    else {
        return (

            <>

                {loader && <FullScreenLoader></FullScreenLoader>}

                {!loader && <>
                    <Sidebar style={{ width: '100%' }}
                        animation='overlay' inverted onHide={() => { changeSidebar(false) }} vertical visible={sidebar} width='thin'>
                        <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                        categories={categories} sidebar={sidebar}></MobileDropDown>
                    </Sidebar>
                    <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                        categories={categories} sidebar={sidebar}></NavBar>
                    <div className={classes.divContainer}>
                        <div className={classes.imgDiv}>
                            <img src={registerSvg} alt="Login Background" />
                        </div>
                        <div className={classes.loginDiv}>
                            <Form className={classes.loginForm1}>
                                {status && <Alert variant='danger'>{status.msg}</Alert>}
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control ref={phoneRef} placeholder="Enter Number" type="number"></Form.Control>
                                </Form.Group>

                                {otp &&
                                    <Form.Group className={'mt-3'}>
                                        <Form.Label>OTP Number</Form.Label>
                                        <Form.Control className={classes.otpInput} maxLength={'4'} ref={otpRef} type="number"></Form.Control>
                                    </Form.Group>
                                }

                                <div className={classes.formText}>
                                    {!otp && <Button variant="primary" type="submit" onClick={registerHandler} className={classes.submitBtn}>
                                        Send OTP
                                    </Button>}
                                    {!pass && <>
                                        {otp && <Button variant='primary' type='submit' onClick={nextHandler} className={classes.submitBtn}>Check Otp</Button>}</>}


                                </div>

                                {pass &&
                                    <Form.Group className={'mb-3 mt-3'}>
                                        <Form.Label>Set Password</Form.Label>
                                        <Form.Control ref={passwordRef} placeholder='Password'></Form.Control>
                                    </Form.Group>}

                                {pass &&
                                    <div>
                                        <Button variant='primary' type="submit" onClick={finalHandler} className={classes.submitBtn}>
                                            Register
                                        </Button>
                                    </div>}

                                <div className={classes.formText}>
                                    <Form.Text onClick={loginHandler}><span className={classes.forgotPassword}>Already Signed Up?</span></Form.Text><br />
                                </div>
                            </Form>
                        </div>
                    </div>
                </>}
            </>
        )
    }

}

export default Register