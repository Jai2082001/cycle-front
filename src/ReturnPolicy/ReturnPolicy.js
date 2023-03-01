import classes from './ReturnPolicy.module.css'
import {useEffect, useState} from 'react'

const ReturnPolicy = () => {
    const [loader, changeLoader] = useState(true);
    const [sidebar, changeSidebar] = useState(false);
    const [cycleBrand, changeCycleBrands] = useState([]);
    const [categories, changeCategories] = useState([])
    const [productNames, changeProductNames] = useState([]);

     
    useEffect(()=>{
        changeLoader(true)
        fetch(`${process.env.REACT_APP_FETCH_LINK}/brandCycles`).then((response)=>{
            return response.json()
        }).then((response)=>{
            changeCycleBrands(response.array);
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
        })
    },[])
    return(
        <div className={classes.returnDiv}>
            ARE THE PRODUCTS PURCHASED THROUGH WWW.ICICISPORTS.COM GENUINE, AND ARE THERE A MANUFACTURERS’ WARRANTY FOR THE SAME?
            www.icicisports.com (“TISSOT ENERGY”) sells only products that are original /genuine, and are covered under warranty provided by the manufacturer/brand of the particular product
            IF THERE IS AN ISSUE WITH MY BICYCLE AND SPORTS GOODS, DOES TISSOT ENERGY TAKE RESPONSIBILITY?
            Upon delivery and unboxing of the bicycle/product, if you find any defect, you should intimate TISSOT ENERGY regarding the same day immediately without any delay. TISSOT ENERGY shall, take all reasonable efforts to rectify the same in conjunction with the respective brand/manufacturer. The final solution/course of action is at the sole discretion of TISSOT ENERGY.
            DOES WARRANTY COVER ALL THE PARTS OF MY CYCLE/PRODUCT?
            The terms and condition of warranty for any part of the bicycle and sports product vary for each brand/manufacturer. The same shall be available on their respective website. In case of any warranty claim, TISSOT ENERGY shall provide all reasonable assistance for your claim/communications between you and the brand/manufacturer.
            WHAT IF THE BICYCLE/PRODUCT I HAVE RECEIVED IS DEFECTIVE?
            TISSOT ENERGY undertakes a rigorous ’23-Point’ checklist on every bicycle once the same has been fully fitted to ensure that there are no damages/defects to the bicycle prior to shipping the same to you.
            In case of any manufacturing defect that is noticed upon delivery of the bicycle/product, the same shall have to be raised with the respective brand/manufacturer through TISSOT ENERGY, and TISSOT ENERGY shall extend all reasonable assistance in this regard.
            In case of any damage during transit, you shall intimate us within 24 hours of receiving the bicycle/product, and provide pictorial evidence of the damage to the same. The bicycle/product shall be in an unused condition at the time of intimating us regarding such damage. Upon receipt of your complaint, TISSOT ENERGY shall forward the same to the transit partner and seek a resolution for the issue.
            Any request for the return of the bicycle/product shall be at the sole discretion of TISSOT ENERGY. In case of a return being approved by TISSOT ENERGY, all items must be returned in their original condition along with the following:
            •	Original invoice from TISSOT ENERGY
            •	User manual and other documents
            •	Accessories provided at the time of sale of the bicycle
            •	The original box, intact, along with the packaging as delivered.
            TISSOT ENERGY shall have the right to reject the return pickup if the items are not returned according to the above mentioned.
            Any other damages that may have occurred to the bicycle shall be your responsibility. The same shall also not apply to normal wear and tear, nor to defects, malfunctions or failures that result from the abuse, neglect, improper maintenance, alteration, modification, accident, or misuse of the bicycle/product. However, TISSOT ENERGY will advise you regarding rectification of the said issue. Please contact our support team at support@icicispots.com

        </div>
    )
}

export default ReturnPolicy