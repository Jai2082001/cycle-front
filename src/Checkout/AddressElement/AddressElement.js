import { Segment, Radio, Form } from 'semantic-ui-react'
import { useEffect, useState } from 'react'


const AddressElement = ({ addressProp, changeHandler, state }) => {

    const [address, changeAddress] = useState('');

    console.log(address)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/addressDisplay`, {
            headers: {
                address: addressProp 
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if(response._id){
                const {fullname, address, city, pincode, state} = response
                const string = `${fullname} ${address} ${city} ${state} ${pincode}`
                changeAddress(string)
            }else{
                changeAddress(false)
            }
               
        })
    }, [addressProp])

    const changeAddressHandler = () => {
        changeHandler(addressProp)
    }

    return (
        <>
        {address && 
        <>
            <Form.Field>
                <Segment>
                    <Radio
                        slider
                        value={addressProp}
                        name={'radioGroup'}
                        checked={state === addressProp}
                        onChange={changeAddressHandler}
                        label={address}
                    >
                    </Radio>
                </Segment>  
            </Form.Field>                      
            
        </>}
        </>
    )
}

export default AddressElement