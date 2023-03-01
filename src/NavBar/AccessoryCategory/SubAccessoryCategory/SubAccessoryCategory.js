import classes from './SubAccessoryCategory.module.css'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import { useLocation, useHistory } from 'react-router'


const SubAccessoryCategory = ({head, content, changeLocation}) => {
    
    const history = useHistory();

    const locationHandler = (route) => {
        history.push(route)
        changeLocation((prevState)=>{
            return prevState + 1
        })
    
    }

    if(head === 'Brands'){
        return (
            <div className={classes.subAccessDiv}>
                <h3>{`${head}`}</h3>
                {content && content.map((singleItem)=>{
                    return (
                        <p onClick={()=>{locationHandler(`/productDisplay/accessories/brand/${singleItem}`)}} >{singleItem}</p>
                    )
                })}
            </div>
        )
    }
    else if(head === 'Rider'){
        return (
            <div className={classes.subAccessDiv}>
                <h3>{`${head}`}</h3>
                {content && content.map((singleItem)=>{
                    return (
                        <p onClick={()=>{locationHandler(`/productDisplay/accessories/riderType/${singleItem.label}`)}} >{singleItem.label}</p>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div className={classes.subAccessDiv}>
                <h3>{`${head}`}</h3>
                {content && content.map((singleItem)=>{
                    return (
                        <p onClick={()=>{locationHandler(`/productDisplay/accessories/cycleType/${singleItem.label}`)}} >{singleItem.label}</p>
                    )
                })}
            </div>
        )
    }
}

export default SubAccessoryCategory