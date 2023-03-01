import classes from './FilterBar.module.css'
import { Accordion } from 'react-bootstrap'
import ChildBar from './ChildBar/ChildBar'
import {useEffect, useState} from 'react'

const FilterBar = ({  categories, filterValue, changeFilter, stockType, products, changeProducts, changePrice }) => {

    console.log(stockType)
    console.log(filterValue);
    console.log(products)

    const [loading, changeLoading] = useState(false)
    useEffect(()=>{
        changeLoading(true)

        if(stockType !== 'cycles' && stockType !== 'access' ){
            fetch(`${process.env.REACT_APP_FETCH_LINK}/filterDesc`, {
                headers: {
                    'stockType': stockType,
                    filterValue: filterValue
                }
            }).then((response)=>{
                return response.json()
            }).then((response)=>{
                console.log(response)
                
                if(stockType !== 'Cycle' && stockType !== 'access'){
                    changeData(response.array);
                    changeLoading(false)
                }
            })
        }else{
            const array = ['Frame Material', 'Suspension', 'No. of Gears', 'Brakes', 'Front Deraileur', 'Rear Deraileur', 'Wheel Size'];
            let array2 = [];
            array.map((singleItem)=>{
                array2.push(singleItem.toLowerCase())
            })
            console.log(array2)
            changeData(array2);
            changeLoading(false)
        }
    }, [])
    const [products1, changeProducts1] = useState([]);
    const [filter1, changeFilter1] = useState([]);
    const [data, changeData] = useState([]);

    console.log(categories)

    return (
        <div className={classes.filterBar}>

            {!loading && 
            <>
                {  stockType !== 'access' && stockType &&
                <ChildBar changeFilter={ changeFilter } dataArray={ products1 } stockType={stockType} data={data} products={products} changePrice={changePrice}></ChildBar>
            }
            </>}

        
        </div>
    )
}

export default FilterBar

{/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Basic Filter</Accordion.Header>
                <Accordion.Body>
                    <ChildBar changeFilter={ changeFilter1 } filter={filter} dataArray={ products1 } data={dataArray3}></ChildBar>
                </Accordion.Body>
            </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Advanced Filter</Accordion.Header>
            <Accordion.Body>
                <ChildBar changeFilter={changeFilter1} filter={filter} dataArray={ products1 } data={dataArray4}></ChildBar>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion> */}





