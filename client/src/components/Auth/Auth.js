import React, { useState } from 'react'
import { Container, Grid, Button, TextField, Paper, Avatar, Typography } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import Icon from './Icon'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {signUp, signIn} from '../../actions/auth'

import useStyles from './styles'

const Auth = () => {

    const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

    const dispatch = useDispatch()

    const history = useHistory()

    const classes = useStyles()

    const [isSignup, setIsSignup] = useState(false)
    // const isSignup = true;

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(isSignup) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }


        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token }})

            history.push('/')
        } catch (error) {
            
        }
    }


    const googleFailure = () => {
        console.log('google sign in was unsuccessful')
    }

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper}  elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant="h5">  {isSignup ? 'SignUp' : 'SignIn'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}  >
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Second Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label='Repeat Password' handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'SignUp' : 'SignIn'}
                    </Button>
                    <GoogleLogin clientId="273010466363-37sin5vp3rtnqpvg1e8vu2h0ilnt9nct.apps.googleusercontent.com" render={(renderProps) => (<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> Google</Button>)} onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy="single_host_origin" />
                    <Grid className={classes.switchButton} container justifyContent="flex-end">
                        <Button color="secondary" onClick={switchMode} > {isSignup ? 'already have an account Sign IN' : 'Dont have an account Sign IN'} </Button>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth
