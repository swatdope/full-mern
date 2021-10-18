import React, { useState, useEffect} from 'react'
import {AppBar, Toolbar, Typography, Avatar, Container, Button} from '@material-ui/core'
import useStyles from './styles'
import MenuList from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import logo from '../../images/logo.jpg'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'



const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const logout = () => {
        dispatch({ type: 'LOGOUT'})

        history.push('/')
        setUser(null)
    } 
    useEffect(() => {
        const token = user?.token

        if(token) {
            const decodedToken = decode(token)

            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))

    },[location])

    console.log(user)
    return (
        <AppBar position="static" color="inherit"   >
            <Toolbar className={classes.navBox}>
                <Container className={classes.leftNav} >
                    <MenuList className={classes.menuButton} />
                <Avatar > <img src={logo} height="40"   /> </Avatar>
                <Typography variant="h5" style={{textDecoration: "none", color: "black"}} component={Link} to='/' className={classes.Item} > Memories </Typography>
                </Container>
                <Container className={classes.rightNav}>
                    {/* <Container  >  
                {user ? (
                    <div className={classes.profile}>
                    <Avatar className={classes.user} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> 
                    <Typography variant="h6" className={classes.user} >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.user} className={classes.logout} color="secondary" onClick={logout}> Logout </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In </Button>
                ) }
                </Container> */}
                {user ? (
                    <div className={classes.profile}>
                    <Avatar className={classes.user} className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> 
                    <Typography variant="h6" className={classes.user}  >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.user} className={classes.logout} color="secondary" onClick={logout}> Logout </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In </Button>
                ) }
                    <AccountCircleIcon className={classes.item} />
                    <SearchIcon className={classes.item} />
                    <FavoriteBorderIcon className={classes.item} />
                    <LocalMallIcon className={classes.item} />
                  
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
