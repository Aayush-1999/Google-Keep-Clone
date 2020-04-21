import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from '../../../axiosInstance';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
import styles from './login-password.styles';
import * as actions from '../../../store/actions/index';

class Login extends Component{
    state={
        password:"",
        showPassword:false,
        progressBar:false,
        error:false,
        helperText:""
    }
    handleChange = event => {
        this.setState({password:event.target.value})
    }

    handleGoBack=()=>{
        this.props.history.push({
            pathname: "/signin",
            state:{email:this.props.location.state.email}
        })
    }
    
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
    }
    
    handleMouseDownPassword = event => {
        event.preventDefault();
    }

    pwdFormHandler=(event)=>{
        event.preventDefault();
        this.setState({progressBar:true},()=>{
            setTimeout(()=>{
                axios.post("/login/checkPwd",{
                    email:this.props.location.state.email,
                    password:this.state.password
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
                                helperText:"Wrong password. Try again or click Forgot password to reset it"
                            })
                    }
                    else{
                        console.log(error);
                    }
                })
            },1000)
        })
    }

    render(){
        const {classes} = this.props;
        let progress=this.state.progressBar?<LinearProgress />:null
        return(
            <Container maxWidth="xs" classes={{ root:classes.root}} >
                <Card variant="outlined" className={classes.paper}>
                    {progress}
                    <div className={classes.cardBody} >
                        <CardContent className={classes.cardContent} >
                            <Avatar className={classes.avatar}  >
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant="h5"    >
                                Welcome
                            </Typography>
                            <Chip className={classes.chip}
                                icon={<AccountCircleIcon />}
                                label={this.props.history.location.state.email}
                                onClick={this.handleGoBack}
                                variant="outlined"
                            />
                        </CardContent>
                        <CardActions>
                            <FormControl fullWidth margin="normal" 
                                className={classes.form} variant="outlined"
                                error={this.state.error}
                            >
                                <InputLabel htmlFor="password">Enter your password</InputLabel>
                                <OutlinedInput id="password"
                                    required
                                    autoFocus
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange}
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
                                    labelWidth={150}
                                    error={this.state.error}
                                />
                                <FormHelperText id="password" error={this.state.error} >{this.state.helperText}</FormHelperText>
                                <Grid container className={classes.grid}>
                                    <Grid item xs>
                                        <Button color="primary" component={RouterLink} className={classes.label} 
                                        to="/forgotpws">Forgot password</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            onClick={this.pwdFormHandler}
                                        >
                                            Next
                                        </Button>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </CardActions>
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

export default  connect(null,mapDispatchToProps)(withStyles(styles)(Login));