import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import SmallProductDisplayContainer from '../ProductDisplay/SmallProductDisplayContainer/SmallProductContainer';
import { useState } from 'react'
import AccessFilterBar from './AccessFilterBar/AccessFilterBar'



const ProductDisplayAccessories = (props) => {
    const [products, changeProducts] = useState([]);
    if (products[0]) {
        console.log(products[0].price)
    }

    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Row>
                <Col xs={'3'}>
                    <AccessFilterBar products={products} changeProducts={changeProducts}></AccessFilterBar>
                </Col>
                <Col xs={'9'}>
                    <SmallProductDisplayContainer products={products}></SmallProductDisplayContainer>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDisplayAccessories

