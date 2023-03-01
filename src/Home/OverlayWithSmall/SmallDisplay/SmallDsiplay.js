import { useEffect, useState } from "react"
import classes from './SmallDisplay.module.css'
import {Reveal, Image} from 'semantic-ui-react'
import checkMark2 from '../../../images/checkMark.svg'
import {useHistory} from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../../../store/cart-slice'


const SmallDisplay = ({item}) => {

    const [addCart, changeAddCart] = useState(false);
    const userState = useSelector((state)=>{
        return state.user ;
    })
    const dispatch = useDispatch()
    const history = useHistory();

    const viewProductHandler = () => {
        history.push(`/singleDisplay/${item.name}`)
    }
    const addProductHandler =  () => {
        if(userState.user._id){
            const data = {carts: item, userid: userState.user._id, quantity: 1};
            fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
            }).then((response)=>{
                    return response.json()
            }).then((response)=>{
                changeAddCart(true)
                dispatch(cartActions.addProducts({product: item, quantity: 1}))
                setTimeout(()=>{
                    changeAddCart(false)
                }, 400)
            })
        }
    }   
    return (
        <div className={classes.parentContainer}>
        <div className={classes.smallDisplayContainer}>
            <div className={classes.imgContainer}>
            <Reveal animated='move up'>
                <Reveal.Content visible>
                    <img src={item.displayimages}  />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <img src={item.images[0]}></img>
                </Reveal.Content>
            </Reveal>
            </div>
            <div className={classes.contentContainer}>
                <h2>{item.name}</h2>
                <h4><i class="fas fa-rupee-sign"></i>{item.price}</h4>
                <div className={classes.btnContainer}>
                    <button onClick={addProductHandler}>{!addCart && <i class="fas fa-shopping-bag"></i>}{addCart && <i class="fas fa-check"></i>}</button>
                    <button onClick={viewProductHandler} className={classes.btnTwo}><i class="fas fa-eye"></i></button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SmallDisplay 