import CCAvenueHandler from './CCAvenueHandler';
import classes from './PaymentOptions.module.css'
// import {  Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button, Header, Image} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/UIslice';
import Modal from '../../UI/Modal'
var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    crypto = require('crypto'),
    qs = require('querystring');

const PaymentOptions = ({currentState, changePlaceOrder}) => {
    
    var body = '',
	workingKey = 'B97EAF4DC59065991363F9FBD2FF2F0B',		//Put in the 32-Bit key shared by CCAvenues.
	accessCode = 'AVPE12KA23BQ20EPQB',		//Put in the access code shared by CCAvenues.
	encRequest = '',
	formbody = '';

    //Generate Md5 hash for the key and then convert in base64 string
    var md5 = crypto.createHash('md5').update(workingKey).digest();
    var keyBase64 = Buffer.from(md5).toString('base64');

    //Initializing Vector and then convert in base64 string
    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');

    
    const userState = useSelector((state)=>{
        return state.user
    })
    let totalState = 0;
    let totalDis = 0;
    
    // const [avenue, changeAvenue] = useState(false);
    const dispatch = useDispatch();
    const uiState = useSelector((state)=>{
        return state.ui.display;
    })

    const state = useSelector((state)=>{
        return state.user.user._id
    })

    for(let i=0;i<userState.user.cart.length;i++){
        let single = parseInt(userState.user.cart[i].product.price) * parseInt(userState.user.cart[i].quantity);
        totalState = single + totalState
    }
    
    for(let i=0;i<userState.user.cart.length;i++){

        let single = (parseInt(userState.user.cart[i].product.price) * parseInt(userState.user.cart[i].product.coupon[0].value.percent))/100;
        totalDis = single + totalDis;
    }


    var body = `merchant_id=2006890&order_id=${userState.user.cart[0].product.orderId}&currency=INR&amount=${totalState-totalDis}&redirect_url=https://tissotsports.com&cancel_url=https://tissotsports.com&language=&billing_name=&billing_address=&billing_city=&billing_state=&billing_zip=&billing_country=&billing_tel=&billing_email=&delivery_name=&delivery_address=&delivery_city=&delivery_state=&delivery_zip=&delivery_country=&delivery_tel=&merchant_param1=&merchant_param2=&merchant_param3=&merchant_param4=&merchant_param5=&integration_type=iframe_normal&promo_code=&customer_identifier=`
    var encRequest = ccav.encrypt(body, keyBase64, ivBase64);
    console.log(typeof(encRequest));
    var POST = qs.parse(body);
    console.log(POST)

    const options1 = [1,2,3,4,5,6,7,8,9,10,11,12].map((singleItem)=>{
        return {key: singleItem, value: singleItem, text: singleItem}
    })

    const options2 = [];

    for(let i=0;i<40;i++){
        options2.push({key: i+22, value: i+22, text: i+22})
    }
    const paymentHandler = () => {
        const dataObj = {
            user: userState.user,
            address: currentState,
            amount: totalState - totalDis,
            payment: 'NET'
        }
        fetch(`${process.env.REACT_APP_FETCH_LINK}/orderIssueNet`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(dataObj)
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            fetch(`https://manage.hivemsg.com/api/send_transactional_sms.php?username=u6575&msg_token=Zj3ea7&sender_id=Tissot&message=Dear+${userState.user.number}+Your+Order+has+been+successfully+placed.+Order+ID%3A+${response.insertedId}+%2C+Amount+%3A+${totalState - totalDis}+www.tissotsports.com+Tissot+Energy&mobile=${userState.user.number}`).then((response)=>{
                return response.json()
            }).then((response)=>{
                console.log(response)
            })
        })

        dispatch(uiActions.changeDisplay(true));
        // changeAvenue(true)
        
    }
    const paymentHandlerCOD = () => {
        const dataObj = {
            user: userState.user,
            address: currentState,
            amount: totalState - totalDis,
            payment: 'COD'
        }
        fetch(`${process.env.REACT_APP_FETCH_LINK}/orderIssue`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(dataObj)
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log()
            console.log(response)
            console.log(userState.user)
            changePlaceOrder(true)
            fetch(`https://manage.hivemsg.com/api/send_transactional_sms.php?username=u6575&msg_token=Zj3ea7&sender_id=Tissot&message=Dear+${userState.user.number}+Your+Order+has+been+successfully+placed.+Order+ID%3A+${response.insertedId}+%2C+Amount+%3A+${totalState - totalDis}+www.tissotsports.com+Tissot+Energy&mobile=${userState.user.number}`).then((response)=>{
                return response.json()
            }).then((response)=>{
                console.log(response)
            })
        })
    }
    return (
        <div className={classes.parentBtn}>
            {}
              
            <h3>Payment Options</h3>
            <hr></hr>
            <div>
            <Button className={'ms-2'} onClick={paymentHandlerCOD}>Cash on Delivery</Button>
            <form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"> <input type="hidden" id="encRequest" name="encRequest" value={`${encRequest}`} /><input type="hidden" name="access_code" id="access_code" value={`${accessCode}`}/>
            <button className='ms-2' onClick={paymentHandler} type='submit'>Pay The Amount Now</button>
            </form>
            {uiState && 
            <Modal>

                {/* <center><iframe width="482" height="500" scrolling="No" frameborder="0"  id="paymentFrame" src={`https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=2006890&encRequest=${encRequest}&access_code=AVPE12KA23BQ20EPQB`}></iframe></center> */}
            </Modal>}
            
            {/* <Modal
                onClose={() => changeAvenue(false)}
                onOpen={() => changeAvenue(true)}
                open={avenue}
                trigger={<Button>Pay The Amount Now</Button>}
                >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
                    <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => changeAvenue(false)}>
                    Nope
                    </Button>
                    <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => changeAvenue(false)}
                    positive
                    />
                </Modal.Actions>
            </Modal> */}
                      
            </div>
        </div>
    )
}

export default PaymentOptions





{/* <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>UPI ID</Accordion.Header>
                <Accordion.Body className={classes.bodyAcc}>
                        <Input placeholder={'Enter UPI Id'}></Input>
                        <Button className={'ms-2'}>Continue</Button>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Wallets</Accordion.Header>
                <Accordion.Body>
                <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Paytm</Accordion.Header>
                            <Accordion.Body className={classes.bodyAcc}>
                                <Input placeholder={'Paytm Number'}></Input>
                                <Button className={'ms-2'}>Continue</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>PhonePe</Accordion.Header>
                            <Accordion.Body className={classes.bodyAcc}>
                                <Input placeholder={'Phone Pe Number'}></Input>
                                <Button className={'ms-2'}>Continue</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Net Banking</Accordion.Header>
                <Accordion.Body>
                        
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Credit/Debit/ATM Card</Accordion.Header>
                <Accordion.Body>
                    <Input placeholder={'Enter ATM Number'}></Input>
                    <Input style={{maxWidth: '100px'}} className='ms-2' placeholder={'CVV'}></Input>
                    <div className={classes.dropdownDiv}>
                    <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        MM
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {options1.map((singleItem)=>{
                            return (
                                <Dropdown.Item>{singleItem.text}</Dropdown.Item>
                            )
                        })}
                        {/* <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item> */}
            //         </Dropdown.Menu>
            //         </Dropdown>
            //         <Dropdown className={'ms-2'}>
            //         <Dropdown.Toggle id="dropdown-basic">
            //             YY
            //         </Dropdown.Toggle>

            //         <Dropdown.Menu>
            //             {options2.map((singleItem)=>{
            //                 return (
            //                     <Dropdown.Item>{singleItem.text}</Dropdown.Item>
            //                 )
            //             })}
            //         </Dropdown.Menu>
            //         </Dropdown>    
            //         </div>      
            //     </Accordion.Body>
            // </Accordion.Item>
            // <Accordion.Item eventKey="4">
            //     <Accordion.Header>Cash on Delivery</Accordion.Header>
            //     <Accordion.Body>
            //         <div className={classes.displayFlex}>
            //             <div>Pay On Delivery</div>
            //             <Button>Continue</Button>
            //         </div>
            //     </Accordion.Body>
            // </Accordion.Item>
            // </Accordion> */}
// 