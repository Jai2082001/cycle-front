import classes from './SubCategoryContainer.module.css'
import SubCategory from '../SubCategory/SubCategory'
import Slide from 'react-reveal/Slide'

const SubCategoryContainer = ({brand, categories, changeLocation}) => {
    const dataArray = [{name: 'Male'}, {name: 'Female'},{name: 'Children'} ]
    return (
        <Slide opposite>
        <div className={classes.accessoryDiv}>
            <Slide opposite>
            <div className={classes.subCategoryContainer}>
                <SubCategory changeLocation={changeLocation} heading={'Users'} data={dataArray}></SubCategory>
                <SubCategory changeLocation={changeLocation} heading={'Category'} data={categories}></SubCategory>
            </div>
            </Slide>
        </div>
        </Slide>
    )   
}

export default SubCategoryContainer