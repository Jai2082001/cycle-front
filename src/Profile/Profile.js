import {Sidebar, Input, Button, Segment, SegmentInline } from 'semantic-ui-react'
import { useEffect, useState, useRef } from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {userActions} from '../store/user-slice'
import classes from './Profile.module.css'
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader';
import NavBar from '../NavBar/NavBar';
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown';
import SingleAddress from './SingleAddress/SingleAddress';
import MyOrder from './MyOrder/MyOrder';
import { Redirect, useHistory } from 'react-router';
import FormAddress from '../Checkout/FormAddress/FormAddress';
import { useCookies } from 'react-cookie';

const Profile = () => {
    
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    const [accessoryBrand, changeAccessBrands] = useState([])
    const [productNames, changeProductNames] = useState([]);
    const [location, changeLocation]  = useState(0)
    const [profile, changeProfile] = useState('account');
    const [addAd, changeAddAd] = useState()
    const [fullName, changeFullName] = useState('');
    const [formState, changeFormState] = useState(true)
    const [email, changeEmail] = useState('');
    const [number, changeNumber ] = useState('');
    const [change, setChange] = useState(0);
    const [loading, changeLoading] = useState(false)
    const nameRef = useRef();
    const emailRef = useRef();
    const history = useHistory();
    const numberRef = useRef();
    const [cookies, setCookies] = useCookies(['jwt']);
    const dispatch = useDispatch();

    const userState = useSelector((state)=>{
        return state.user.user
    })
    useEffect(()=>{
        changeLoader(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/userAuthenticated`, {
            headers: {
                jwt: cookies.jwt
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response)
            dispatch(userActions.changeUser(response))
            if(!response.status){
                changeFullName(response.name);
                changeEmail(response.email);
                changeNumber(response.number);
            }
            // fetch(`${process.env.REACT_APP_FETCH_LINK}/brandCycles`).then((response)=>{
            //     return response.json()
            // }).then((response)=>{
            //     console.log(response);
            //     changeCycleBrands(response.array);
                fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
                    return response.json()
                }).then((response) => {
                    console.log(response);
                    changeCategories(response);
                    fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response)=>{
                        return response.json()
                    }).then((response)=>{
                        console.log(response)
                        changeProductNames(response)
                        changeLoader(false)
                    })
                })
            // })
        })
        
    }, [change])

    // const handleChange = (event) => {
    //     if(event.target.id === )
    // }document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    const updateInfo = () => {
        changeLoading(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/updateUser`, {
            headers: {
                id: userState._id,
                name: fullName,
                email: email,
                number: number
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeLoading(false)
        })
    } 

    const handleChange = (event) => {
        if(event.target.id === 'name'){
            changeFullName(event.target.value)
        }else if(event.target.id === 'mail'){
            changeEmail(event.target.value)
        }else{
            changeNumber(event.target.value)
        }
    }

    console.log(userState)
    
    const logoutHandler  = () => {
        console.log('adad')
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        window.location.reload(false)
    }

    const addAddress = () => {
        changeAddAd((prevState)=>{
            return !prevState
        })
    }

    if(userState && userState.status !== 'not logged in'){
        return(
            <>
                {loader && <FullScreenLoader></FullScreenLoader>}
                {!loader && 
                <>
                    <Sidebar style={{width: '100%'}}
                     animation='overlay' inverted onHide={()=>{changeSidebar(false)}} vertical visible={sidebar} width='thin'>
                         <MobileDropDown changeLocation={changeLocation} cycleBrand={cycleBrand} categories={categories} sidebar={sidebar} changeSidebar={changeSidebar}></MobileDropDown>
                     </Sidebar>
                     <div className={classes.parentContainer}>
                        <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                        categories={categories} sidebar={sidebar}></NavBar>
                        <Container fluid>
                            <Row>
                                <Col lg={'3'}>
                                    <div className={classes.colContainer}>
                                        <div className={classes.singleColContainer}>
                                            <div className={profile === 'name' ? classes.singleColSelected : classes.singleCol}>
                                                <div onClick={()=>{changeProfile('name')}} className={classes.singleMenu}>
                                                    <div className={classes.iconContainer}><i class="far fa-folder-open"></i></div><div>My Orders</div>
                                                </div>
                                            </div>
                                            <div className={profile === 'account' ? classes.singleColSelected : classes.singleCol}>
                                                <div onClick={()=>{changeProfile('account')}} className={classes.singleMenu}>
                                                    <div className={classes.iconContainer}><i class="far fa-address-book"></i></div><div>Account Settings</div>
                                                </div>
                                            </div>
                                            <div className={profile === 'addressBook' ? classes.singleColSelected : classes.singleCol}>
                                                <div onClick={()=>{changeProfile('addressBook')}} className={classes.singleMenu}>
                                                    <div className={classes.iconContainer}><i class="far fa-user"></i></div><div>Address Book</div>
                                                </div>
                                            </div>
                                            <div className={profile === 'logout' ? classes.singleColSelected : classes.singleCol}>
                                                <div onClick={logoutHandler} className={classes.singleMenu}>
                                                    <div className={classes.iconContainer}><i class="fas fa-user-circle"></i></div><div>Log Out</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={'9'}>
                                    <div className={classes.colContainer}>
                                        
                                        {profile === 'account' && 
                                            <div className={classes.parentEditContainer}>
                                                <h2>Personal Information</h2>
                                                <div className={classes.parentSubContainer}>
                                                <label>Full Name:-</label>
                                                <div className={classes.parentSub}>
                                                    <div className={classes.subDiv}><Input onChange={handleChange} value={fullName} id='name'  placeholder='Full Name'></Input></div> </div>
                                                </div>
                                                <div className={classes.parentSubContainer}>
                                                <label>Change Email:-</label>
                                                <div className={classes.parentSub}>
                                                    <div className={classes.subDiv}><Input onChange={handleChange} value={email} id='mail' placeholder='Email'></Input></div>                                        </div>
                                                </div>
                                                <div className={classes.parentSubContainer}>
                                                <label>Change Number:-</label>
                                                <div className={classes.parentSub}>
                                                    <div className={classes.subDiv}><Input onChange={handleChange} value={number} id='num'  placeholder='Number'></Input></div>                                        </div>
                                                </div>
                                                <div className={classes.btnContainer}>
                                                    <Button onClick={updateInfo}>{!loading && 'Save Changes'}{loading && <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                    </Spinner>}</Button>
                                                </div>
                                            </div>
                                        }
        
                                        {profile === 'addressBook' && 
                                        
                                            <div className={classes.parentEditContainer}>
                                                <h2>Address Book</h2>
                                                <div className={classes.parentSubContainer}>
                                                    {userState.address && 
                                                    <>
                                                    {userState.address.length>0 && 
                                                    <div className={classes.addressContainer}>
                                                        {userState.address.map((singleItem)=>{
                                                            return <div className={'mt-2 mb-2'}><SingleAddress change={change} setChange={setChange} addressId={singleItem}></SingleAddress></div>
                                                        })}
                                                    </div>}
                                                    </>
                                                    }
                                                    <div className={classes.btnContainerAdd}>
                                                        <button onClick={addAddress}>{!addAd && <i class="fas fa-plus"></i>}{addAd && <i class="fas fa-minus"></i>}</button>
                                                    </div>
                                                </div>
                                                {addAd && <div className='mt-3'><FormAddress changeFormState={changeFormState}></FormAddress></div>}
                                            </div>
        
                                        }
                                        {
                                            profile === 'name' && <MyOrder></MyOrder> 
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                     </div>
                </>}    
            </> 
            )        
    }else{
        return (
        <Redirect to='/home'></Redirect>

        )
    }
    
}

export default Profile