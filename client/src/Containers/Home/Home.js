import React,{Component} from 'react';
import NewNote from '../../Components/NewNote/NewNote';

class Home extends Component{
    render(){
        return(
            <div>
                <NewNote />
            </div>
        )
    }
}

export default Home;