import classes from './GeneralCategory.module.css';
import Slide from 'react-reveal/Slide';
import SubCategoryGeneral from './SubCategoryGeneral';

const GeneralCategory = ({heading, changeLocation, categories, brand}) => {


    const dataArray = categories.filter((singleItem)=>{
        return singleItem.parentName === heading.name
    })

    return(
    <Slide>
    <div className={classes.subCategoryContainer}>
        {
        dataArray[0] && 
        
        <SubCategoryGeneral changeLocation={changeLocation} parentName={dataArray[0].parentName} heading={'Category'} data={dataArray}></SubCategoryGeneral> 
        }
        
    </div>
    </Slide> 
    )

}

export default GeneralCategory