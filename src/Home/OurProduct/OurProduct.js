import classes from './OurProduct.module.css'
import SmallProductContainer from '../../ProductDisplay/SmallProductDisplayContainer/SmallProductContainer';
import SmallProductDisplay from '../../ProductDisplay/SmallProductDisplay/SmallProductDisplay'
import { useEffect, useState } from 'react';
const OurProduct = ({ changeLoader }) => {

    const [effect, changeUseEffect] = useState();
    const [product, changeProducts] = useState();

    useEffect((state) => {
        changeLoader(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplayLatest`).then((response) => {
            return response.json()
        }).then((response) => {
            changeProducts(response)
            changeUseEffect(true)
            changeLoader(false)
        })
    }, [])

    return (
        <div className={classes.ourProductDiv}> 
            <h1>Our Latest Products</h1>
            {effect &&
                
                <div className={classes.smallProductContainer}>
                    <SmallProductContainer products={product}></SmallProductContainer>
                </div>
            }
                
            </div>
    )
}

export default OurProduct