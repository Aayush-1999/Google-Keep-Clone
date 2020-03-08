import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import axios from '../../axiosInstance';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, createMuiTheme} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import AcUnitIcon from '@material-ui/icons/AcUnit';
 
const theme=createMuiTheme();

const styles={
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    cardBody:{
        padding: theme.spacing(3)
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
    },
    label:{
        textTransform:'none'
    },
    paper: {
        marginTop: theme.spacing(8),
        borderRadius: '7px',
    },
    root:{
        maxWidth:'57%'
    }
  };

class Login extends Component{
    state={
        user:{
            firstName:null,
            lastName:null,
            email:null,
            password:null,
            confirm:null
        },
        progressBar:false
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

    buttonClickHandler=(event)=>{
        event.preventDefault();
        this.setState({progressBar:true},()=>{
            setTimeout(()=>{
                this.props.history.push("/signin")
            },200)
        })
    }

    render(){
        const {classes} = this.props;
        let progress=this.state.progressBar?<LinearProgress />:null

        return(
            <Container maxWidth="sm" classes={{ root:classes.root}} >
                <Card variant="outlined" className={classes.paper}>
                    {progress}
                    <div className={classes.cardBody}>
                        <Grid container spacing={3}>
                        <Grid item sm={12} lg={7}>
                            <CardContent className={classes.cardContent} >
                                <Typography variant="h5"    >
                                    Create your Account
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <form className={classes.form} >
                                    <Grid container spacing={2}>
                                        <Grid item sm={12} lg={6}>
                                            <TextField 
                                                variant="outlined"
                                                margin="normal"
                                                id="First name"  
                                                label="First name"
                                                type="text"
                                                autoFocus
                                                size="small"
                                                onChange={(event)=>this.handleChange(event,"firstName")}
                                            />
                                        </Grid>
                                        <Grid item sm={12} lg={6}>
                                            <TextField 
                                                variant="outlined"
                                                margin="normal"
                                                id="Last name"  
                                                label="Last name"
                                                type="text"
                                                size="small"
                                                onChange={(event)=>this.handleChange(event,"lastName")}
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField 
                                        variant="outlined"
                                        margin="normal"
                                        id="Username"  
                                        label="Username"
                                        type="text"
                                        size="small"
                                        onChange={(event)=>this.handleChange(event,"email")}
                                    />
                                    <Typography component="div" variant="caption">
                                        You can use letter, numbetrs & periods
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item sm={12} lg={6}>
                                            <TextField 
                                                variant="outlined"
                                                margin="normal"
                                                id="Password"  
                                                label="Password"
                                                type="text"
                                                size="small"
                                                onChange={(event)=>this.handleChange(event,"password")}
                                            />
                                        </Grid>
                                        <Grid item sm={12} lg={6}>
                                            <TextField 
                                                variant="outlined"
                                                margin="normal"
                                                id="Confirm"  
                                                label="Confirm"
                                                type="text"
                                                size="small"
                                                onChange={(event)=>this.handleChange(event,"confirmPassword")}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Typography variant="caption">
                                        Use 8 or more characters with a mix of letters, numbers & symbols
                                    </Typography>
                                <Grid container className={classes.grid}>
                                <Grid item xs>
                                    <Button color="primary"className={classes.label} onClick={this.buttonClickHandler} 
                                    >Sign in instead</Button>
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
                    </div>
                </Card>
            </Container>    
        )
    }
}

export default  withStyles(styles)(Login);