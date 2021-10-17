import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
    navBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    Item: {
        padding: '10px',
        cursor: 'pointer'
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
        paddingRight: '150px' 
    },
    user: {
        padding: "20px"
    }
}))