import classes from './MyOrder.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { Segment } from 'semantic-ui-react'
import SmallAd from '../SmallAd/SmallAd'
import Pdf from 'react-to-pdf'
import { useHistory } from 'react-router'
import React from 'react'

const MyOrder = () => {

    const userState = useSelector((state) => {
        return state.user
    })

    const ref = React.createRef();
    const history = useHistory()
    const [orders, changeOrders] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/orderUser`, {
            headers: {
                id: userState.user._id
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            changeOrders(response);
        })
    }, [])
    console.log(orders)

    const downloadHandler = (amount) => {
        console.log('download invoice');
        console.log(amount)
        const win = window.open(`http://localhost:3000/invoice/${amount._id}`)
        win.focus()
    }

    const PdfGen = () => {
        return (
            <div>
                <h4>Tax Invoice</h4>
                <h4>Sold By: Cycling Hub</h4>
                <h4>Ship From: : H. B. No. 220, Khasra No. 192/1 (19-14), 192/2(5-0), (Khata No. 86/92), Khata No.63/67, Khasra No. 193(8-9), 195/2,
                    <h4><b>GSTIN:-03AAICA4872D1ZY</b></h4>
                    (12-5), Khata No. 63/69, Khasra No. 193 (8-9), 195/2 (12-5), , Village Dugri, Tehsil Payal, , Ludhiana, Punjab, India - 141416, IN-PB</h4>
                <hr></hr>
            </div>
        )
    }

    return (
        <div className={classes.parentDiv}>
            {orders.map((singleItem, idx) => {
                return <Segment key={idx}>
                    <div className={classes.parentContainer}>
                        <div>
                            {singleItem.cart.map((singleItem) => {
                                return <div className={classes.productDesc}>
                                    <img src={singleItem.product.displayimages}></img>
                                    <div className={classes.desc}>
                                        <div style={{ marginBottom: '20px', fontSize: '16px' }}>{singleItem.product.name}</div>
                                        <div>
                                            <div>Qty:-{singleItem.quantity}</div>
                                            <div>Price:- {singleItem.product.price}</div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className={classes.secondDiv}>
                            <h4>{singleItem.status !== 'reject' && 'Displaced To'}</h4>
                            <h4>{singleItem.status === 'reject' && 'Stock is Not Available'}</h4>
                            <div className={classes.address}>
                                {
                                    <SmallAd id={singleItem.address}></SmallAd>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classes.secondDivResponsive}>
                        <hr></hr>
                        <h4>{singleItem.status !== 'reject' && 'Displaced To'}</h4>
                        <h4>{singleItem.status === 'reject' && 'Stock is Not Available'}</h4>
                        <div className={classes.address}>
                            {
                                <SmallAd id={singleItem.address}></SmallAd>
                            }
                        </div>
                    </div>
                    <hr></hr>
                    <div className={classes.amountDiv}>


                        <h4 className={classes.amount}>{`Total Amount Payable:- ${singleItem.amount}`}</h4>
                        {singleItem.status == 'Accepted' && <h4 onClick={() => { downloadHandler(singleItem) }} className={classes.pdf}>

                            {'Download Invoice'}
                        </h4>
                        }
                    </div>
                </Segment>
            })}
        </div>
    )
}

export default MyOrder