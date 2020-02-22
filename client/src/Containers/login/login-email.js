import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import LinearProgress from '@material-ui/core/LinearProgress';
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
        borderRadius: '7px',
        // paddingTop:0,
        // padding: theme.spacing(3),
    },
    cardBody:{
        padding: theme.spacing(3),
    },
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    cardContent:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
    },
    grid:{
        marginTop:theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
  };

class Login extends Component{
    state={
        email:" ",
        progressBar:false
    }

    componentDidMount(){
        if(this.props.location.state){
            this.setState({email:this.props.location.state.email});
        }
    }

    handleChange = event => {
        this.setState({email:event.target.value})
    };

    emailFormHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.progressBar)
        this.setState({progressBar:true},()=>{
            setTimeout(()=>{
                this.props.history.push({
                    pathname: "/signin/pwd",
                    state:{email:this.state.email}
                });
            },500)
            // axios.post({
            //     email:this.state.email
            // })
            // .then((response)=>{
            //     console.log(response);
            // })
            // .catch((error)=>{
            //     console.log(error);
            // })
        })
    }

    render(){
        const {classes} = this.props;
        let progress=this.state.progressBar?<LinearProgress />:null

        return(
            <Container maxWidth="xs" classes={{ root:classes.root}} >
                <Card variant="outlined" className={classes.paper}>
                {progress}
                <div className={classes.cardBody}>
                    <CardContent className={classes.cardContent} >
                        <Avatar className={classes.avatar}  >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5"    >
                            Sign in
                        </Typography>
                        <Typography variant="subtitle1" >
                            Using your Account
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
                                value={this.state.email}
                                label="Email"
                                type="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChange}
                                // error
                                // helperText="Couldn't find your account"
                            />
                            <Grid container className={classes.grid}>
                            <Grid item xs>
                                <Link component={RouterLink} to="/signup" 
                                    variant="body2" className={classes.link} >
                                    Create Account
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.emailFormHandler}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                        </form>
                    </CardActions>
                </div>
                </Card>
            </Container>    
        )
    }
}

export default  withStyles(styles)(Login);