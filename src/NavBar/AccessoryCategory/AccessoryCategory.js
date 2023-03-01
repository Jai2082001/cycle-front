import { useEffect } from 'react'
import Slide from 'react-reveal/Slide'
import classes from './AccessoryCategory.module.css'
import SubAccessoryCategory from './SubAccessoryCategory/SubAccessoryCategory'

const AccessoryCategory = ({brand, changeLocation}) => {
    let riderOption = [
        { label: 'Backpacks', value: 'Backpacks' },
        { label: 'Compression and Inner Wear', value: 'Compression and Inner Wear' },
        { label: 'Eyewear', value: 'Eyewear' },
        {label: 'Face Masks', value: 'Face Masks'},
        { label: 'Footwear', value: 'Footwear' },
        { label: 'Gloves', value: 'Gloves' },
        { label: 'Helmets', value: 'Helmets' },
        { label: 'Jerseys', value: 'Jerseys' },
        { label: 'Recovery and Body Care', value: 'Recovery and Body Care' },
        { label: 'Shorts', value: 'Shorts' },
        {label: 'T-Shirts', value: 'T-Shirts'}
    ]
    let cycleOptions = [
        { label: 'Bags and Car Racks', value: 'Bags and Car Racks' },
        { label: 'Bells and Horns', value: 'Bells and Horns' },
        { label: 'Bottles and Bottle Cages', value: 'Bottles and Bottle Cages' },
        { label: 'Components and Spares', value: 'Components and Spares' },
        { label: 'GPS and Cyclocomputers', value: 'GPS and Cyclocomputers' },
        { label: "Lights", value: 'Lights' },
        { label: "Locks", value: "Locks" },
        { label: "Maintenance and Care", value: 'Maintenance and Care' },
        { label: "Mudguards and Protection", value: "Mudguards and Protection" },
        { label: 'Others', value: 'Other' },
        { label: 'Pumps', value: 'Pumps' },
        { label: 'Stands', value: 'Stands' },
    ]

    return (
        <Slide>
            <div style={{marginTop: '0px'}}>
                
                 <div style={{marginTop: '0px'}} className={classes.accessoryDiv}>
                    <SubAccessoryCategory changeLocation={changeLocation} head={'Rider'} content={riderOption}></SubAccessoryCategory>
                    <SubAccessoryCategory changeLocation={changeLocation} head={'Cycle'} content={cycleOptions}></SubAccessoryCategory>
                    <SubAccessoryCategory changeLocation={changeLocation} head={'Brands'} content={brand}></SubAccessoryCategory>
                </div>
                
            </div>
        </Slide>
    )
}

export default AccessoryCategory