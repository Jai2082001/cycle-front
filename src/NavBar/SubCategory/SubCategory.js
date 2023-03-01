import classes from './SubCategory.module.css'
import {NavLink} from 'react-router-dom'
import { useHistory } from 'react-router'


const SubCategory = ({ heading, data, changeLocation }) => {
    let updatedString = heading
    let firstChar = heading.charAt(0);
    firstChar = firstChar.toLowerCase();
    updatedString = firstChar + updatedString.slice(1)
    const history = useHistory()
    
    const subCategoryHandler = (route) => { 
        history.push(route)
        changeLocation((prevState)=>{
            return prevState + 1
        })
    }

    if(heading === 'Brand'){

        return(
            <div className={classes.subContainer}>
                <h3>{heading}</h3>
                {data && data.map((singleItem)=>{
                    return <p onClick={()=>{
                        subCategoryHandler(`/productDisplay/cycles/brand/${singleItem}`)
                    }}>{singleItem}</p>
                })}
            </div>
        )
    }
    
    else if(heading === 'Category'){

        let newArray = []
        if(data){
            newArray = data.filter((singleItem)=>{
                return singleItem.parentName === 'Cycle'
            })
        }
        
        return (
            <div className={classes.subContainer}>
                <h3>{heading}</h3>
                {newArray.map((singleItem)=>{
                    return (<p onClick={()=>{subCategoryHandler(`/productDisplay/cycles/${updatedString}/${singleItem.name}`)}}>{singleItem.name}</p>)
                })}
            </div>
        )
    }else{   
        return (
            <div className={classes.subContainer}>
                <h3>{heading}</h3>
                {data && data.map((singleItem) => {
                    return <p onClick={()=>{subCategoryHandler(`/productDisplay/cycles/${updatedString}/${singleItem.name}`)}}>{ singleItem.name }</p> 
                })}
            </div>
        )
    }
  
}
export default SubCategory