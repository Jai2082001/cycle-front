import classes from './Backdrop.module.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/UIslice';
const Backdrop = () => {
    const dispatch = useDispatch();
    return (
        <div className={classes.parentDiv} onClick={()=>{dispatch(uiActions.changeDisplay(false))}}>
            
        </div>
    )
}

export default Backdrop;