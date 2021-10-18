import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Container} from '@material-ui/core'

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="xxl">
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' exact component={Auth} />
    </Switch>
    </Container>
    </BrowserRouter>
  )
}

export default App
