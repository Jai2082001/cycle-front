import classes from './NavBar.module.css'
import { Navbar, Container, Nav, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SubCategoryContainer from './SubCategoryContainer/SubCategoryContainer';
import Sticky from 'react-sticky-el'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { useHistory } from 'react-router';
import GeneralCategory from './GeneralCategory/GeneralCategory'
import logo1 from '../images/logoTissot.png'


const NavBar = ({ changeLocation, productNames, changeSidebar, cycleBrand, categories }) => {

    const [search, changeSearch] = useState('');
    const [productType, changeProductType] = useState([])
    const history = useHistory()

    const cartHandler = () => {
        history.push('/checkout')
    }

    const user = useSelector((state) => {
        return state.user.user
    })

    const productNameArray = productNames.filter((singleItem) => {
        if (singleItem.includes(search)) {
            return singleItem
        }
    })

    const conditionHandler = () => {
        history.push('/support')
    }

    const loginHandler = () => {
        if (user && user.status !== 'not logged in') {
            history.push('/profile')
        } else {
            history.push('/login')
        }
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/displayProductType`).then((response) => {
            return response.json()
        }).then((response) => {
            changeProductType(response)
        })
    }, [])

    const changeLoc = (singleItem) => {
        history.push(`/productDisplay/${singleItem.name}/category/${singleItem.name}`)
    }



    return (
        <>

            <div className={classes.navbar}>
                <Navbar expand="lg">
                    <div className={classes.divFlex}>
                        <p style={{ margin: '0' }} className={classes.iconLinkHead}>{"Get the Best Deal Here"}</p>
                        <div className={classes.divFlexChild}>
                            <p onClick={cartHandler} className={classes.iconLink}><i class="fas fa-shopping-cart"></i>Cart</p>
                            <p onClick={loginHandler} className={classes.iconLink2}><i class="far fa-user-circle"></i>{user.name ? ` Hello ${user.name}` : ` Login / Signup`}</p>
                            <p style={{marginRight: '0px'}} onClick={conditionHandler} className={classes.iconLink}>Support</p>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div className={classes.secondNavBar}>
                <Sticky>
                    <Navbar expand="lg" className={classes.parentNavContainer}>
                        <Container>
                            <Navbar.Brand>
                                <NavLink to='/home'>
                                    <img className={classes.logoImg} src={logo1}></img>
                                </NavLink>
                            </Navbar.Brand>

                            <div className={classes.parentContainer}>
                                <button style={{ marginRight: '10px' }} className={classes.btnContainer} onClick={() => {
                                    changeSidebar(true)
                                }}><i class="fas fa-bars"></i></button>
                                <Dropdown>
                                    {!user.name &&
                                        <>
                                            <DropdownButton title={<i class="far fa-user"></i>} drop={'start'} className={classes.btnContainer3}>
                                                <Dropdown.Item><NavLink to='/login'>Login</NavLink></Dropdown.Item>
                                                <Dropdown.Item><NavLink to='/register'>Register</NavLink></Dropdown.Item>
                                            </DropdownButton>
                                            <Dropdown.Menu>
                                            </Dropdown.Menu>
                                        </>                                  
                                    }

                                    {user.name && <button onClick={loginHandler} className={classes.btnInfo}><i class="far fa-user"></i></button>}
                                </Dropdown>
                            </div>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
                                <Nav className={classes.cycleAccessoriesDiv}>
                                    <div className={classes.dropdownDiv}>
                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                            BICYCLES
                                            <div className={classes.subCategoryContainerDiv}>
                                                <SubCategoryContainer changeLocation={changeLocation} categories={categories} brand={cycleBrand.Cycle}></SubCategoryContainer>
                                            </div>
                                        </p>
                                    </div>
                                    <>
                                        {productType.map((singleItem) => {
                                            if (!singleItem.hover) {
                                                return (
                                                    <div className={classes.dropdownDiv}>
                                                        <p onClick={()=>{
                                                            changeLoc(singleItem)
                                                        }} style={{margin:'0px 20px'}} className={classes.navbarP}>
                                                            {singleItem.name}
                                                        </p>

                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className={classes.dropdownDiv}>
                                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                                            {singleItem.name}
                                                            <div className={classes.subCategoryContainerDiv}>
                                                                <GeneralCategory changeLocation={changeLocation} heading={singleItem} categories={categories} brand={cycleBrand[singleItem.name]}></GeneralCategory>
                                                            </div>
                                                        </p>
                                                    </div>
                                                )

                                            }


                                        })}
                                    </>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className="justify-content-end">
                                <div className={classes.categoryNavbar}>
                                    <div className={classes.inputContainer}>
                                        <FormControl
                                            className={classes.formControl}
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={search}
                                            onChange={(event) => { changeSearch(event.target.value) }}
                                        />
                                        <div className={classes.iconContainer}><i class="fas fa-search"></i></div>
                                    </div>
                                    {search !== '' && productNameArray.length !== 0 &&
                                        <div className={classes.suggestBox}>
                                            {productNameArray.map((singleItem) => {
                                                return <p><NavLink to={`/singleDisplay/${singleItem}`}>{singleItem}</NavLink></p>
                                            })}

                                        </div>
                                    }

                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Sticky>
            </div>
        </>
    )
}

export default NavBar