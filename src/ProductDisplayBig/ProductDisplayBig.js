
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import { useEffect, useState, useRef } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import ServicesDiv from './ServicesDiv/ServicesDiv';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader'
import ReactImageMagnify from 'react-image-magnify'
import frame from '../images/frame.png';
import brake from '../images/brake.png';
import rear from '../images/rear-derailleur.png';
import wheel from '../images/wheel-size.png';
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import MoreProducts from './MoreProducts/MoreProducts';
import Reviews from './Reviews/Reviews'
import { Sidebar } from 'semantic-ui-react'
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown';
import classes from './ProductDisplayBig.module.css'
import Magnifier from 'react-magnifier';

const ProductDisplayBig = () => {
    console.log('herereeeeeee')

    const params = useParams();
    const userState = useSelector((state) => {
        return state.user;
    })
    const productId = params.productId;
    const inputRef = useRef();
    const quantityRef = useRef();
    const dispatch = useDispatch()
    // const [loading, changeLoading] = useState(true)
    const [addToCart, changeAddToCart] = useState(false)
    const [singleProduct, changeSingleProduct] = useState({ images: [] });
    const [displayImage, changeDisplayImage] = useState('');
    const [deliverable, changeDeliverable] = useState(false);
    const [pincodehandler, setPincodeHandler] = useState('false');
    const [direct, changeDirect] = useState(false);
    const [userStatus, changeUserStatus] = useState(false);
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrand] = useState([]);
    const [categories, changeCategories] = useState([]);
    // const [accessoryBrand, changeAccessBrands] = useState([]);
    const [productNames, changeProductNames] = useState([]);
    const [location, changeLocation] = useState(0);



    useEffect(() => {
        console.log(productId)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplay`, {
            headers: {
                name: productId
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            let single;
            single = response.product;
            if (single.images) {
                single.images.push(single.displayimages)
            } else {
                single.images = [];
                single.images.push(single.displayimages)
            }
            changeDisplayImage(single.displayimages);
            changeSingleProduct(single);
            // fetch(`${process.env.REACT_APP_FETCH_LINK}/brandCycles`).then((response)=>{
            //     return response.json()
            // }).then((response)=>0{
            //     changeCycleBrand(response.array);
            fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
                return response.json()
            }).then((response) => {
                changeCategories(response);
                fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response) => {
                    return response.json()
                }).then((response) => {
                    changeProductNames(response);
                    changeLoader(false)
                })
            })
            // })

        })
    }, [])
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const buttonHandler = () => {
        setPincodeHandler(false);
        const string = inputRef.current.value;
        fetch(`${process.env.REACT_APP_FETCH_LINK}/pincodeCheck`, {
            headers: {
                pincode: string
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            setPincodeHandler(response);
        })
    }

    const buyHandler = () => {
        if (pincodehandler === 'false') {
            changeDeliverable('noInput')
        } else if (pincodehandler.status !== 'suc') {
            changeDeliverable('false')
        } else {
            changeDeliverable(false)
            console.log('Checkout');
            console.log('hello mmm')
            if (userState.user.status === 'not logged in' || !userState) {
                changeUserStatus(true)
            } else {
                let quan;
                if (quantityRef.current.value) {
                    quan = quantityRef.current.value
                } else {
                    quan = 1
                }
                console.log('here')
                let quan2;
                if (quantityRef.current.value) {
                    quan2 = quantityRef.current.value
                } else {
                    quan2 = 1
                }
                console.log(userState.user)
                const data = { carts: singleProduct, userid: userState.user._id, quantity: quan2 }
                fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((response) => {
                    return response.json()
                }).then((response) => {
                    console.log('foooooo')
                    console.log(response);
                    dispatch(cartActions.addProducts({ product: singleProduct, quantity: quan }));
                    changeDirect(true)
                })
            }
        }

    }

    const cartHandler = () => {
        if(!addToCart){
            if (pincodehandler === 'false') {
                changeDeliverable('noInput')
            } else if (pincodehandler.status !== 'suc') {
                changeDeliverable('false')
            } else {
                changeAddToCart(true);
                changeDeliverable(false)
                console.log('Checkout');
                console.log('hello mmm')
                if (userState.user.status === 'not logged in' || !userState) {
                    let quan;
                    if (quantityRef.current.value) {
                        quan = quantityRef.current.value
                    } else {
                        quan = 1
                    }
                    dispatch(cartActions.addProducts({ product: singleProduct, quantity: quan }));
                    changeUserStatus(true)
                } else {
                    console.log('here')
                    let quan;
                    if (quantityRef.current.value) {
                        quan = quantityRef.current.value
                    } else {
                        quan = 1
                    }
                    console.log('here')
                    let quan2;
                    if (quantityRef.current.value) {
                        quan2 = quantityRef.current.value
                    } else {
                        quan2 = 1
                    }
                    console.log(userState.user)
                    console.log(singleProduct)
                    const data = { carts: singleProduct, userid: userState.user._id, quantity: quan2 }
                    fetch(`${process.env.REACT_APP_FETCH_LINK}/cartAssociation`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then((response) => {
                        return response.json()
                    }).then((response) => {
                        console.log(response);
                        changeAddToCart(false)
                    })
                }
    
            }
        }else {
            return;
        }
    }

    console.log(userState)
    console.log('heheheheheheheheh')


    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    console.log(singleProduct)

    const sliderController = (item) => {
        console.log('boom')
        changeDisplayImage(item);
    }

    if (userStatus) {
        return (
            <Redirect to='/checkout'></Redirect>
        )
    }
    if (direct) {
        console.log('heres')
        return (
            <Redirect to='/checkout'></Redirect>
        )
    } else {
        return (
            <>
                {loader && <FullScreenLoader></FullScreenLoader>}

                {!loader &&
                    <>
                        <Sidebar style={{ width: '100%' }}
                            animation='overlay' inverted onHide={() => {
                                changeSidebar(false)
                            }} vertical visible={sidebar} width='thin'
                        >
                            <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                                categories={categories} sidebar={sidebar}></MobileDropDown>
                        </Sidebar>

                        <div className={classes.productDisplay}>
                            <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                                categories={categories} sidebar={sidebar}></NavBar>

                            <div className={classes.prod}>
                                <Row>
                                    <Col lg='7'>
                                        <div className={classes.imgAnotherDiv}>
                                            <div className={classes.headerDiv}>
                                                <h2 className={classes.heading}>{singleProduct.name}</h2>
                                            </div>
                                            <div>
                                                <Row>
                                                    <Col lg={'3'} className={classes.sliderCol}>
                                                        <div className={classes.sliderCon}>
                                                            <Slider {...settings}>
                                                                {singleProduct.images.map((item, idx) => {
                                                                    return (
                                                                        <div className={classes.sliderImgContainer} onClick={() => { sliderController(item) }}>
                                                                            <img src={item} alt="SliderImg" />
                                                                        </div>
                                                                    )
                                                                })}
                                                            </Slider>
                                                        </div>
                                                    </Col>
                                                    <Col lg={'9'} className={classes.imgCol}>
                                                        <div className={classes.imgCon}>
                                                            <ReactImageMagnify {...{
                                                                smallImage: {
                                                                    alt: 'Small Imgae',
                                                                    isFluidWidth: true,
                                                                    src: displayImage
                                                                },
                                                                largeImage: {
                                                                    alt: '',
                                                                    src: displayImage,
                                                                    width: 1024,
                                                                    height: 576
                                                                },
                                                                isHintEnabled: true
                                                            }} />
                                                        </div>
                                                        <div className={classes.imgConResponsive}>
                                                            <Magnifier src={displayImage}></Magnifier>
                                                        </div>
                                                    </Col>
                                                    <Col className={classes.slider2Col}>
                                                        <div >
                                                            <Slider {...settings2}>
                                                                {singleProduct.images.map((item, idx) => {
                                                                    return (
                                                                        <div className={classes.sliderImgContainer} onClick={() => { sliderController(item) }}>
                                                                            <div className={classes.imgContainer}>
                                                                                <img src={item} alt='slider images'></img>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </Slider>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg='5'>
                                        <div className={classes.descriptionDiv}>
                                            {
                                                singleProduct.images.length > 0 &&
                                                <>
                                                    <p><span className={classes.overprice}>Mrp: <strike>{singleProduct.overprice}</strike></span></p>
                                                    <p className={classes.price}>Price: <span className={classes.priceSpan}>{singleProduct.price}</span></p>
                                                    {(!singleProduct.stock || singleProduct.stock === 'Out of Stock') && <div className={classes.outOfStockMsg}>This Item is not Available</div>}
                                                    <article style={{ fontSize: '18px' }}>You Save: {singleProduct.overprice - singleProduct.price} </article>
                                                    <div className={classes.offerDiv}>
                                                        {singleProduct.coupon && <span style={{ marginLeft: 0 }}><i class="fas fa-gift"></i> {singleProduct.coupon.length} Offers</span>}
                                                        {singleProduct.emi && <span><i class="fas fa-rupee-sign"></i>{" EMI Available"}</span>}
                                                        {<span><i class="fas fa-box-open"></i>Unboxing</span>}
                                                    </div>

                                                    <div className={classes.descImgDiv}>
                                                        {singleProduct.categories === 'Cycle' &&
                                                            <>
                                                                <div className={classes.imgDescDiv}><img src={frame} alt="frame" />{singleProduct['frame material']}</div>
                                                                <div className={classes.imgDescDiv}><img src={brake} alt="brake" />{singleProduct['brakes']}</div>
                                                                <div className={classes.imgDescDiv}><img src={wheel} alt="wheel" />{singleProduct['wheel size']}</div>
                                                                <div className={classes.imgDescDiv}><img src={rear} alt="gear" />{singleProduct['no. of gears']}</div>
                                                            </>
                                                        }
                                                        {
                                                            singleProduct.categories !== 'Cycle' &&
                                                            <>
                                                                <div className={classes.imgDescAcDiv}><i class="far fa-circle"></i>{singleProduct.descPoint1}</div>
                                                                <div className={classes.imgDescAcDiv}><i class="far fa-circle"></i>{singleProduct.descPoint2}</div>
                                                                <div className={classes.imgDescAcDiv}><i class="far fa-circle"></i>{singleProduct.descPoint3}</div>
                                                                <div className={classes.imgDescAcDiv}><i class="far fa-circle"></i>{singleProduct.descPoint4}</div>

                                                            </>
                                                        }

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">

                                                            <div className={classes.inputDivs}>
                                                                <div><Form.Label>Pincode to deliver</Form.Label>
                                                                    <Form.Control ref={inputRef} type="text" placeholder="Enter Pincode" />
                                                                </div>
                                                                <div><Form.Label>Quantity</Form.Label><Form.Control ref={quantityRef} type="number" placeholder="1" /></div>
                                                            </div>
                                                            <Button onClick={buttonHandler} className={classes.btnContainer} style={{ marginTop: '10px' }}>{pincodehandler === false ? <Spinner animation="border" role="status">
                                                            </Spinner> : 'Check Me!'}</Button>
                                                            {pincodehandler !== 'false' && <Alert style={{ position: 'static' }} className={'mt-3'} variant={pincodehandler.status === 'suc' ? 'info' : 'danger'}>{pincodehandler.message}</Alert>}
                                                        </Form.Group>

                                                        {/* <ButtonGroup className='mt-3'> */}

                                                        {
                                                            !(!singleProduct.stock || singleProduct.stock === 'Out of Stock') &&
                                                            <>
                                                                <button onClick={cartHandler} className={classes.btnContainer}>{!addToCart && 'Add To Cart'}{addToCart && <i class="fas fa-check"></i>}</button>
                                                                <button onClick={buyHandler} className={classes.btnContainer} style={{ marginLeft: '20px' }} >{'Buy Now'}</button>
                                                            </>
                                                        }

                                                        {
                                                            (!singleProduct.stock || singleProduct.stock === 'Out of Stock') &&
                                                            <>
                                                                <button disabled className={classes.btnDiv}>{'Add to Cart'}</button>
                                                                <button disabled className={classes.btnDiv} style={{ marginLeft: '20px' }}>{'Buy Now'}</button>
                                                            </>
                                                        }

                                                        {/* </ButtonGroup> */}

                                                        {deliverable && <Alert style={{ position: 'static' }} variant={deliverable === 'noInput' ? 'danger' : 'warning'} className={'mt-3'}>Check Pincode First</Alert>}

                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <ServicesDiv></ServicesDiv>
                            <MoreProducts></MoreProducts>
                            <Reviews></Reviews>
                        </div>
                    </>
                }
            </>
        )
    }
}



export default ProductDisplayBig