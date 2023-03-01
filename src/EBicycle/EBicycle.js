import NavBar from "../NavBar/NavBar"
import classes from './EBicycle.module.css'
import VideoDisplayer from "../VideoDisplayer/VideoDisplayer"
import BackgroundImg from "../BackgroundImg/BackgroundImg"
import ContentDisplayerImg from '../ContentDisplayer/ContentDisplayer'
import {Container, Button, Row, Col} from 'react-bootstrap'
import img1 from '../images/videos/section-3.jpg';
import img2 from '../images/videos/section-6.jpg';
import img3 from '../images/videos/throttle-mode.jpg';
import img4 from '../images/videos/ebikes-landing-jumbotron.jpg'
import Footer from '../Footer/Footer'


const EBicycle = () => {
    const videoLink = "https://choosemybicycle.s3.ap-south-1.amazonaws.com/video/e-bicycle-landing-top-video.mp4";
    const desc = 'The Time to Switch to Electric is Now'
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <VideoDisplayer desc={desc} videoLink={videoLink}></VideoDisplayer>
            </div>
            <div className={classes.contactUsDiv}>Like To Know More Contact Us</div>
            <BackgroundImg></BackgroundImg>
            {/* <ContentDisplayerImg></ContentDisplayerImg> */}
            <div className={classes.parentContainer}>
                <Row className={classes.displayContainers} style={{paddingTop: '20px'}}>
                    <Col xs={'12'} md={'4'} className={classes.contentDiv}>
                        <h2>Charge Your Battery Anywhere and Anytime</h2>
                        <p>The new range of electric bicycles gives you the flexibility of charging the battery using a regular plug point. Select models come with detachable batteries, that can be charged at the comfort of your home or office cabin.</p>
                    </Col>
                    <Col xs={'12'} md={ '8' }>
                        <div className={classes.imgContainer}>
                            <img src={img1}></img>
                        </div>
                    </Col>

                    <Col xs={'12'} md={ '7' }>
                        <div className={classes.imgContainer}>
                            <img src={img3}></img>
                        </div>
                    </Col>
                    <Col xs={'12'} md={'5'} className={classes.contentDiv}>
                        <h2>Charge Your Battery Anywhere and Anytime</h2>
                        <p>The new range of electric bicycles gives you the flexibility of charging the battery using a regular plug point. Select models come with detachable batteries, that can be charged at the comfort of your home or office cabin.</p>
                    </Col>
                    
                    <Col xs={'12'} md={ '7' } className={classes.contentDiv}>
                        <h2>Charge Your Battery Anywhere and Anytime</h2>
                        <p>The new range of electric bicycles gives you the flexibility of charging the battery using a regular plug point. Select models come with detachable batteries, that can be charged at the comfort of your home or office cabin.</p>
                    </Col>
                
                    <Col xs={'12'} md={'5'} >
                        <div className={classes.videoContainer}>
                            <video autoPlay muted playsInline src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/video/travelling-road-bg-video.mp4"></video>
                        </div>    
                    </Col>
                    <Col xs={'12'} md={ '7' }>
                        <div className={classes.imgContainer}>
                            <img src={img2} style={{height: '500px'}}></img>
                        </div>
                    </Col>
                    <Col xs={'12'} md={'5'} className={classes.contentDiv}>
                        <h2>Charge Your Battery Anywhere and Anytime</h2>
                        <p>The new range of electric bicycles gives you the flexibility of charging the battery using a regular plug point. Select models come with detachable batteries, that can be charged at the comfort of your home or office cabin.</p>
                    </Col>
                </Row>
            </div>

                <div className={classes.pictureContainer} style={{backgroundImage: `url(${img4})`}}>
                    <p>Ready To Change The Future </p>
                 </div>
            
            <Footer></Footer>

            </div>
        
    )
}

export default EBicycle