import classes from './CartSignUp.module.css'
import { useState, useRef } from 'react';
import { Fade } from 'react-reveal'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';

const CartSignup = ({ changeStep, changeStepNum, changeStepNumber }) => {

    const [already, changeAlready] = useState('login');
    const [nameRegister, changeNameRegister] = useState('');
    const [passwordRegister, changePasswordRegister] = useState('');
    const [emailRegister, changeEmailRegister] = useState('');
    const [numberRegister, changeNumberRegister] = useState('')
    const [emailLogin, changeEmailLogin] = useState('');
    const [passwordLogin, changePasswordLogin] = useState('');
    const [cookie, setCookie] = useCookies(['jwt'])
    const inputRef = useRef()
    const history = useHistory()
    const dispatch = useDispatch();

    const cartSelector = useSelector((state)=>{
        return state.cart
    })


    const changeHandler = (event) => {
        if (event.target.id === 'loginEmail') {
            changeEmailLogin(event.target.value)
        } else if (event.target.id === 'loginPassword') {
            changePasswordLogin(event.target.value)
        } else if (event.target.id === 'registerName') {
            changeNameRegister(event.target.value)
        } else if (event.target.id === 'registerEmail') {
            changeEmailRegister(event.target.value)
        } else if (event.target.id === 'registerPassword') {
            changePasswordRegister(event.target.value)
        } else if (event.target.id === 'registerNumber') {
            changeNumberRegister(event.target.value)
        } else {
            return
        }
    }

    const registerHandler = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_FETCH_LINK}/registerUserSignUp`, {
            headers: {
                name: nameRegister,
                email: emailRegister,
                password: passwordRegister,
                number: numberRegister
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response);
            changeAlready('login')
        })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_FETCH_LINK}/directLogin`, {
            headers: {
                number: emailLogin,
                password: passwordLogin
            },
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.message === 'no authentication') {
                return
            } else {
                setCookie('jwt', response._id, { path: '/' })
                dispatch(userActions.changeUser(response))
                fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({status: 'not logged in', carts: cartSelector.cart, userid: response._id  })
                }).then((response) => {
                    return response.json()
                }).then((response) => { 
                    changeStep('cart')
                    changeStepNum('Cart')
                })
            }
        })
    }

    const registerFunc = () => {
        history.push('/register')
    }

    return (
        <Fade>
            <div className={classes.parentCreateAccount}>
                <div className={classes.subParentContainer}>

                    {already === 'login' &&
                        <div className={classes.subParentChildContainer}>
                            <h2>Login </h2>
                            <div className={classes.inputContainer}>
                                <input value={emailLogin} id='loginEmail' ref={inputRef} onChange={changeHandler} type='text'></input>
                                {!emailLogin && <label>Phone Number<span style={{ color: 'red' }}>*</span></label>}
                                {emailLogin && <label className={classes.filled}>Phone Number<span style={{ color: 'red' }}>*</span></label>}
                            </div>
                            <div className={classes.inputContainer}>
                                <input value={passwordLogin} id='loginPassword' ref={inputRef} onChange={changeHandler} type='password'></input>
                                {!passwordLogin && <label>Password<span style={{ color: 'red' }}>*</span></label>}
                                {passwordLogin && <label className={classes.filled}>Password<span style={{ color: 'red' }}>*</span></label>}
                            </div>
                            <div className={classes.btnContainer} >
                                <button onClick={loginHandler}>Login</button>
                            </div>
                            <div onClick={registerFunc} className={classes.navigate}>
                                Create New Account
                            </div>
                        </div>
                    }
                    {already === 'register' &&
                        <div className={classes.subParentChildContainer}>
                            <h2>Create New Account</h2>

                            {/* <div className={classes.inputContainer}>
            <input value={nameRegister} onChange={changeHandler} id='registerName' type='text'></input>
            {!nameRegister && <label>Name<span style={{color: 'red'}}>*</span></label>}
            {nameRegister && <label className={classes.filled}>Name<span style={{color: 'red'}}>*</span></label>} 
        </div>
         
        <div className={classes.inputContainer}>
            <input value={emailRegister} onChange={changeHandler} id='registerEmail' type='text'></input>
            {!emailRegister && <label>Email<span style={{color: 'red'}}>*</span></label>}
            {emailRegister && <label className={classes.filled}>Email<span style={{color: 'red'}}>*</span></label>}
        </div>
          */}

                            <div className={classes.inputContainer}>
                                <input value={numberRegister} onChange={changeHandler} id='registerNumber' type='text'></input>
                                {!numberRegister && <label>Phone Number<span style={{ color: 'red' }}>*</span></label>}
                                {numberRegister && <label className={classes.filled}>Phone Number<span style={{ color: 'red' }}>*</span></label>}
                            </div>

                            <div className={classes.inputContainer}>
                                <input value={passwordRegister} onChange={changeHandler} id='registerPassword' type='text'></input>
                                {!passwordRegister && <label>Password<span style={{ color: 'red' }}>*</span></label>}
                                {passwordRegister && <label className={classes.filled}>Password <span style={{ color: 'red' }}>*</span></label>}
                            </div>
                            <div className={classes.btnContainer} >
                                <button onClick={registerHandler}>Sign In</button>
                            </div>
                            <div onClick={() => { changeAlready('login') }} className={classes.navigate}>
                                Already Signed In
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fade>
    )
}

export default CartSignup