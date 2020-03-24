import React, {useState} from 'react';

function Form(props){
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    })

    
    

    return(
        <form onSubmit={props.onFormSubmit}>
            <label>First Name: 
                <input 
                onChange={props.onInputChange}
                value={formValues.firstName}
                name='firstName'
                type='text'/>
            </label>
            <label>Last Name: 
                <input 
                onChange={props.onInputChange}
                value={formValues.lastName}
                name='lastName'
                type='text'/>
            </label>
            <label>Email: 
                <input 
                onChange={props.onInputChange}
                value={formValues.email}
                name='email'
                type='text'/>
            </label>
            <label>Role: 
                <input 
                onChange={props.onInputChange}
                value={formValues.role}
                name='role'
                type='text'/>
            </label>
            <label>
                <input type='submit'>Add New Member</input>
            </label>
        </form>
    )
}
export default Form;