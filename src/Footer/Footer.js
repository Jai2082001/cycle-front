import { Row, Col } from 'react-bootstrap';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.footerDiv}>
            <div className={classes.descriptionDiv}>
                <Row>
                <Col xs={'12'} md={'9'}>
                <div className={classes.description}>
                   <p className='text-lg font-semibold'> ChooseMyBicycle.com is an e-commerce portal exclusive for buying bicycles, accessories and apparels. One can pick from our wide range of top Indian and international cycling brands with also kids and toddler specific range of bicycles. Book your bicycle and sit back and relax as your dream bicycle will be delivered at your door step in a unique ready to ride box. It is also an online knowledge portal built with the purpose of helping consumers, in the market to buy a cycle , pick the right cycle based on their needs. The portal offers various tools such as a "Help Me Choose" option for amateurs looking to start cycling. Besides this, there are event listings, expert reviews, knowledge articles, tips and advice. We at ChooseMyBicycle.com will also have our own cycling events across India for all types of cyclists from amateur short weekend rides to professional race for the experts.</p>
                </div>
                </Col>
                {/* sd */}
                <Col xs={'12'} md={'3'}>
                <div className={classes.socialMediaDiv}>
                    <h4>Follow Us On Social Media</h4>
                    <div className={classes.mainSocialDiv}>
                        <i class="fab fa-facebook" style={{marginLeft: '0'}}></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                </Col>
                </Row>
            </div>   
        </div>
    )
}

export default Footer