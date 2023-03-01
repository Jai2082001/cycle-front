import classes from './Banner.module.css'
import {Row, Col, Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'


const Banner = () => {
    
    const [images, changeImages] = useState({0: 'https://opencart.mahardhi.com/MT03/sporty/01/image/catalog/banners/banner1.jpg', 1: 'https://opencart.mahardhi.com/MT03/sporty/01/image/catalog/banners/banner1.jpg', 2: 'https://opencart.mahardhi.com/MT03/sporty/01/image/catalog/banners/banner1.jpg'});
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/bannerImg3`).then((response)=>{
            return response.json()
        }).then((response)=>{
            changeImages(response.images)
        })

    }, [])

    
    return (
        <Container className={classes.parentDiv}>
        <Row>
        <div className={classes.bannerParentDiv}>
        <div className={classes.bannerDiv}>
                <img alt='img1' src={images[0]}></img>
                <div className={classes.contentDivs}>
                    <h1>Ride the Road</h1>
                    <h2>Best Deal Only</h2>
                </div>
        </div>
        </div>
        </Row>
        <Row> 
            <Col xs={'5'}>
                <div className={classes.imgContentContainer}>
                    <img alt='img2' src={images[1]}></img>
                    <div className={classes.contentDiv}>
                        <h1>Sports Cycles</h1>
                        <p>New Collection</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </Col>
            <Col xs={'7'}>
                <div className={classes.imgContentContainer}>
                    <img alt='img3' src={images[2]}></img>
                    <div className={classes.contentDiv}>
                        <h1>Have Some Accessories</h1>
                        <p>New Collection</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Banner