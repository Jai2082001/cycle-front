import Slider from "react-slick";
import classes from './Reviews.module.css'
import { Card, Button } from 'react-bootstrap';
import img from '../images/userReview.jpg';

const Reviews = () => {
     const settings =  {
      dots: true,
      infinite: true,
      arrow: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true

          }
        },
        {
          breakpoint: 750,
          settings: {  
            slidesToShow: 1,
            initialSlide: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    
    return (
        <div className={classes.divReview}>
            <h3>Our Customer's buying experience on CMB</h3>
             <div>
               
            <div className={ classes.reviewDivParentContaier }>
            <div className={classes.reviewDivContainer}>
            <Slider {...settings}>
                            
                {[1, 2, 3, 4, 5].map((item) => {
                    return (
                        <div key={ item } className={classes.imgContainer}>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img src={img}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </div>        
                    )    
                }) }                        
            </Slider>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Reviews;


