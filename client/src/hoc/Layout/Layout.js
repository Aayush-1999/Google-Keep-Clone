import React,{Component} from 'react';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import AppBar from '../../Components/Navigation/Appbar/Appbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './Layout.styles';

class Layout extends Component{
    state={
        open:true
    }

    handleDrawerToogle=()=>{
        this.setState(prevState=>({
            open:!prevState.open
        }))
    }

    handleDrawerCloseOnSmallScreenSize=()=>{
        if(window.innerWidth <= 640){
            this.setState({
                open:false
            })
        }
    }

    render(){
        const {classes} = this.props;
        window.addEventListener('resize',this.handleDrawerCloseOnSmallScreenSize)
        return(
            <div className={classes.root}>
                <AppBar onDrawerToggle={this.handleDrawerToogle} />
                <SideDrawer open={this.state.open} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Layout);