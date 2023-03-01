import { NavLink } from 'react-router-dom'
import {useEffect, useState} from 'react'
import classes from './ProductDisplayer.module.css'
import Slider from 'react-slick';
import SmallProductContainer from '../../ProductDisplay/SmallProductDisplayContainer/SmallProductContainer'
import {Row, Col} from 'react-bootstrap'
import SmallProductDisplay from '../../ProductDisplay/SmallProductDisplay/SmallProductDisplay'


const ProductDisplayer  = () => {
    
const [products, changeProducts] = useState([]);

useEffect(()=>{
    fetch(`${process.env.REACT_APP_FETCH_LINK}/randomDisplay`, {
        headers: {
            category: 'cycle',
            numbers: '5'
        }
    }).then((response)=>{
        return response.json()
    }).then((response)=>{
        changeProducts(response)
    })
}, [])

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  
  
  function SampleNextArrow(props){    
      const { className, style, onClick } = props;
      return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
      />
      );
  }
  

    const [categories, changeCategories] = useState([]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:  4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className={classes.productContainer}>
        <h2 style={{textAlign: 'left'}}>Our Top Products</h2>
        <hr></hr>

        <Slider {...settings}>
            {products.map((singleItem)=>{
                return <SmallProductDisplay {...singleItem}></SmallProductDisplay>
            })}
        </Slider>
        
      </div>
    );
  
}
export default ProductDisplayer

