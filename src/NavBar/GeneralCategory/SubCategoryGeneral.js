import classes from './SubCategoryGeneral.module.css'
import { useHistory } from 'react-router';


const SubCategoryGeneral = ({heading , data, parentName, changeLocation}) => {

    const history = useHistory()

    const subCategoryHandler = (route) => {
        history.push(route);
        changeLocation((prevState)=>{
            return prevState + 1
        })
    }


    if(heading === 'Brand'){
        return (

        
            <div className={classes.subContainer}>
                <p>{heading}</p>
                {data && data.map((singleItem)=>{
                    return (
                        <p onClick={()=>{subCategoryHandler(`/productDisplay/${parentName}/brand/${singleItem}`)}}>{singleItem}</p>
                    )
                })}
            </div>
        )
    }
    else{
        return (
            <div className={classes.subContainer}>
                {data && data.map((singleItem)=>{
                    return (
                        <p onClick={()=>{subCategoryHandler(`/productDisplay/${parentName}/category/${singleItem.name}`)}}>{singleItem.name}</p>
                    )
                })}
            </div>
        )
    }
    
}

export default SubCategoryGeneral