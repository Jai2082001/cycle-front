import { useState, useEffect } from 'react'
import classes from './Checkbox.module.css'
import {Modal, Button} from 'react-bootstrap'

const Checkbox = ({products, name, changeFilter, stockType}) => {
    const singleArray = [];
    products.map((singleItem)=>{
        if(!(singleArray.includes(singleItem[name]))){
            singleArray.push(singleItem[name])
        }
    })
    
    const checkboxHandler = ( name, singleItem, event) => {
        console.log(event.target.checked)
        if(event.target.checked){
            changeFilter(name, singleItem, true)
        }else{
            // changeFilter(name, singleItem, false)
            window.location.reload()
        }
    }

    return (
        <>
            {singleArray.map((singleItem)=>{
                return (
                    <div className={classes.checkboxDiv}>
                        <input onClick={(event)=>{checkboxHandler(name, singleItem, event)}} type='checkbox'></input>
                        <span>{ singleItem }</span>
                    </div>
                )
            })}
        </>
    )

}

export default Checkbox
















// useEffect(()=>{
    //     console.log(products)
    //     products.map((singleItem)=>{
    //         console.log(singleItem[name])
    //         if(filArray.includes(singleItem[name])){
    //             let prevArray = filArray;
    //             prevArray.push(singleItem[name])
    //             changeFilArray(prevArray)
    //         }else{
    //             console.log('else block')
    //         }
    //     })
    // }, [])
// const Checkbox = ({ dataArray, item, header, changeFilter, filter }) => {
//     const [state, changeState] = useState([])
//     const [loading, changeLoading] = useState(false);
//     const handleOpen = () => { changeLoading(true) }
//     const handleClose = () => {changeLoading(false)}
//     const array = dataArray.map((single) => {
//         if (typeof single[item] === 'string' || typeof single[item] === 'boolean') {
//             return single[item]
//         } else {
//             return single['price']
//         }
//     })

//     let anotherArray = []
//     if (item === 'price') {
//         let min, max;
//         for (let j = 0; j < array.length; j++){
//             anotherArray.push(parseInt(array[j]))
//         }
       
//         min = Math.min(...anotherArray);
//         max = Math.max(...anotherArray);
//         anotherArray = []
        
//         let i = min;
//         while (true) {
//             let string
//             if (i + 3000 < max) {
//                 string = `${i} - ${i + 3000}`
//                 anotherArray.push(string)
//             } else {
//                 string = `${i} - ${max}`;
//                 anotherArray.push(string);
//                 break;
//             }
//             i = i + 3000 + 1
//         }
        
//     } else {
//         for (let i = 0; i<array.length; i++){
//         if (anotherArray.includes(array[i])) {
//             continue
//         } else {
//             anotherArray.push(array[i])
//         }
//     }    
//     }
    

//     const checkboxHandler = (single, event) => {
//         if (event.target.checked) {
//             let currentFilter = [...filter];
//             currentFilter.push({ filterType: item, filter: single })
//             changeFilter(currentFilter)    
//         }
//         else {
//             let currentFilter = [...filter];
//             let newArray = currentFilter.filter((current) => {
//                 return current.filter !== single
//             })
//             changeFilter(newArray)
//         }   
//     }


//     return (
//         <div>
//         <h4> { header } </h4>
//             {
//                 anotherArray.map((single) => {
//                     return (
//                         <div className={classes.checkboxDiv}>
//                             <input type='checkbox' onClick={ (event)=>{checkboxHandler(single, event)} }></input>
//                             <span>{ single }</span>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
