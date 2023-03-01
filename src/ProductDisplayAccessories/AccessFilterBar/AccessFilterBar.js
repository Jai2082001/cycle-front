import classes from './AccessFilterBar.module.css'
import { useEffect } from 'react'
import {Accordion} from 'react-bootstrap'

const AccessFilterBar = ({ changeProducts, products }) => {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplay`, {
            headers: {
                category:  'accessories'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            changeProducts(response)
        })
    }, [])

    let minPrice;
    let maxPrice;
    

    return (
        <div className={classes.filterBar}>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                        {'boo'}
                    </Accordion.Body>
            </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Brand</Accordion.Header>
            <Accordion.Body>
                {'foo'}
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
    )
}

export default AccessFilterBar