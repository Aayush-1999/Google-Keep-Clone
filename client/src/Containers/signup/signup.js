import React, {Component} from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import axios from '../../axiosInstance';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';  
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as actions from '../../store/actions/index';
import styles from './signup.styles';

class SignUp extends Component{
    state={
        user:{
            firstName:null,
            lastName:null,
            email:null,
            password:null,
            confirm:null
        },
        progressBar:false,
        showPassword:false
    }

    handleChange = (event,key) => {
        const newUser={...this.state.user}
        newUser.key=event.target.value
        this.setState({user:newUser})
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
    }
    
    handleMouseDownPassword = event => {
        event.preventDefault();
    }

    formHandler=(event)=>{
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
                        this.props.onAuthStart(response.data)
                        this.props.history.push({
                            pathname: "/home",
                            state:{user:response.data}
                        });
                    }
                })
                .catch((error)=>{
                    if(error.response){
                        this.setState({
                            progressBar:false,
                            error:true,
                            helperText:"Couldn't find your account"
                        })
                    }
                    else{
                        console.log(error);
                    }
                })
            },1500)
        })
    }

    signInButtonHandler=(event)=>{
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
            <Container maxWidth="md" disableGutters className={classes.root} >
                <Card variant="outlined" className={classes.paper}>
                    {progress}
                    <div className={classes.cardBody}>
                        <Grid container spacing={3}>
                            <Grid item sm={12} md={7}>
                                <CardContent className={classes.cardContent} >
                                    <Typography variant="h5"    >
                                        Create your Account
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <form className={classes.form} >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField  
                                                    fullWidth
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
                                            <Grid item xs={12} sm={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    fullWidth
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
                                            fullWidth
                                            id="Username"  
                                            label="Username"
                                            type="text"
                                            size="small"
                                            InputProps={{
                                                endAdornment: 
                                                <InputAdornment position="end">@gmail.com</InputAdornment>,
                                              }}
                                            onChange={(event)=>this.handleChange(event,"email")}
                                        />
                                        <Typography component="div" variant="caption">
                                            You can use letter, numbetrs & periods
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={10} sm={6}>
                                            <FormControl size='small' variant="outlined" margin="normal">
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <OutlinedInput id="password"
                                                    type={this.state.showPassword ? 'text' : 'password'}
                                                    value={this.state.user.password}
                                                    onChange={(event)=>this.handleChange(event,"password")}
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={this.handleClickShowPassword}
                                                            onMouseDown={this.handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    }
                                                    labelWidth={74}
                                                />
                                            </FormControl>
                                            </Grid>
                                            <Grid item xs={10} sm={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
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
                                                <Button color="primary"className={classes.label} onClick={this.signInButtonHandler} 
                                                >Sign in instead</Button>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.formHandler}
                                                >Next</Button>
                                        </Grid>
                                    </Grid>
                                    </form>
                                </CardActions>
                            </Grid>
                            <Grid item md={5} className={classes.accountImage} >
                                <img alt="account icon"
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Google_account_icon.svg/1200px-Google_account_icon.svg.png"
                                    className={classes.accountIcon}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Container>    
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAuthStart:(userData)=>dispatch(actions.authStart(userData))
    }
}

export default  connect(null,mapDispatchToProps)(withStyles(styles)(SignUp));