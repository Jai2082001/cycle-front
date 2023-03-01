import classes from './ProductDispalySmall.module.css'
import {useEffect, useState} from 'react'
import Slider from 'react-slick';
import CycleDisplay from '../CycleDisplay/CycleDisplay'


const ProductDisplaySmall = () => {

    const [random, changeRandom] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/randomDisplay`, {
            headers: {
                numbers: '3'
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            changeRandom(response)
        })
    }, [])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={classes.productContainer}>
            <h2 style={{marginLeft: '20px'}}>Deal of the Day</h2>
            <hr></hr>         
            <Slider {...settings}>
            {random.map((singleItem)=> {
                return <CycleDisplay cycle={singleItem}></CycleDisplay>
            })}
            </Slider>
        </div>
    )
}

export default ProductDisplaySmall