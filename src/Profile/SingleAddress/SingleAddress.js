import classes from './SingleAddress.module.css';
import { Segment, Button, Input } from 'semantic-ui-react';
import {useState, useEffect} from 'react';
import {Spinner} from 'react-bootstrap'

const SingleAddress = ({addressId, change, setChange}) => {
    
    const [address, changeAddress] = useState({})
    const [edit, changeEdit] = useState(false);
    const [name, changeName] = useState('');
    const [addressDesc, changeAddressDesc] = useState('');
    const [city, changeCity] = useState('');
    const [state, changeState] = useState('');
    const [number, changeNumber] = useState('');
    const [alternate, changeAlternate] = useState('');
    const [pincode, changePincode] = useState('');
    const [loading, changeLoading] = useState(false)
    const editOn = () => {
        changeEdit((prevState)=>{
            return !prevState
        })
    }



    const deleteHandler = () => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/deleteAddress`, {
            headers: {
                id: addressId
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            setChange((prevState)=>{
                return prevState + 1
            })
        })
    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/addressDisplay` , {
            headers: {
                address: addressId
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            if(!(response.status === 'Not Available')){
                changeAddress(response);
                changeName(response.fullname)
                changeAddressDesc(response.address)
                changeCity(response.city)
                changeState(response.state)
                changeNumber(response.number)
                changeAlternate(response.alternatenum)
                changePincode(response.pincode)
            }
        })
    }, [])

    const saveChanges = () => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/changeProfile`, {
            headers: {
                pincode: pincode,
                fullname: name,
                id: addressId,
                state: state,
                number: number,
                alternate: alternate,
                city: city,
                address: addressDesc
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeLoading(false)
            setChange((prevState)=>{
                return prevState + 1
            })
        })
    }

    const changeHandler = (event) => {
        const id  = event.target.id
        if(id === 'name'){
            changeName(event.target.value)
        }else if(id === 'address'){
            changeAddressDesc(event.target.value)
        }else if(id === 'city'){
            changeCity(event.target.value)
        }
        else if(id === 'state'){
            changeState(event.target.value)
        }else if(id === 'number'){  
            changeNumber(event.target.value)
        }else if(id === 'alternateNum'){
            changeAlternate(event.target.value)
        }
        else if(id === 'pincode'){
            changePincode(event.target.value)
        }else{
            return
        }
    }

    return (
        <div className={classes.parentDiv}>
           {address._id && <Segment>
                <div className={classes.parentSubDiv}>
                <div className={classes.childDiv}>
                {address.fullname + ' ' + address.address + ' '  + address.city + ' '  + address.state + ' ' + address.number + ' '  + address.alternatenum + ' ' + address.pincode  }
                </div>
                <div className={classes.btnContainer}>
                    <button onClick={editOn}>Edit</button>
                    <button className={classes.delBtn} onClick={deleteHandler}>Delete</button>
                </div>
                </div>
                {
                    edit && 
                    <div className={classes.parentEditDiv}>
                        <div className={classes.inputContainer}>
                            <label>Receiver's Name</label>
                            <Input id={'name'}  value={name} onChange={changeHandler}  placeholder={'Enter Receivers Name'}></Input>
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Address</label>
                            <Input id={'address'}  value={addressDesc} onChange={changeHandler}  placeholder={'Enter Address'}></Input>                            
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Enter the City</label>
                            <Input id={'city'} value={city}  onChange={changeHandler}  placeholder={'Enter City Name'}></Input>                            
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Enter the State Name</label>
                            <Input id={'state'}  value={state} onChange={changeHandler}  placeholder={'Enter State Name'}></Input>                            
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Enter Phone Number</label>
                            <Input id={'number'} value={number}  onChange={changeHandler}  placeholder={'Enter Phone Number'}></Input>                            
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Alternate Number</label>
                            <Input id={'alternateNum'} value={alternate}  onChange={changeHandler}  placeholder={'Enter Alternate Number'}></Input>                            
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Pincode</label>
                            <Input id={'pincode'} value={pincode}  onChange={changeHandler}  placeholder={'Check Pincode'}></Input>                            
                        </div>
                        <Button onClick={saveChanges}>{!loading && 'Save Changes'}{loading && 
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}</Button>
                    </div>
                }
            </Segment>}
            
        </div>
    )
}

export default SingleAddress