import { Carousel } from "react-bootstrap";
import classes from './Slider.module.css'
import imageOne from '../images/img.jpg'
import SliderSlick from "react-slick";
import {useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Slider.css'


const Slider = () => {

  const [slider, changeSlider] = useState([])
  const history = useHistory()
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_FETCH_LINK}/imgSliderDisplay`).then((response)=>{
      return response.json()
    }).then((response)=>{
      changeSlider(response.images)
    })
  }, [])
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />

      
    );
  }
  
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
  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true

  };

  const changeHandler = (singleItem) => {
    history.push(`/singleDisplay/${singleItem.product}`)
  }
  
  
  return (
      <div className={classes.compoBack}>
        <div className={'name'}>
      <SliderSlick {...settings}>
        {slider.map((singleItem)=>{
          return ( 
            <img
              onClick={()=>{changeHandler(singleItem)}}
              className={classes.imgContainer}
              src={singleItem.img}
              alt="First slide"
            />       
            )
        })}
      </SliderSlick>
      </div>
      </div>
    )
}

export default Slider


// <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src={imageOne}
//       alt="First slide"
//     />
    
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src={imageOne}
//       alt="Second slide"
//     />
    
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//         src={ imageOne  }
//       alt="Third slide"
//     />
    
//   </Carousel.Item>