import classes from './BackgroundImg.module.css'
import { ButtonGroup, Button } from 'react-bootstrap';
import image from '../images/videos/emotorad-t-rex.jpg';
const BackgroundImg = () => {
    return (
        <div className={classes.backgroundContainer} style={{backgroundImage: `url("${image}")` }}>
            <div className={classes.contentContainer}>
                <div className={ classes.contentDiv }>
                    <h3>Emotorad TRex</h3>
                    <p>Battery: 7.5Ah Li-Lion   Mileage Pedal Assist: 50kms </p>
                </div>
                <div className={classes.buttonContainer }>
                    <ButtonGroup>
                        <Button variant='light'>Explore E-Bikes</Button>
                        <Button variant='dark' className='ms-2'>View Emotorad Trex</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default BackgroundImg