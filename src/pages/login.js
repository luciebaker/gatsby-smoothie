import React, {useState, useContext, useEffect} from "react"
import {FirebaseContext} from '../components/Firebase'
import {Form, Input, Button, ErrorMessage} from '../components/form-components'

const Login = () => {

    const [formValues, setFormValues] = useState({email: '', password: ''})
    const {firebase} = useContext(FirebaseContext)
    const [errorMessage, setErrorMessage] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        firebase.login({email: formValues.email, password: formValues.password}).catch(error => {
            setErrorMessage(error.message)
        })
    }

    function hanleInpuChange(e) {
        e.persist()
        setErrorMessage('')
        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <section>
            <Form onSubmit={handleSubmit}>
            <Input value={formValues.email} name="email" onChange={hanleInpuChange} placeholder="email" type="email"/>
            <Input value={formValues.password} name="password" onChange={hanleInpuChange} placeholder="password" type="password" />
            {!!errorMessage &&
            <ErrorMessage>{errorMessage}</ErrorMessage>
            }
            <Button type="submit" block>Login</Button>
            </Form>
        </section>
    )
}

export default Login