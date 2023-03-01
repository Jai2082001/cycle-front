import classes from './CycleDisplay.module.css'
import { useHistory } from 'react-router'
import { Button, ButtonGroup } from 'react-bootstrap'


const CycleDisplay = ({cycle}) => {

    const history =  useHistory();

    const btnGroup = () => {
        history.push(`/singleDisplay/${cycle.name}`)
    }

    return (
        <div className={classes.cycleContainer}>
            <div className={classes.contentContainer}>
                <h3>{cycle.name}</h3>
                <h4><i class="fas fa-rupee-sign"></i> {cycle.price}</h4>
                <ButtonGroup onClick={btnGroup} className={classes.btnGroupCart}>
                <Button className={classes.iconBtn}><i class="fas fa-shopping-bag"></i></Button>
                <Button className={classes.cartBtn}>View Product</Button>
                </ButtonGroup>
            </div>
            <div className={classes.imgContainer}>
                <img src={cycle.displayimages}></img>
            </div>
        </div>
    )
}

export default CycleDisplay