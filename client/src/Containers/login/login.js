import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, createMuiTheme} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
 
const theme=createMuiTheme();

const styles={
    root:{
        paddingLeft:'0px',
        paddingRight:'0px'
    },
    paper: {
        marginTop: theme.spacing(8),
        flexDirection: 'column',
        alignItems: 'center'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
      },
      cardContent:{
          margin: '0 auto'
      }
  };

class Login extends Component{
    render(){
        const {classes} = this.props;
        return(
                <Container maxWidth="xs" classes={{ root:classes.root}} >
                    <Card variant="outlined" className={classes.paper}>
                        <CardContent className={classes.cardContent} >
                            <Avatar className={classes.avatar}  >
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant="h5">
                                Sign in
                            </Typography>
                            <Typography variant="subtitle1" >
                                Use your Account
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <form className={classes.form} >
                                <TextField 
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"  
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    // error
                                    // helperText="Couldn't find your account"
                                />
                                <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Create Account
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                            </form>
                        </CardActions>
                    </Card>
                </Container>    
        )
    }
}

export default  withStyles(styles)(Login);