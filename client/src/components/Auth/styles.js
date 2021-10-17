import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(8),
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      switchButton: {
          display: 'flex',
          justifyContent: 'center',
      },
}))