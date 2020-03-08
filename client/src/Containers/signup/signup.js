import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import axios from '../../axiosInstance';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, createMuiTheme} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import AcUnitIcon from '@material-ui/icons/AcUnit';
 
const theme=createMuiTheme();

const styles={
    root:{
        maxWidth:'57%'
    },
    paper: {
        marginTop: theme.spacing(8),
        borderRadius: '7px',
        padding: theme.spacing(3)
    },
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    cardContent:{
        // display:'flex',
        // flexDirection: 'column',
        // alignItems:'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    grid:{
        marginTop:theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
  };

class Login extends Component{
    state={
        user:{
            firstName:null,
            lastName:null,
            email:null,
            password:null
        }
    }
    handleChange = (event,key) => {
        const newUser={...this.state.user}
        newUser.key=event.target.value
        this.setState({user:newUser})
    };

    emailFormHandler=(event)=>{
        event.preventDefault();
        this.setState({progressBar:true},()=>{
            setTimeout(()=>{
                axios.post("/register",{
                    firstName:this.state.user.firstName,
                    lastName:this.state.user.lastName,
                    email:this.state.user.email,
                    password:this.state.user.password
                })
                .then(response=>{
                    console.log(response);
                    if(response.status===200){
                        this.props.history.push({
                            pathname: "/home",
                            state:{user:response.data}
                        });
                    }
                })
                .catch((error)=>{
                    if(error.response){
                        this.setState({progressBar:false,error:true,helperText:"Couldn't find your account"})
                    }
                    else{
                        console.log(error);
                    }
                })
            },500)
        })
    }

    render(){
        const {classes} = this.props;
        return(
            <Container maxWidth="sm" classes={{ root:classes.root}} >
                <Card variant="outlined" className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} lg={7}>
                            <CardContent className={classes.cardContent} >
                                <Typography variant="h5"    >
                                    Create your Account
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <form className={classes.form} >
                                <TextField 
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="email"  
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
                        </Grid>
                        <Grid item sm={0} lg={5}>
                            <Icon color="primary" fontSize="large">
                                <AcUnitIcon />
                            </Icon>
                        </Grid>
                    </Grid>
                </Card>
            </Container>    
        )
    }
}

export default  withStyles(styles)(Login);