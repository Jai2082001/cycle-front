import classes from './CartShort.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import Radium, { StyleRoot } from 'radium';
import { bounce } from 'react-animations'
import { cartActions } from '../../store/cart-slice';
import { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { userActions } from '../../store/user-slice';
import FullScreenLoader from '../../fullscreenLoader/FullScreenLoader';
import CartShortElement from './CartShortElement/CartShortElement'
import emptyCart from '../../images/emptyCart.svg';
import { useHistory } from 'react-router';


const CartShort = ({ changeStep, changeStepNumber, changeStepNum }) => {
    const [loading, changeLoading] = useState(true)
    const [btnLoading, changeBtnLoading] = useState(false);
    const [quantity, changeQuantity] = useState();
    const [update, changeUpdate] = useState()
    const history = useHistory();
    const dispatch = useDispatch()

    const state = useSelector((state) => {
        return state.user.user._id
    })

    console.log(state)

    useEffect(() => {
        changeBtnLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/cartDisplay`, {
            headers: {
                userid: state
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            dispatch(userActions.changeUser(response.user))
            changeBtnLoading(false)
        })
    }, [])

    const userState = useSelector((state) => {
        return state.user;
    })

    console.log(userState)
    const paymentHandler = () => {
        // changeStep('payment')
        changeStepNum('Billing')
        changeStepNumber((prevState) => {
            return prevState + 1
        })
    }
    const shoppingHandler = () => {
        history.push('/home')
    }


    if (userState.user.cart) {
        return (
            <>

                {btnLoading && <Spinner animation='border'></Spinner>}
                {!btnLoading &&
                    <>
                        {userState.user.cart <= 0 &&
                            <Col lg={'12'}>
                                <div className={classes.emptyDiv}>
                                    <div className={classes.emptyDivImg}>
                                        <img src={emptyCart}></img>
                                        <h2>Your Shopping Cart Is Empty</h2>
                                        <h3 className={classes.subDesc}>It looks like you have not made a choice</h3>
                                        <button onClick={shoppingHandler}>Keep Shopping</button>
                                    </div>
                                </div>
                            </Col>
                        }

                        {userState.user.cart.length > 0 &&
                            <>
                                <Col xs={'9'} lg={'11'}>
                                    <div className={classes.headingDiv}>
                                        <div className={classes.headingCartDiv}>Purchase Summary</div>
                                        <div className={classes.childContainer}>
                                            <Container>
                                                {userState.user.cart.map((item) => {
                                                    return (
                                                        <Fade>
                                                            <Row>
                                                                <CartShortElement changeUpdate={changeUpdate} changeLoading={changeLoading} loading={loading} item={item}></CartShortElement>
                                                            </Row>
                                                        </Fade>
                                                    )
                                                })}
                                            </Container>
                                            <div className={classes.btnContainer}>
                                                <button onClick={paymentHandler}>Complete Purchase</button>
                                            </div>
                                        </div>
                                        <div className={classes.childContainerResponsive}>
                                            <Container>
                                                {userState.user.cart.map((item) => {
                                                    return (
                                                        <Fade>
                                                            <Row>
                                                                <CartShortElement changeUpdate={changeUpdate} changeLoading={changeLoading} loading={loading} item={item}></CartShortElement>
                                                            </Row>
                                                        </Fade>
                                                    )
                                                })}
                                            </Container>
                                            <div className={classes.btnContainerResponsive}>
                                                <button onClick={paymentHandler}>Complete Purchase</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        }
                    </>}

            </>
        )
    } else {
        return (
            <>
                {btnLoading && <Spinner animation={'border'}></Spinner>}
                {!btnLoading &&
                    <>
                        <Col lg={'12'}>
                            <div className={classes.emptyDiv}>
                                <div className={classes.emptyDivImg}>
                                    <img src={emptyCart}></img>
                                    <h2>Your Shopping Cart Is Empty</h2>
                                    <h3 className={classes.subDesc}>It looks like you have not made a choice</h3>
                                    <button onClick={shoppingHandler}>Keep Shopping</button>
                                </div>
                            </div>
                        </Col>
                    </>}
            </>


        )
    }

}

export default CartShort