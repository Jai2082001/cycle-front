import classes from './MoreProducts.module.css'
import { useEffect, useState } from 'react'
import SmallDisplayContainer from '../../ProductDisplay/SmallProductDisplayContainer/SmallProductContainer'


const MoreProducts = () => {
    
    const [effectState, setEffectState] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplayLimit`, {
            headers: {
                limit: 3,

            }
        }).then((response) => {
            return response.json()    
        }).then((product) => {
            console.log(product)
            setProducts(product)
            setEffectState(true)
        })
    }, [])

    return (
        <div className={classes.moreProducts}>
            <h1>More Products Like This</h1>
            {products &&
            <div>
                <SmallDisplayContainer products={products}></SmallDisplayContainer>    
            </div>}
        </div>
    )
}

export default MoreProducts