import { makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    mainContainer: {
        paddingTop: "40px",
    [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
    },
    appBarSearch: {
        display: 'flex',
        marginBottom: '17px',
        padding:'16px',
        borderRadius: 4
    },
    pagination: {
        borderRadius: 4,
        marginTop: '17px'
    }
   
}))