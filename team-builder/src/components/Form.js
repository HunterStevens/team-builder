import React from 'react';

function Form(props){

    // const [formValues, setFormValues] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     role: ''
    // })

    // const inputChange = event =>{
    //     // const newPlayer = {
    //     //   firstName: formValues.firstName,
    //     //   lastName: formValues.lastName,
    //     //   email: formValues.email,
    //     //   role: formValues.role
    //     // }
    //     setFormValues({...formValues,
    //          [event.target.name]:event.target.value});
    //   };
    
    // const formSubmission = event => {
    //     event.preventDefault();
    //     props.memberList(formValues);
    //     setFormValues({
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         role: ''
    //     })
    // };

    return(
        <form onSubmit={props.formSubmission}>
            <label>First Name: 
                <input 
                onChange={props.inputChange}
                value={props.formValues.firstName}
                name='fName'
                type='text'/>
            </label>
            <label>Last Name: 
                <input onChange={props.inputChange}  
                value={props.formValues.lastName}  
                name='lName'
                type='text'/>
            </label>
            <label>Email: 
                <input 
                onChange={props.inputChange}
                value={props.formValues.email}
                name='emailContact'
                type='text'/>
            </label>
            <label>Role: 
                <input 
                onChange={props.inputChange}
                value={props.formValues.role}
                name='position'
                type='text'/>
            </label>
            <label>
                <input type='submit'/>
            </label>
        </form>
    )
}
export default Form;