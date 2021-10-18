import React, { useState, useEffect }from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {Grid, Grow, Container, Paper} from '@material-ui/core'
import {useDispatch}  from 'react-redux'
import {getPosts} from '../../actions/posts'
import Pagination from '../Pagination'
import useStyles from './styles'


const Home = () => {
 
  const classes = useStyles()
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        dispatch(getPosts())
    },[currentId, dispatch])
    return (
        <Grow in>
        <Container>
          <Grid container className={classes.mainContainer}   justifyContent="space-between" alignItems="stretch" spacing={3} style={{paddingTop: "40px"}}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={6} md={3}  >
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
              <Paper elevation={6}> <Pagination /> </Paper>
            </Grid>
          </Grid>
        </Container>
        </Grow>
    )
}

export default Home
