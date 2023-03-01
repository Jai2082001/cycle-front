import classes from './OrderSummary.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';

const OrderSummary = ({currentState, changeCurrentState, changeStepNumber, changeStepNum}) => {

    const dispatch = useDispatch();
    const nextHandler = () => {
        if(currentState){
            changeStepNumber((prevState)=>{
                return prevState + 1
            })
            changeStepNum('Payment')
        }
    }

    const state = useSelector((state)=>{
        return state.user.user._id
    })
    const userState = useSelector((state)=>{
        return state.user.user
    })
    console.log(userState)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/cartDisplay`, {
            headers: {
                userid: state
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            dispatch(userActions.changeUser(response.user))
        })
    }, [])

    console.log(currentState)    
    return (
        <div className={classes.parentContainer}>
            <h2>Order Summary</h2>
            <hr style={{color: 'black'}}></hr>
            <div className={classes.parentCartContainer}>
                <div className={classes.subParentContainer}>
                    {userState && userState.cart.map((singleItem)=>{
                        return (
                            <div className={classes.singleItem}>
                                <div className={classes.offerDiv}>
                                    <span>
                                        {singleItem.product.coupon && 
                                        <>
                                            {singleItem.product.coupon[0].value.percent + '% Off'}
                                        </>}
                                    </span>
                                </div>
                                <div className={classes.subSingleItem}>
                                <div className={classes.headerDiv}>
                                    <h3>{singleItem.product.name}</h3>
                                </div>
                                <img src={singleItem.product.displayimages}></img>
                                </div>
                                <div className={classes.priceDiv}>
                                   <div className={classes.priceSubDiv}><span>Price:-</span><h3>{parseInt(singleItem.product.price)}</h3></div>
                                    <div className={classes.priceSubDiv} style={{marginTop: '10px', justifyContent: 'flex-end'}}>
                                     <span>Qty:- {singleItem.quantity} </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.btnContainer}>
                <button onClick={nextHandler}>Select Payment Options</button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary