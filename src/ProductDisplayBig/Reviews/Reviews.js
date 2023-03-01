import classes from './Reviews.module.css'
import Slider from 'react-slick';
import { Card, Button } from 'react-bootstrap'

const Reviews = () => {

    const reviewArrayFirst = [
        { name: 'Mohit', desc: ' The frame of this bike is made of lightweight aluminum and is designed to be easy to fit. Its light weight makes it an excellent choice for a beginner. Its appearance is also fantastic.' },
        { name: 'Jaideep', desc: ' The frame of this bike is made of lightweight aluminum and is designed to be easy to fit. Its light weight makes it an excellent choice for a beginner. Its appearance is also fantastic.' },
        { name: 'Ankur', desc: 'I am writing this review after using it regularly for a month. Overall the cycle looks great in appearance. The build quality is good and features are perfect for fitness as well as long cyclings. The support and services after sales are the best in the market. Happy for this valuable product!' },
        {name: 'Lokesh', desc:'Very good fat bicycle. Quality is good and looks durable. Tyres are big almost same as 2 wheeler.'},
        { name: 'Dishu', desc: 'Excellent cycle . Effortless riding. I bought this cycle for my daughter and now started to use this single speed cycle and could achieve the same average speed of about 24-25 kmph for long rides up to 60 km . I am extremely satisfied and thinking of purchasing another one for my personal use. HIGHLY RECOMMENDED. Surely worth for its price.' },
        { name: 'Rahul', desc: 'Perfect cycle comfort ride pickup smooth I love this thank u so much' },
        { name: 'Ishan', desc: 'Nice one !!!!Appreciated by some of my friends as much easier to ride and most comfortable bicycle. Thankx for their work to build-up a good cycle' },
        { name: 'Dhruv', desc: 'Extremely Happy with their immediate response. They gave me the reason for the changed front mud guard and also gave the solution for the same.' },
        { name: 'Anurag', desc: 'Extremely Happy with their immediate response. They gave me the reason for the changed front mud guard and also gave the solution for the same.' },
        {name: 'Harsh', desc: 'Great Bike to ride. And great service thanku som much cycling hub'}
    ]

    const reviewArray = []

    for (let i = 0; i < 5; i++){
        let num = Math.floor(Math.random() * 10);
        reviewArray.push(reviewArrayFirst[num])
    }

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
            <h1>Our Customer's buying experience on Cycling Hub</h1>
             <div>
               
            <div className={ classes.reviewDivParentContaier }>
            <div className={classes.reviewDivContainer}>
            <Slider {...settings}>
                            
                {reviewArray.map((item) => {
                    return (
                        <div key={ item } className={classes.imgContainer}>
                        <Card className={classes.cardContainer} style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            {item.desc}
                            </Card.Text>
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

export default Reviews