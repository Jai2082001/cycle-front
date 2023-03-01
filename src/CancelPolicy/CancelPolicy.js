import classes from './CancelPolicy.module.css'
import { useEffect, useState } from 'react';
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader';


const CancelPolicy = () => {
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
    return (
        <div className={classes.cancelDiv}>
            {loader && <FullScreenLoader></FullScreenLoader>}
            {!loader && <div>
            1
            All bicycles/products sold through Tissot Energy are put through stringent and thorough quality checks prior to the same being shipped to you. Tissot Energy only ships original products to ensure complete satisfaction of usage for the bicycle/product ordered by you. Cancellation/refund shall be entertained only based on the below mentioned circumstances.
            2
            TRANSIT RELATED DAMAGES - In case of any transit damage to the bicycle/product, upon the same being delivered to you, you shall intimate the same to Tissot Energy within 24 (Twenty Four) hours of initial receipt of the same. For the purpose of verification of the claim, the requirements as listed below by shall be mailed to support@tissotenergy.com for Tissot Energy to verify:
            picture/video (in case of moving parts) of the damage;
            invoice copy of the bicycle/product; and
            Picture of the picture frame number on the bicycle.
            Tissot Energy shall assess the extent of damage to the bicycle/product and shall take best efforts to ensure the same is rectified to your satisfaction, either by replacing the damages part or reimbursing cost of service to you. If such damage cannot be rectified, TISSOT ENERGY shall process the return of the product and replace the bicycle/product (or) refund the money paid by you.
            3
            WARRANTY CLAIMS - For any warranty related issues that may arise with respect to any bicycle/product upon the same being delivered to you and being communicated to Tissot Energy with the following information to support@tissotenergy.com:
            picture/video of the part in question;
            invoice copy of the bicycle/product; and
            Picture of the picture frame number on the bicycle.
            Tissot Energy shall, taking into consideration the warranty terms set out by each brand, liaise with such brand to address the issue on a best effort basis. Any costs related to the procurement and supply of the replacement part/product in question shall be shipped to you free of cost. If such issue cannot be Tissot Energy shall process the return of the product and replace the bicycle/product (or) refund the money paid by you.
            4
            FURTHER STIPULATIONS: - If you still wish to proceed and cancel your order, a nominal cancellation charge of Rs. 1,200/- (Rupees One Thousand Two Hundred only) along with a transaction reversal fee of 2% (Two Percent) of the amount paid will be deducted prior to processing the refund to you. This shall be at the sole discretion of the Tissot Energy Customer Support Team. If the product has been shipped either from the brand's warehouse or from Tissot Energy's warehouse prior to raising a cancellation request, the same will not be entertained.
            5
            REFUND PROCESS - In case a refund is approved by Tissot Energy, the mode of your refund to be processed depends on your original payment method. If you have paid by credit/debit card/internet banking, refunds will be sent to the respective bank within 5 (Five) to 7 (Seven) business days of receipt of the returned item or cancellation request. Please contact your bank with questions about when the credit will be posted to your account. For further queries, you can contact support@tissotenergy.com.
            6
            If the product ordered is not available with the brand for any unforeseen circumstances, Tissot Energy will offer a 100% refund to the customer through the Original Mode of Payment.
               
            </div>}

        </div>
    )
}

export default CancelPolicy