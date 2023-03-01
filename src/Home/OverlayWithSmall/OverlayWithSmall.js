import classes from './OverlayWithSmall.module.css'
import { useEffect, useState } from 'react'
import SmallDisplay from './SmallDisplay/SmallDsiplay'
import {Row, Col} from 'react-bootstrap'
import Slider from 'react-slick'


const OverlayWithSmall = () => {

    const reviewArrayFirst = [
        { name: 'Dishu',img: 'https://opencart.mahardhi.com/MT03/sporty/01/image/cache/catalog/testimonial/1-60x60.jpg',  desc: 'Excellent cycle . Effortless riding. I bought this cycle for my daughter and now started to use this single speed cycle and could achieve the same average speed of about 24-25 kmph for long rides up to 60 km . I am extremely satisfied and thinking of purchasing another one for my personal use. HIGHLY RECOMMENDED. Surely worth for its price.', post: 'Customer' },
        { name: 'Rahul',img: 'https://opencart.mahardhi.com/MT03/sporty/01/image/cache/catalog/testimonial/1-60x60.jpg',  desc: 'Perfect cycle comfort ride pickup smooth I love this thank u so much', post: 'Customer' },
        { name: 'Ishan',img: 'https://opencart.mahardhi.com/MT03/sporty/01/image/cache/catalog/testimonial/1-60x60.jpg',  desc: 'Nice one !!!!Appreciated by some of my friends as much easier to ride and most comfortable bicycle. Thankx for their work to build-up a good cycle', post: 'Customer' },
        { name: 'Dhruv',img: 'https://opencart.mahardhi.com/MT03/sporty/01/image/cache/catalog/testimonial/1-60x60.jpg',  desc: 'Extremely Happy with their immediate response. They gave me the reason for the changed front mud guard and also gave the solution for the same.', post: 'Customer' },
       
    ]

    
    const [data, changeData] = useState([])
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/randomDisplay`, {
            headers: {
                numbers: 6
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            changeData(response);
        })
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [   
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 1,
                slidesPerRow: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesPerRow: 1,  
                dots: true,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesPerRow: 1,
                dots: true,
                infinite: true,
                rows: 1
              }
            }
          ]
      };

      const settigs2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }



    return (
        <div className={classes.overlayDiv}>
            <div className={classes.itemsContainer}>
                <Row>
                
                    <Col xs={'12'} xl={'7'} className={classes.sliderContainer}>
                        
                        
                        <Slider {...settings} className={classes.sliderDiv}>
                        {
                            data.map((singleItem)=>{
                                return (
                                    <div className={classes.singleItem}>
                                        <SmallDisplay item={singleItem}></SmallDisplay>
                                    </div>
                                )
                            })
                        }
                        </Slider>
                    </Col>
                    <Col xs={'12'} xl='5' >
                        <div className={classes.reviewsDiv}>
                        <div>
                            <Slider {...settigs2}>
                                {reviewArrayFirst.map((singleItem)=>{
                                    return (
                                    <div className={classes.reviewContainer}>
                                        
                                        <div className={classes.iconContainer}>
                                            <i class="fas fa-comments"></i>
                                            <img alt='adad' src={singleItem.img}></img>
                                        </div>
                                        <div className={classes.descDiv}>
                                            <p>{singleItem.desc}</p>
                                            <p className={classes.name}>{singleItem.name}</p>
                                            <p className={classes.post}>{singleItem.post}</p>
                                        </div>    
                                    </div>)
                                })}
                            </Slider>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default OverlayWithSmall