import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
        borderRadius: '7px',
        padding: theme.spacing(3)
    },
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    chip:{
        marginTop:theme.spacing(1)
    },
    cardContent:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'
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
        password:"",
        showPassword:false
    }
    handleChange = event => {
        this.setState({password:event.target.value})
    }

    handleGoBack=()=>{
        // this.props.history.goBack();
        this.props.history.push({
            pathname: "/signin",
            state:{email:this.props.history.location.state.email}
        })
    }
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
    };
    
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    pwdFormHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.password);
    }

    render(){
        const {classes} = this.props;
        return(
            <Container maxWidth="xs" classes={{ root:classes.root}} >
                <Card variant="outlined" className={classes.paper}>
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
                        <FormControl fullWidth margin="normal" className={classes.form} variant="outlined">
                        <InputLabel htmlFor="password">Enter your password</InputLabel>
                        <OutlinedInput  id="password"
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
                                // error
                                // helperText="Couldn't find your account"
                            />
                            <Grid container className={classes.grid}>
                            <Grid item xs>
                                <Link component={RouterLink} to="/forgotpwd" 
                                    variant="body2" className={classes.link} >
                                    Forgot Password
                                </Link>
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
                </Card>
            </Container>    
        )
    }
}

export default  withStyles(styles)(Login);