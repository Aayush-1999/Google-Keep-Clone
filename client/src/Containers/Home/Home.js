import React,{Component} from 'react';
import NewNote from '../../Components/NewNote/NewNote';

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
        return(
            <div onClick={this.handleNewNoteToggle} >
                <NewNote isShowNote={this.state.showNewNote} openNote={this.handleNewNoteToggle} />
            </div>
        )
    }
}

export default Home;
