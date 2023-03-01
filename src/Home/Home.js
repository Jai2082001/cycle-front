import classes from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import DescComponent from '../DescComponent/DescComponent';
import { Col, Row, Container, Modal } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Fade from 'react-reveal/Fade';
import CategoryCard from './CategoryCard/CategoryCard'
import { useEffect, useState } from 'react'
import Footer from '../Footer2/Footer';
import CmbExperience from '../CmbExperience/CmbExperience';
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader'
import BannerWithOneProduct from './BannerWithOneProduct/BannerWithOneProduct'
import ProductDisplayer from './ProductDisplayer/ProductDisplayer'
import OverlayWithSmall from './OverlayWithSmall/OverlayWithSmall';
import {Sidebar} from 'semantic-ui-react'
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown';
import { useParams } from 'react-router';


const Home = ({ page, changePage }) => {

    const [offset, setOffSet] = useState('');
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([]);
    const [accessoryBrand, changeAccessBrands] = useState([])
    const [productNames, changeProductNames] = useState([]);
    const [location, changeLocation]  = useState(0)

    const params = useParams();

    console.log(params)

    const array = [{title: '29+Million', desc: 'Consumers Have Used --- before making a decision'}, {title: '29+Million', desc: 'Consumers Have Used --- before making a decision'},{title: '29+Million', desc: 'Consumers Have Used --- before making a decision'},{title: '29+Million', desc: 'Consumers Have Used --- before making a decision'}]

    const videoLink = 'https://icicisports.com/video/icicisports.mp4';
    console.log(process.env.REACT_APP_FETCH_LINK);
    useEffect(()=>{
        changeLoader(true)
        console.log("Hello")
        fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
                return response.json()
            }).then((response) => {
                changeCategories(response);
                fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response)=>{
                    return response.json()
                }).then((response)=>{

                    changeProductNames(response)
                    changeLoader(false)
                
                })
            })
    },[])

    
    return (
    <>
        {loader && <FullScreenLoader></FullScreenLoader>}
        {!loader && <>
            <Sidebar style={{width: '100%'}}
             animation='overlay' inverted onHide={()=>{changeSidebar(false)}} vertical visible={sidebar} width='wide'>
                 <MobileDropDown changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                categories={categories} sidebar={sidebar}></MobileDropDown>
             </Sidebar>
             <>
        
        <div className={classes.parentContainer}>
        <NavBar changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                categories={categories} sidebar={sidebar}></NavBar>
                <Container fluid className={classes.homeDiver}>
                    <div className={classes.navbar}>
                            <div className={classes.iconAndDesc}>
                                <div className={classes.iconContainer}>
                                    <i class="fas fa-plane"></i>
                                </div>
                                <div className={classes.contentContainer}>
                                    <p className={classes.secondP}>Fastest To Reach</p>
                                </div>
                            </div>
                            <div className={classes.iconAndDesc}>
                                <div className={classes.iconContainer}>
                                <i class="fas fa-wallet"></i>
                                </div>
                                <div className={classes.contentContainer}>
                                    <p className={classes.secondP}>With Exciting Offer</p>
                                </div>
                            </div>
                            <div className={classes.iconAndDesc}>
                                <div className={classes.iconContainer}>
                                <i class="fas fa-headphones"></i>
                                </div>
                                <div className={classes.contentContainer}>
                                    <p className={classes.secondP}>Call Us At 0123-456-789</p>
                                </div>
                            </div>
                        </div>
                       </Container>
                    <Slider></Slider>
                <div className={classes.homeDiv}>
                    <div className={classes.shopByCategory}>
                        <CategoryCard categories={categories}></CategoryCard>
                    </div>
                    <BannerWithOneProduct></BannerWithOneProduct>

                    <ProductDisplayer></ProductDisplayer>

                </div>
                <OverlayWithSmall></OverlayWithSmall>
                <Banner></Banner>
                <VideoPlayer offset={offset} srcVariable={videoLink}></VideoPlayer>
                <Footer></Footer> 
            </div>
        </>
    </>}
    </>
    )
    
}

export default Home
