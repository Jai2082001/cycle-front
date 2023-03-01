import classes from './Footer.module.css'
import {Row, Col, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo3 from '../images/sportsLogoRemoveBg.png'
import Logo1 from '../images/logoTissot.png'

const Footer = () => {
    return (
        
        <div className={classes.footer}>
            <Row className='justify-content-center'>            
            <Col xs={'12'} md={'3'} sm='6' className={classes.linkDiv}>
            <div className={classes.childFooterDiv}>
                <div className={classes.logoContainer}>
                    <img src={Logo1}></img>        
                </div>
                <h3 style={{marginTop: '20px'}}>Get the Best Deal Here</h3>
                        </div>
            </Col>
            <Col className={classes.linkDiv}  xs={'12'} md={'2'} sm='6'>
            <div className={classes.childFooterDiv}>
                <h3>Products</h3>
                <h4>Cycles</h4>
                <h4>Accessories</h4>
            </div>  
            </Col>
            <Col className={classes.linkDiv}  xs={'12'} md={'2'} sm='6' >     
            <div className={classes.childFooterDiv}>
                <h3>Quick Links</h3>
                <h4><NavLink to='/aboutus'>About Us</NavLink></h4>
                <h4><NavLink to='/contactus'>Contact Us</NavLink></h4>
            </div>  
            </Col>
             <Col className={classes.linkDiv}  xs={'12'} md={'2'} sm='6' >       
            <div className={classes.childFooterDiv}>
                <h3>Support</h3>
                <h4>Frequently Asked Questions</h4>
                <h4>Terms and Conditions</h4>
                <h4>Privacy Policy</h4>
                <h4>Report a Payment Issue </h4>
            </div>  
            </Col>
            <Col className={classes.linkDiv}   xs={'12'} md={'3'} sm='6'>
            <div className={classes.childFooterDiv}>
                <h3>Our Handles</h3>
                <h4>Facebook</h4>
                <h4>Twitter</h4>
                <h4>Instagram</h4>            
            </div> 
            </Col> 
            </Row>
            </div>
    )

}

export default Footer