import {Row, Col} from 'react-bootstrap'
import classes from './BannerWithOneProduct.module.css'
import ProductDisplaySmall from './ProductDisplaySmall/ProductDisplaySmall'
import {useEffect, useState} from 'react'

const BannerWithOneProduct = ( ) => {

    const [images, changeImages] = useState({0: 'https://opencart.mahardhi.com/MT03/sporty/01/image/catalog/banners/banner1.jpg', 1: 'https://opencart.mahardhi.com/MT03/sporty/01/image/catalog/banners/banner1.jpg'})
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/bannerImg2`).then((response)=>{
            return response.json();
        }).then((response)=>{
            changeImages(response.images)
        })
    }, [])

    return (
        <Row className={classes.divContainer}>

            <Col xs={'6'} className={classes.backgroundDivRes}>
            <div style={{padding: '10px !important'}}>
            <img src={images[0]}></img>
                <div className={classes.contentDiv}>
                    <p>Gear Cycle </p>
                    <p className={classes.smallText}>Get Up tp 50% off</p>
                    <button>Shop Now</button>
                </div>
            </div>
            </Col>

            <Col xs={'5'} className={classes.backgroundDiv}>
                <img src={images[0]}></img>
                <div className={classes.contentDiv}>
                    <p>Gear Cycle </p>
                    <p className={classes.smallText}>Get Up tp 50% off</p>
                    <button>Shop Now</button>
                </div>
            </Col>
            <Col xs={'6'} className={classes.anotherResponsive} style={{padding: '10px !important'}}>

                <div className={classes.imgContainer}>
                <img src={images[1]}></img>
                <div className={classes.contentDiv}>
                    <p>Gear Cycle </p>
                    <p className={classes.smallText}>Get Up tp 50% off</p>
                    <button>Shop Now</button>
                </div>
                </div>
                    
            </Col>
            <Col xs={'7'} className={classes.responsive}>
                <ProductDisplaySmall></ProductDisplaySmall>
            </Col>
        </Row>
    )
}

export default BannerWithOneProduct