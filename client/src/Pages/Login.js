//dependencies
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//components
import '../static/App.scss'


const Login = () =>{
    const [ credential, setCredential ] = useState({email: '', password: ''})
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredential( (prev) => {return {
            ...prev, [e.target.name] : e.target.value 
        }})}

    const validateCredential = (email, password) => {
        console.log(email.toString().endsWith('@gmail.com') && password !== '')
        return (email.toString().endsWith('@gmail.com') && password !== '');
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateCredential(credential.email, credential.password)) {
            navigate('/user/123')
        }

        setCredential ( { email: '', password: ''})
    }
    return <>
        <h1>Welcome to Agro Tech Website</h1>
        <div className = 'container'>
            <div className = 'submission-form d-flex'>
                <form onSubmit = { handleSubmit }>
                    <div className = 'user-input-wraper'>
                        <input  name = 'email'
                                type = 'text'
                                value = {credential.email}
                                onChange = { handleChange }
                                placeholder = 'Email or Phone number'
                                className = 'user-input my-3'/>
                    </div>
                    <div className = 'user-input-wraper'>
                        <input name = 'password'
                               type = 'password'
                               value = { credential.password} 
                               onChange = { handleChange }
                               placeholder = 'Password'
                               className = 'user-input mb-3'/>
                    </div>
                    <button type = 'submit'>Log In</button>
                </form>
            </div>

            <div>
                <button>Sign Up</button>
            </div>
        </div>
    </>
}

export default Login