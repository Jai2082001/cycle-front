import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider'
import { useParams } from 'react-router'
import classes from './ProductDisplay.module.css'
import FilterBar from './FilterBar/FilterBar';
import {Row,Col} from 'react-bootstrap'
import SmallProductDisplayContainer from './SmallProductDisplayContainer/SmallProductContainer';
import Fade from 'react-reveal/Fade'
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader'
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown';
import { Sidebar } from 'semantic-ui-react';



const ProductDisplay = (props) => {
    const params = useParams();
    const [products, changeProducts] = useState([]);
    const [original, changeOriginal] = useState([]);
    const [parentProducts, changeParentProducts] = useState([]);
    const [loading, changeLoading] = useState(true)
    const [productNames, changeProductNames] = useState([]);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    // const [accessoryBrand, changeAccessBrands] = useState([])
    const [location, changeLocation] = useState(0);
    
    let changeFilter = (filter, value, action) => {
        if(action){
            let prevProducts = products;
            let newProducts = [];
            prevProducts.map((singleItem)=>{
                if(singleItem[filter] === value){
                    newProducts.push(singleItem)
                }
            })
            changeProducts(newProducts)
        }else{
            changeProducts(parentProducts)
        }
    }


    let changePrice = (priceRange) => {
        let prevProducts = original;
        let newProducts = [];
        console.log(priceRange)
        for(let i=0;i<prevProducts.length;i++){
            if(parseInt(prevProducts[i].price) <= parseInt(priceRange)){
                newProducts.push(prevProducts[i])
            }
        }    
        console.log(newProducts)
        changeProducts(newProducts)
    }

    console.log(params) 
    useEffect(()=>{
        changeLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplayWithFilter`, {
            headers: {
                stockType: params.stockType,
                filterType: params.filterType,
                filter: params.filter
            }    
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            changeProducts(response);
            changeOriginal(response);
            changeParentProducts(response);
            fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response)=>{
                    return response.json()
            }).then((response)=>{
                changeProductNames(response)
                    fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
                        return response.json()
                    }).then((response) => {
                        changeCategories(response);
                        changeLoading(false);
                    })           
            })
        })
    }, [location])
    return (
        <>
        {loading && <FullScreenLoader></FullScreenLoader>}
        {!loading &&
        <>
                <Sidebar style={{width: '100%'}}
                    animation='overlay' inverted onHide={()=>{changeSidebar(false)}} vertical visible={sidebar} width='thin'>
                    <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                    categories={categories} sidebar={sidebar}></MobileDropDown>
                </Sidebar>
            <Fade> <div>
                <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                    categories={categories} sidebar={sidebar}></NavBar>
                <Slider></Slider>
                <Row>
                    <Col className={classes.filterBar} lg={'3'}>
                        <FilterBar changePrice={changePrice} categories={categories} filterValue={params.filter} changeFilter={changeFilter}  stockType={params.stockType}  products={products} changeProducts={changeProducts}></FilterBar>
                    </Col>   
                    <Col lg={'9'} className={classes.productContainer}>
                        <SmallProductDisplayContainer products={products}></SmallProductDisplayContainer>
                    </Col>
                </Row>
            </div>
            </Fade>
        </>}
        
        </>
    )
}

export default ProductDisplay