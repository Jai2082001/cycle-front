import classes from './CategoryCard.module.css'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick';
import SingleCategory from './SingleCategory/SingleCategory';
import {Row, Col} from 'react-bootstrap'

const CategoryCard = ({categories}) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 0,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              initialSlide: 0,
              slidesToScroll: 1
            }
          }
        ]
      };

      
      return (
      <div>
        <h2 style={{textAlign: 'left'}}>Our Products</h2>
        <hr></hr>
        <Row>
        <Slider {...settings}>
        {categories.map((singleItem)=> {
          let variable = singleItem.parentName;
          if(variable === 'Cycle'){
            variable = 'cycles'
          }
                return (
                <NavLink to={`/productDisplay/${variable}/category/${singleItem.name}`} className={classes.hoverClass}>
                    <SingleCategory name={singleItem.name} img={singleItem.img}></SingleCategory>
                </NavLink>
                )
            })}    
        </Slider>    
        </Row> 
        
      </div>
    );
  
}
export default CategoryCard

