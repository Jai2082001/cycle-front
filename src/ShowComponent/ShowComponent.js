import classes from './ShowComponent.module.css'
import anotherImg from '../images/mobileShopCycle.jpg'

const ShowComponent = () => {
    return (
        <div className={ classes.showContainer } style={{backgroundImage: `url(${anotherImg})`}}>
            <h2>Shop Bicycles</h2>
            <div className={classes.parentButtonDiv}>
            <div className={ classes.buttonDiv }>
                <button>Shop Now</button><i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default ShowComponent