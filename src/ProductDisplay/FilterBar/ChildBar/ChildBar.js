import { useEffect,useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Checkbox from './Checkbox/Checkbox'
import classes from './ChildBar.module.css'

const ChildBar = ({ data, dataArray, changeFilter, products, stockType, changePrice }) => {
    

    

    useEffect(()=>{
        if(products){
            if(products.length>0){
                let minprice = parseInt(products[0].price)
                let maxprice = 0;

                for(let i=0;i<products.length;i++){
                    if(parseInt(products[i].price)<minprice){
                        minprice = parseInt(products[i].price)
                    }
                    if(parseInt(products[i].price)>maxprice){
                        maxprice = parseInt(products[i].price)
                    }
                }

                changeMin(minprice);
                changeCurrent(maxprice)
                changeMax(maxprice);

            }
        }
        
    }, [])

    const [min, changeMin] = useState(0);
    const [max, changeMax] = useState(0);
    const [current, changeCurrent] = useState(0)

    const priceHandler = (event) => {
        changeCurrent(event.target.value)
        changePrice(event.target.value)
    }

    return (
        <div className={classes.childParent}>
            <div className={classes.rangeDiv}><p>Price Range: {min} - {max}</p><p>Spend Limit: {current}</p><input onChange={priceHandler} value={current} min={min} max={max} type={'range'}></input></div>
            <Accordion defaultActiveKey="0">
                {data && 
                <>
                    {data.length>0 && 
                    <>
                        {
                    data.map((singleItem, idx) => {
                    return (
                        <Accordion.Item eventKey={idx}>
                            <Accordion.Header>{ `${singleItem[0].toUpperCase()}${singleItem.slice(1)}` }</Accordion.Header>
                            <Accordion.Body>
                                <Checkbox changeFilter={changeFilter} name={singleItem} products={products} stockType={stockType}></Checkbox>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }) }    
                    </>}
                </>}
                
            </Accordion>
        </div>
    )
}


// dataArray={ dataArray } header={singleItem.item} item={singleItem.value}

export default ChildBar