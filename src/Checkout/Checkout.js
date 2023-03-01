import { useSelector, useDispatch } from "react-redux"
import NavBar from "../NavBar/NavBar";
import classes from './Checkout.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Step} from 'semantic-ui-react';
import { useRef, useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import CartShort from './Cart/CartShort';
import { Redirect } from 'react-router';
import { userActions } from "../store/user-slice";
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader'
import { Sidebar } from 'semantic-ui-react';
import MobileDropDown from "../NavBar/MobileDropDown/MobileDropDown";
import CartSignup from "./CartSignUp/CartSignUp";
import MakePayment from "./Cart/MakePayment/MakePayment";
import PaymentOptions from './PaymentOptions/PaymentOptions'
import MainBill from './MainBill/MainBill'
import OrderSummary from "./OrderSummary/OrderSummary";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";


const Checkout = ({ changeUpdate }) => {

    const dispatch = useDispatch();
    const orderPlaced = useState(false)
    const [currentState, changeCurrentState] = useState('')
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    const [accessoryBrand, changeAccessBrands] = useState([])
    const [productNames, changeProductNames] = useState([]);
    const [location, changeLocation] = useState(0);
    const [step, changeStep] = useState('sign');
    const [stepNum, changeStepNum] = useState('Sign in');
    const [stepNumber, changeStepNumber] = useState(0);
    const [paymentOptions, changePaymentOptions] = useState({});
    const [placeOrder, changePlaceOrder] = useState(false)
    const [cookies, setCookies] = useCookies(['jwt'])
    const [totalState, changeTotalState] = useState(0);
    const userState = useSelector((state) => {
        return state.user
    })

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/userAuthenticated`, {
            headers: {
                jwt: cookies.jwt
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response)
            if (response) {
                if (response.status === 'not logged in') {
                    changeStepNum('Sign in')
                } else {
                    changeStepNum('Cart')
                }
            } else {
                changeStepNum('Sign in')
            }
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
                // })
            })
        })

    }, [])

    const stepHandler = (e, { title }) => {
        const titleUp = title;
        if (!userState.user || userState.user.status === 'not logged in') {
            changeStepNum('Sign in')
        } else {
            if (titleUp !== 'Sign in') {
                if (titleUp === 'Cart') {
                    changeStepNum('Cart')
                } else if (titleUp === 'Billing') {
                    if (stepNumber >= 1) {
                        changeStepNum('Billing')
                    }
                } else if (titleUp === 'Payment') {
                    if (stepNumber >= 2) {
                        changeStepNum('Payment')
                    }
                }
            }
        }

    }
    console.log(step)
    if (placeOrder) {
        return (
            <Redirect to='/home'></Redirect>
        )
    } else {
        return (

            <>
                {loader && <FullScreenLoader></FullScreenLoader>}
                {!loader &&
                <>
                        <div className={classes.backgroundBar}>
                    <Sidebar style={{ width: '100%' }}
                        animation='overlay' inverted onHide={() => { changeSidebar(false) }} vertical visible={sidebar} width='thin'>
                        <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand} accessBrand={accessoryBrand}
                            categories={categories} sidebar={sidebar}></MobileDropDown>
                    </Sidebar>

                    <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand} accessBrand={accessoryBrand}
                        categories={categories} sidebar={sidebar}></NavBar>

                    <div className={classes.parentDiv}>
                        <Fade>

                            <Container>
                                <div className={classes.centerDiv}>
                                    <Step.Group>
                                        <Step
                                            active={stepNum === 'Sign in'}
                                            title={'Sign in'}
                                            link
                                            onClick={stepHandler}
                                        >

                                        </Step>
                                        <Step
                                            active={stepNum === 'Cart'}
                                            title={'Cart'}
                                            link
                                            onClick={stepHandler}
                                        >
                                        </Step>
                                        <Step
                                            active={stepNum === 'Billing'}
                                            title={'Billing'}
                                            link
                                            onClick={stepHandler}
                                        >
                                        </Step>
                                        <Step
                                            active={stepNum === 'Payment'}
                                            title={'Payment'}
                                            link
                                            onClick={stepHandler}
                                        >

                                        </Step>
                                    </Step.Group>
                                    {stepNum === 'Sign in' &&

                                        <Row className='justify-content-md-center'>
                                            <Col lg='12'>
                                                <CartSignup changeStepNumber={changeStepNumber} changeStepNum={changeStepNum} changeStep={changeStep}></CartSignup>
                                            </Col>
                                        </Row>}

                                    {
                                        stepNum === 'Cart' &&
                                        <>
                                            <Row>
                                                <CartShort changeStepNumber={changeStepNumber} changeStepNum={changeStepNum} changeStep={changeStep}></CartShort>
                                            </Row>
                                        </>
                                    }
                                    {
                                        stepNum === 'Billing' &&
                                        <Row className="justify-content-md-center">
                                            <Col lg={'7'}>
                                                <MakePayment currentState={currentState} changeCurrentState={changeCurrentState}></MakePayment>
                                            </Col>
                                            <Col lg={'5'}>
                                                <OrderSummary changeStepNumber={changeStepNumber} changeStepNum={changeStepNum} currentState={currentState} changeCurrentState={changeCurrentState} ></OrderSummary>
                                            </Col>
                                        </Row>

                                    }

                                    {
                                        stepNum === 'Payment' &&
                                        <Row className='justify-content-md-center'>
                                            <Col lg='5'>
                                                <MainBill changeTotalState={changeTotalState} changePlaceOrder={changePlaceOrder} changeCurrentState={changeStepNum} currentState={currentState}></MainBill>
                                            </Col>
                                            <Col lg='5'>

                                                <PaymentOptions totalState={totalState} changePaymentOptions={changePaymentOptions} changePlaceOrder={changePlaceOrder} changeCurrentState={changeStepNum} currentState={currentState}></PaymentOptions>
                                            </Col>
                                        </Row>
                                    }
                                </div>
                            </Container>

                        </Fade>

                    </div>

                </div>

            {/* {avenue && 
            <CCAvenueHandler></CCAvenueHandler>} */}
                    
                
                </>

                }

            </>
        )
    }
}


export default Checkout



{/* <Row className='justify-content-md-center'>
                        <Col lg={'9'}>
                        <Step.Group>
                            <Step>
                                <Step.Content>
                                    <Step.Title>Sign in</Step.Title>
                                </Step.Content>
                            </Step>

                            <Step disabled>
                                <Step.Content>
                                    <Step.Title>Cart</Step.Title>
                                </Step.Content>
                            </Step>
                            <Step disabled>
                            <Step.Content>
                                <Step.Title>Payment</Step.Title>
                            </Step.Content>
                            </Step>
                        </Step.Group>
                        {!userState.user || userState.user.status === 'not logged in' && <CartSignup></CartSignup>}
                        
                        </Col>
                        <Col lg={'3'}>
                        
                        </Col>
                        </Row>
                        <Row>
                        <Col className={classes.btnCenter}><Button onClick={paymentHandler}>Make Payment</Button></Col>             
                    </Row>                 */}









{/* <div className={classes.childDiv}>
                        <div className={classes.headingCartDiv}>Shipping Addreess</div>
                                
                        <div className={classes.childContainer}>
                        {((!userState.user.address) || (userState.user.address.length === 0)) && <FormAddress></FormAddress>}                        
                            
                        {userState.user.address && userState.user.address.length !== 0 &&
                            <>                            
                                    
                                    {userState.user.address.map((single, idx) => {
                                        return (
                                            <AddressElement changeHandler={ addressHandler } state={currentState} addressProp={single} key={idx}></AddressElement>
                                        )
                                    })}                        
                            
                                                    
                                <Button className={'mt-2'} onClick={formHandler}>Address Form</Button>
                                {formState && <FormAddress></FormAddress>}

                            </>
                            }
                            </div>
                            </div> */}