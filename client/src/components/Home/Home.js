import React, { useState, useEffect }from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {Grid, Grow, Container} from '@material-ui/core'
import {useDispatch}  from 'react-redux'
import {getPosts} from '../../actions/posts'


const Home = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        dispatch(getPosts())
    },[currentId, dispatch])
    return (
        <Grow in>
        <Container>
          <Grid container  justifyContent="space-between" alignItems="stretch" spacing={3} style={{paddingTop: "40px"}}>
            <Grid item xs={12} sm={7} lg={6}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={4}  >
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
        </Grow>
    )
}

export default Home
