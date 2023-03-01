import {useEffect, useState} from 'react'
import classes from './SmallAd.module.css'
const SmallAd = ({id}) => {
    const [address, changeAddress] = useState({});

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/addressDisplay`, {
            headers: {
                address: id 
            }
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            changeAddress(response)
        })
    }, [])
    return (
        <article className={classes.subAd}>
            {address.fullname + ' ' + address.address + ' '  + address.city + ' '  + address.state + ' ' + address.number + ' '  + address.alternatenum + ' ' + address.pincode  }
        </article>
    )
}

export default SmallAd