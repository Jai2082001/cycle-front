import classes from './Invoice.module.css'
import { useParams } from 'react-router'
import {useEffect, useState} from 'react'
import Pdf from 'react-to-pdf'
import React from 'react'
import {Table} from 'react-bootstrap'

const Invoice = () => {
    const params = useParams();
    const [invoice, changeInvoice] = useState(false);
    const [address, changeAddress] = useState('')
    let totalAmountParent = 0;
    const link = process.env.REACT_APP_FETCH_LINK
    console.log(params)
    console.log(link)
    const ref = React.createRef()
    useEffect(()=>{
        console.log('hello')
        fetch(`${link}/invoice`, {
            headers: {
                "orderId": params.inv
            }
        }).then((response)=>{
            return response.json()
        }).then((response1)=>{
            console.log(response1);
            fetch(`${link}/addressDisplay`, {
                headers: {
                    address: response1.address
                }
                }).then((response)=>{
                return response.json()
            }).then((response2)=>{
                console.log(response2)
                changeInvoice(response1);
                changeAddress(response2);
            })
        })
    }, [])

    console.log("--------")
    console.log(invoice)
    return (
        <>
            {invoice && 
            <div className={classes.invoiceParent}>
                <div className={classes.btnInvoice}>
                <Pdf targetRef={ref} filename={`${params.inv}.pdf`}>
                    {({ toPdf }) => <button onClick={toPdf}>Download Invoice</button>}
                </Pdf>
                </div>
                <div ref={ref} className={classes.mainInvoice}>
                    <h3>Tax Invoice</h3>
                    <div className={classes.soldHeading}><h4>Sold By:-Cycling Hub Limited</h4><h4>Invoice Number</h4></div>
                    <div className={classes.addressHeading}><div><b>Ship From Address:-</b></div><div>{`H. B. No. 220, Khasra No. 192/1 (19-14), 192/2(5-0), (Khata No. 86/92), Khata No.63/67, Khasra No. 193(8-9), 195/2,
(12-5), Khata No. 63/69, Khasra No. 193 (8-9), 195/2 (12-5), , Village Dugri, Tehsil Payal, , Ludhiana, Punjab, India - 141416, IN-PB`}</div></div>
                    <div className={classes.addressHeading} style={{borderBottom: '1px solid black'}}>
                    <div>
                        <b>GSTIN:- </b>
                        <span>03AAICA4872D1ZY</span>
                    </div>
                    </div>
                    <div className={classes.invoiceAddress}>
                        <div className={classes.orderId} style={{padding: '0px'}}>
                            <div>
                                <b>
                                    OrderId:- {params.inv}
                                </b>
                            </div>
                            <div>
                                <b>Order Date:-</b>
                                    {invoice.date}
                            </div>
                            <div>
                                <b>
                                    PAN:-
                                </b>
                                {' AAICA4872D'}
                            </div>
                        </div>
                        <div className={classes.orderId}>
                            <div>
                                <b>
                                    Bill To {invoice.name}:-
                                </b>
                                <b>{`${address.fullname} `}</b>
                                {`${address.address} ${address.state} ${address.city} ${address.pincode}`}
                            </div>
                        </div>
                        <div className={classes.orderId}>
                            <div>
                                <b>
                                    Bill To {invoice.name}:-
                                </b>
                                <b>{`${address.fullname} `}</b>
                                {`${address.address} ${address.state} ${address.city} ${address.pincode}`}
                            </div>
                        </div>
                        <div className={classes.orderId} style={{padding: '0px'}}>
                            <div>
                            {'*Keep this invoice and manufacturer box for warranty purposes'}
                            </div>
                        </div>
                    </div>
                    <div className={classes.productDiv}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Product</th>
                                <th>Title</th>
                                <th>Qty</th>
                                <th>Gross Amount</th>
                                <th>Discount %</th>
                                <th>Taxable Value</th>
                                
                                {address.state === 'Rajasthan' && <><th>CGST</th><th>SGST</th></>}
                                {!(address.state === 'Rajasthan') && <><th>IGST</th></>}
                                <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                {invoice.cart.map((singleItem)=>{
                                    let grossAmount = parseInt(singleItem.product.price) * parseInt(singleItem.quantity)
                                    let totalDiscount = grossAmount -  (grossAmount * singleItem.product.coupon[0].value.percent / 100) 
                                    let totalAmount = parseInt(totalDiscount + ((totalDiscount * parseInt(singleItem.product.gst)) / 100))
                                    totalAmountParent = totalAmountParent + totalAmount
                                    console.log(singleItem)
                                    return (
                                        <tr>
                                            <td>
                                                {singleItem.product.categories === "access" && 
                                                <>
                                                    {`${singleItem.product.forProduct} Accessories`}
                                                </>}
                                                {!(singleItem.product.categories === 'access') && 
                                                <>
                                                    {`${singleItem.product.categories}`}
                                                </>}
                                            </td>
                                            <td>
                                                {singleItem.product.name}
                                            </td>
                                            <td>
                                                {singleItem.quantity}
                                            </td>
                                            <td>
                                                {grossAmount}
                                            </td>
                                            <td>
                                                {invoice && `${singleItem.product.coupon[0].value.percent}`}
                                            </td>
                                            <td>
                                                {totalDiscount}
                                            </td>
                                            <td>
                                                {parseInt(singleItem.product.gst)/2 + '%'}
                                            </td>
                                            <td>
                                                {parseInt(singleItem.product.gst)/2 + '%'}
                                            </td>
                                            <td>
                                                {totalAmount}
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td colSpan={7}>

                                    </td>
                                    <td>
                                        Grand Total
                                    </td>
                                    <td>
                                        {totalAmountParent}
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div>

                    </div>
                </div>
                
            </div>}
        </>
    )
}

export default Invoice 