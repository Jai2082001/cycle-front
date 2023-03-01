import classes from './SingleCategory.module.css'

const SingleCategory = ({img, name}) => {
    return (
        <div className={classes.imgContainer}>
            <div className={classes.imgDiv}>
            <img src={img}>
            </img>
            </div>
            <p>{name}</p>
        </div>
    )    
}

export default SingleCategory