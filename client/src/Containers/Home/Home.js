import React,{Component} from 'react';
import { withStyles} from '@material-ui/core/styles';  
import NewNote from '../../Components/NewNote/NewNote';
import Note from '../../Components/Note/Note';
import styles from './Home.styles';

class Home extends Component{
    state = {
        showNewNote: false
    }

    handleNewNoteToggle = (event, clickPosition) => {
        if(clickPosition === 'insideForm'){
            this.setState({showNewNote : true});
            event.stopPropagation();
        }
        else{
            this.setState({showNewNote : false});
        }
    }

    render(){
        const { classes }  = this.props;
        return(
            <div onClick={this.handleNewNoteToggle} >
                <NewNote isShowNote={this.state.showNewNote} openNote={this.handleNewNoteToggle} />
                <div >
                    <Note />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
