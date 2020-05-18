import React,{Component} from './node_modules/react';
import {withStyles} from '@material-ui/core/styles';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

const styles=theme=({
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    },
    root:{
        display:'flex'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
})


class Layout extends Component{
    state={
        open:true
    }

    handleDrawerToogle=()=>{
        this.setState(prevState=>({
            open:!prevState.open
        }))
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
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