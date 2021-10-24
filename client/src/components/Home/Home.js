import React, { useState, useEffect }from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {Grid, Grow, Container, Paper, AppBar, TextField, Button} from '@material-ui/core'
import {useHistory, useLocation} from 'react-router-dom'

import ChipInput from 'material-ui-chip-input'


import {useDispatch}  from 'react-redux'
import {getPosts, getPostsBySearch} from '../../actions/posts'
import Pagination from '../Pagination'
import useStyles from './styles'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}



const Home = () => {
 
  const classes = useStyles()
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])

    const query = useQuery()
    const history = useHistory()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')

    // useEffect(() => {
    //     dispatch(getPosts())
    // },[currentId, dispatch])

    // no longer fetching post from here

    const searchPost = () => {
      if(search.trim() || tags) {
        dispatch(getPostsBySearch({search, tags: tags.join(',') }))

        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
      } else {
        history.push('/')
      }
    }
    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
        searchPost()
      }
    }

    const handleAdd = (tag) => setTags([...tags, tag])
    
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))


    return (
        <Grow in>
        <Container maxWidth="xl">
          <Grid container className={classes.mainContainer}   justifyContent="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={6} md={3}  >
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField
                 name='search'
                 variant="outlined"
                 label="Search Memories"
                 onKeyPress={handleKeyPress}
                 fullWidth
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}

                
                />
                <ChipInput
                style={{margin: '10px 0'}}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
                 />
                 <Button variant="contained" onClick={searchPost} className={classes.searchButton} color="primary" > Search  </Button>
              </AppBar>
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
              {(!searchQuery && !tags.length) && (
              <Paper  elevation={6}> <Pagination page={page} /> </Paper>
              )}
              </Grid>
          </Grid>
        </Container>
        </Grow>
    )
}

export default Home
