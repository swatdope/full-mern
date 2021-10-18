import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    navBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton: {
        margin: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    leftNav: {
        display: 'flex',
        alignItems: 'center',
    },
    rightNav: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    item: {
        padding: "7px",
        cursor: 'pointer'
    },
    user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profile: {
        display: 'flex',
        paddingRight: '20px', 
        alignItems: 'center',
    },
    user: {
        padding: "20px"
    },
    avatar: {
        borderRadius: "20px",
    },
    [theme.breakpoints.down('sm')]: {
        item: {
            display: 'none'
        },
},
   
}))