import classes from './ServicesDiv.module.css';
import { Row, Col } from 'react-bootstrap';
import {Icon} from 'semantic-ui-react'
const ServicesDiv = () => {
    return (
        <div className={classes.serviceDiv}>
            <p>Now Buy Cycles Online With Trust</p>
            <div className={classes.showcaseDiv}>
                <div className={classes.displayContainer}>
                    <Row>
                        <Col xs={'12'} lg={'4'}>
                        <div className={classes.frameContainer}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bL0oWrVuH10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Col>
                        <Col xs={'12'} lg={'8'} className={classes.showContainers}>
                            <Row>
                                <Row>
                                <Col xs={'12'} md={"3"}>
                                    <div className={classes.iconDescContainer}>
                                            <Icon style={{ fontSize: '50px' }} name='dropbox'></Icon>Ready to go
                                    </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='protect'></Icon>Safe {'&'} Secure
                                        </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='payment'></Icon>Safe Payment
                                        </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='tags'></Icon>Great Offers
                                        </div>
                                </Col>
                                </Row>
                                <Row>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}>
                                            <Icon style={{ fontSize: '50px' }} name='star'></Icon>Quality
                                        </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='call'></Icon>Sale Service
                                        </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='thumbs up outline'></Icon>Expert Staff
                                        </div>
                                </Col>
                                <Col xs={'12'} md={"3"}>
                                        <div className={classes.iconDescContainer}><Icon style={{fontSize: '50px'}} name='rupee'></Icon>Best Price
                                        </div>
                                </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ServicesDiv;