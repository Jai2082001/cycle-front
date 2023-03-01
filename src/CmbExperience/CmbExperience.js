import classes from './CmbExperience.module.css'
import { Button } from 'react-bootstrap'

const CmbExperience = () => {
    return (
        <div className={ classes.cmbDiv }>
            <h2>Learn About CMB's Anxiety Free Buying Experience</h2>
           <Button>Watch Video <i class="far fa-play-circle"></i></Button>
        </div>
    )
}
export default CmbExperience