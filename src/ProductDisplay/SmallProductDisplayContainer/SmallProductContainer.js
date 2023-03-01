import classes from './SmallProductContainer.module.css'
import SmallProductDisplay from '../SmallProductDisplay/SmallProductDisplay'
import { Row, Col, Spinner } from 'react-bootstrap';
import {  useState } from 'react';
import Fade from 'react-reveal/Fade'


const SmallProductContainer = ({products}) => {
    // const [products, changeProducts] = useState([])

    const [loading, changeLoading] = useState(false);    
    console.log(products)
    
    const array = [1,2,3,4,5,6]

    return (
        <div className={classes.singleProductContainer }>
            <Row>
            {products.map((singleProduct)=> {
                return (
                    <Col className={classes.smallProductDisplay} xs={'12'} md={'4'} sm='6'>
                        <Fade>
                            <SmallProductDisplay {...singleProduct}></SmallProductDisplay>
                        </Fade>
                    </Col>
                )
            })}                
            </Row>
        </div>
    )
}

export default SmallProductContainer

