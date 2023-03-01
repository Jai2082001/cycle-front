import Backdrop from './Backdrop'
import classes from './Modal.module.css'
const Modal = (props) => {

    console.log(props)
    return (
        <>
        <Backdrop></Backdrop>
        <div className={classes.parentDiv}>
            {props.children}
        </div>
        </>  
    )
}

export default Modal