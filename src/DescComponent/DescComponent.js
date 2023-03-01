import classes from './DescComponent.module.css'
import { Row, Col } from 'react-bootstrap';

const DescComponent = ({ Heading, SubHeads }) => {
    return (
        <div className={classes.descParentDiv}>
            <h1 className={classes.descHeading}>{Heading}</h1>
            <div className={classes.descDivParent}>
            <Row>
            {SubHeads.map((item) => {
                return (
                    <Col md={'6'} lg={ '3'} xs>
                    <div className={classes.descDiv}>
                        <h2 className={classes.descTitle}>{item.title}</h2>
                        <div className={classes.descDesc}>{item.desc}</div>
                    </div>
                    </Col>
                )
            })}
            </Row>
            </div>
        </div>
    );
}

export default DescComponent