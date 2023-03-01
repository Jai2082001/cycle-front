import { useState } from 'react';
import classes from './CartShortElement.module.css'
import { Button } from 'react-bootstrap';
import {Label, Input} from 'semantic-ui-react'
import {Fade} from 'react-reveal'
import {useSelector, useDispatch} from 'react-redux'
import { userActions } from '../../../store/user-slice';


const CartShortElement = ({ item }) => {
    
    const [inputState, changeInputState] = useState(item.quantity)

    const totalProduct = parseInt(inputState) * parseInt(item.product.price)

    const [display, changeDisplay] = useState(true);
    const dispatch = useDispatch();
    const userState= useSelector(state => state.user.user)

    const removeItem = () => {
        const dataObj = {userid: userState._id,productid: item.product._id}
        fetch(`${process.env.REACT_APP_FETCH_LINK}/cartItemDelete`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response)
            dispatch(userActions.storeCartItem(response.cart))
        })
    }

    const incQuan = () => {
        const dataObj = {userid: userState._id,productid: item.product._id}
        fetch(`${process.env.REACT_APP_FETCH_LINK}/cartItemIncrease`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response)
            changeInputState((prevState)=>{
                return prevState + 1
            })
        })        
        
    }

    
    const decQuan = () => {

        if(inputState === 1){
            const dataObj = {userid: userState._id,productid: item.product._id}
            fetch(`${process.env.REACT_APP_FETCH_LINK}/cartItemDelete`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            }).then((response)=>{
                return response.json();
            }).then((response)=>{
                console.log(response)
                dispatch(userActions.storeCartItem(response.cart))
            })        
        }else {
            const dataObj = {userid: userState._id, productid: item.product._id}
            fetch(`${process.env.REACT_APP_FETCH_LINK}/cartItemDecrease`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            }).then((response)=>{
                return response.json();
            }).then((response)=>{
                console.log(response)
                changeInputState((prevState)=>{
                    return prevState - 1
                })
            })
        }
    }
    return (

        <Fade>
        <div className={classes.cartItem}>
            <div style={{display: 'flex'}}>
            <div className={classes.imgContainer}>
                <img style={{margin: '10px'}} src={item.product.displayimages} alt="" />
                <i onClick={removeItem} class="fas fa-trash-alt"></i>
            </div>
            <div className={classes.cartContent}>
                <div>
                    <h2 style={{fontWeight: '400'}}>{item.product.name}</h2> 
                    <h3 style={{fontWeight: '400'}}>{item.product.name}</h3>
                    <h5 style={{margin: 0, marginTop: '10px'}}>Total Amount {totalProduct}</h5>
                    <div className={classes.cartDiv}>    
                        <div className={classes.quantityContainer}>
                        <Input labelPosition='right' type='text'>
                            <Label style={{cursor: 'pointer'}} onClick={decQuan}>-</Label>
                            <input style={{maxWidth: '17%'}} readOnly name="" id="" value={inputState} onChange={(event) => {
                                changeInputState(event.target.value)                    
                            }} />
                            <Label style={{cursor: 'pointer'}} onClick={incQuan}>+</Label>
                        </Input>
                        </div>
                    </div>
                </div>        
            </div>
            </div>
            <div className={classes.priceDiv}>
               <div>
               <h3><span className={classes.subHead}>Price-</span><span><i class="fas fa-rupee-sign"></i>{item.product.price}</span></h3>
               </div>
               <h3 className={classes.subHeadTotal}><span><i class="fas fa-rupee-sign"></i>{totalProduct}</span></h3>
            </div>
            <div className={classes.priceDivResponsive}>
                    <h4>
                        <span className={classes.subHead}>Price:-</span><span><i class="fas fa-rupee-sign"></i>{item.product.price}</span>
                    </h4>
                    <h4 className={classes.subHeadTotal}><span><i class="fas fa-rupee-sign"></i>{totalProduct}</span></h4>
               </div>            
        </div>
        </Fade>
    )
}

export default CartShortElement;