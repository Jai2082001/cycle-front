import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router';
import Home from './Home/Home';
import Login from './Login/Login';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EBicycle from './EBicycle/EBicycle';
import ProductDisplay from './ProductDisplay/ProuctDisplay'
import ProductDisplayBig from './ProductDisplayBig/ProductDisplayBig';
import Checkout from './Checkout/Checkout'; 
import { useSelector, useDispatch } from 'react-redux';
import Profile from './Profile/Profile'
import Register from './Register/Register';
import { useEffect} from 'react'
import { userActions } from './store/user-slice';
import Invoice from './Invoice/Invoice';
import {useCookies} from 'react-cookie'
import Condition from './Condition/Condition';

function App() {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=>{
    return state.cart
})
  const [cookies, setCookie] = useCookies(['name']);
  console.log(cookies)
  console.log(cartState)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_FETCH_LINK}/userAuthenticated`, {
      headers: {
        jwt: cookies.jwt
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response)
      dispatch(userActions.changeUser(response))
    })
  }, [cookies.jwt, dispatch])


  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' exact>
          <Home></Home>
        </Route>
        <Route path='/home/:paymentStatus'>
          <Home></Home>
        </Route>
        <Route path='/login' exact>
          <Login></Login>
        </Route>
        <Route path='/register' exact>
          <Register></Register>
        </Route>
        <Route path='/register/:error' exact>
          <Register></Register>
        </Route>
        <Route path="/productDisplay/:stockType" exact>
          <ProductDisplay></ProductDisplay>
        </Route>
        <Route path="/productDisplay/:stockType/:filterType/:filter">
          <ProductDisplay></ProductDisplay>
        </Route>
        <Route path="/singleDisplay/:productId" exact>
          <ProductDisplayBig></ProductDisplayBig>
        </Route>
        <Route path='/checkout' exact>
          <Checkout></Checkout>
        </Route>
        <Route path='/checkout/:paymentStatus' exact>
          <Checkout></Checkout>
        </Route>
        <Route path='/eBicycle' exact>
          <EBicycle></EBicycle>
        </Route>
        <Route path='/profile' exact> 
          <Profile></Profile>
        </Route>
        <Route path="/support">
          <Condition></Condition>
        </Route>
        <Route path='/invoice/:inv'>
          <Invoice></Invoice>
        </Route> 
        <Route path='/'>
          <h2>Wrong Path</h2>
        </Route>
       
      </Switch>
    </div>
  );
}

export default withRouter(App);


// /:cycles