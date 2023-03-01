import classes from './MobileDropDown.module.css'
import { Accordion } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const MobileDropDown = ({ cycleBrand, accessBrand, categories, sidebar, changeSidebar, changeLocation }) => {


    const [productType, changeProductType] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/displayProductType`).then((response) => {
            return response.json()
        }).then((response) => {
            changeProductType(response)
        })
    }, [])


    const locationHandler = () => {
        changeLocation((prevState) => {
            return prevState + 1
        })
    }


    const dataArray = [{ name: 'Male' }, { name: 'Female' }, { name: 'Children' }]
    return (
        <div className={classes.mobileBackground}>
            <div className={classes.spanBackground}>
                <span>{'Menu'}</span>
                <span onClick={() => {
                    changeSidebar(false)
                }} className={classes.iconBtn}><i class="fas fa-times"></i></span>
            </div>
            <div className={classes.pDiv}>
                <p>Cart</p>
                <p>Checkout</p>
                <div className={classes.categoryDiv}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Bicycles</Accordion.Header>
                            <Accordion.Body>
                                <Accordion style={{ margin: '10px 0px' }}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Users</Accordion.Header>
                                        <Accordion.Body>
                                            {dataArray.map((singleItem) => {
                                                return (
                                                    <p><NavLink onClick={locationHandler} to={`/productDisplay/cycles/users/${singleItem.name}`}>{singleItem.name}</NavLink></p>
                                                )
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Category</Accordion.Header>
                                        <Accordion.Body>
                                            {categories.map((singleItem) => {
                                                if(singleItem.parentName === "Cycle"){
                                                    return (
                                                        <p><NavLink onClick={locationHandler} to={`/productDisplay/cycles/category/${singleItem.name}`}>{singleItem.name}</NavLink></p>
                                                    )
                                                }
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        {productType.map((singleItem, idx) => {
                        return (
                        <Accordion.Item eventKey={idx + 1}>
                            <Accordion.Header>{singleItem.name}</Accordion.Header>
                            <Accordion.Body>
                                {categories.map((cat)=>{
                                    if(cat.parentName === singleItem.name){
                                        console.log("adad")
                                        return (
                                            <p><NavLink onClick={locationHandler} to={`/productDisplay/${singleItem.name}/category/${cat.name}`}>{cat.name}</NavLink></p>
                                        )
                                    }
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                        )
                    })}
                    </Accordion>
            </div>
        </div>     
    </div >
        
    )
}

export default MobileDropDown