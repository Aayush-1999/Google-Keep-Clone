import React, {Component} from 'react';
import axios from '../../axiosInstance';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles} from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';
 
// const theme=createMuiTheme();

const styles=theme=>({
    root:{
        paddingLeft:'0px',
        paddingRight:'0px'
    },
    paper: {
        [theme.breakpoints.down('sm')]:{
            border:'none'
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: theme.spacing(8),
            border:'1px solid rgba(0,0,0,0.12)',
            borderRadius: '7px',
        } 
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
    },
    grid:{
        marginTop:theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    label:{
        textTransform:'none'
    }
  });

class Login extends Component{
    state={
        email:" ",
        progressBar:false,
        error:false,
        helperText:""
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
        this.setState({progressBar:true},()=>{
            setTimeout(()=>{
                axios.post("/login/checkEmail",{
                    email:this.state.email
                })
                .then(response=>{
                    console.log(response);
                    if(response.status===200){
                        this.props.history.push({
                            pathname: "/signin/pwd",
                            state:{email:this.state.email}
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
                this.props.history.push("/signup")
            },200)
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
                                error={this.state.error}
                                helperText={this.state.helperText}
                            />
                            <Grid container className={classes.grid}>
                            <Grid item xs>
                                <Button color="primary"className={classes.label} onClick={this.buttonClickHandler} 
                                >Create account</Button>
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