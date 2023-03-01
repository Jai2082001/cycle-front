import classes from './MainBill.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { userActions } from '../../store/user-slice';
import { useEffect } from 'react';

const MainBill = ({changeTotalState, currentState, changePlaceOrder}) => {
    const dispatch = useDispatch();

    let totalState = 0;
    let totalDis = 0;
    const userState = useSelector((state)=>{
        return state.user
    })
    const state = useSelector((state)=>{
        return state.user.user._id
    })
    useEffect(()=>{
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

    

    console.log(userState)

    // const totalState  = userState.user.cart.map((singleItem)=>{
    // })

    for(let i=0;i<userState.user.cart.length;i++){
        let single = parseInt(userState.user.cart[i].product.price) * parseInt(userState.user.cart[i].quantity);
        totalState = single + totalState
    }
    
    for(let i=0;i<userState.user.cart.length;i++){

        let single = (parseInt(userState.user.cart[i].product.price) * parseInt(userState.user.cart[i].product.coupon[0].value.percent))/100;
        totalDis = single + totalDis;
    }



    console.log(totalState)

    return (
        <div>
            <h3>Total Bill</h3>
            <hr></hr>
            <div className={classes.parentBtn}>
                <div className={classes.totalPrice}>
                <div className={classes.totalAmount}>Total Amount:-</div>  <h3>{totalState}</h3>     
                </div>       
                <div className={classes.totalPrice}><div className={classes.discountHead}>Discount on MRP:-</div>
                <h3 className={classes.discount}>-{totalDis}</h3></div>
                <hr></hr>
                <div className={classes.totalPrice}>
                    <div>Amount to Pay:-</div>
                    <h2>{totalState - totalDis}</h2>
                </div>
            </div>
        </div>
    )
}

export default MainBill