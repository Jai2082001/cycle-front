import anotherImg from '../images/anotherImg.jpg'
import classes from './SliderSecond.module.css'
import Slider from 'react-slick'

const SliderSecond = () => {

   var settings = {
      dots: true,
      infinite: false,
     speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
     initialSlide: 0,
      className: 'widthFull',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className={ classes.parentDiv }>
        <div className={ classes.sliderContainer }>
        <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <div className={classes.imgContainer} key={ item }>
                  <div>
                  <img src={anotherImg} alt="Slide" />
                  </div>
                </div>
              )
            }) }
        </Slider>
      </div>
        </div>
    )
}

export default SliderSecond;


/* 
        <Carousel variant='dark' >
<Carousel.Item >
    <div className={'sliderSecondDiv'}>                    
    <img
      className="d-block w-100"
      src={anotherImg}
      alt="First slide"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item >
   <div className={'sliderSecondDiv'}>
    <img
      className="d-block w-100"
      src={anotherImg}
      alt="Second slide"
    />
    </div>
    
  </Carousel.Item>
<Carousel.Item >
    <div className={'sliderSecondDiv'}>
    <img
      className="d-block w-100"
      src={anotherImg}
      alt="Third slide"
    />
    </div>
    
                </Carousel.Item>
                <Carousel.Item >
    <div className={'sliderSecondDiv'}>
    <img
      className="d-block w-100"
      src={anotherImg}
      alt="Third slide"
    />
    </div>
    
  </Carousel.Item>
</Carousel> */