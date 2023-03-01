import AddressElement from "../../AddressElement/AddressElement";
import FormAddress from "../../FormAddress/FormAddress";
import { Button, Form } from "semantic-ui-react";
import { useSelector } from "react-redux";
import {useState} from 'react'

const MakePayment = ({currentState, changeCurrentState}) => {

    const [formState, changeFormState] = useState(false);
    

    const formHandler = () => {
        changeFormState((prevState) => {
            return !prevState
        })
    }
    const userState = useSelector((state)=>{
        return state.user
    })

    const changeState = (value) => {
        changeFormState(value)
    }


    return (
        <div>
            <h2>Billing Information</h2>
        <hr></hr>

        {((!userState.user.address) || (userState.user.address.length === 0)) && <FormAddress></FormAddress>}
            {userState.user.address && userState.user.address.length !== 0 &&
                <>                            
                    <Form className={'mt-3'}>
                    {userState.user.address.map((single, idx) => {
                                return (
                                        <AddressElement changeHandler={ changeCurrentState } state={currentState} addressProp={single} ></AddressElement>
                                    )
                                })}                        
                    </Form>
                    <Button className={'mt-2'} onClick={formHandler}>Address Form</Button>
                    {formState && <div className={'mt-2'}><FormAddress changeFormState={changeState}></FormAddress></div>}
                </>
            }
        </div>
    )
}

export default MakePayment;


// import React, { Component } from 'react'
// import { Form, Radio } from 'semantic-ui-react'

// export default class RadioExampleRadioGroup extends Component {
//   state = {}
//   handleChange = (e, { value }) => this.setState({ value })

//   render() {
//     return (
//       <Form>
//         <Form.Field>
//           Selected value: <b>{this.state.value}</b>
//         </Form.Field>
//         <Form.Field>
//           <Radio
//             label='Choose this'
//             name='radioGroup'
//             value='this'
//             checked={this.state.value === 'this'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Radio
//             label='Or that'
//             name='radioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//       </Form>
//     )
//   }
// }