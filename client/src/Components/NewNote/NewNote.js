import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './NewNote.styles';

const useStyles = makeStyles(styles);

function NewNote(props){
    const classes = useStyles();
    const [isShow, setIsShow] = React.useState(false);

    const handleContentClick = () => {
        setIsShow(true);
    }

    return(
        <div className = {classes.cardContainer}>
            <Card classes = {{root : classes.card }} >
                <CardContent classes={{root : classes.cardContent}} onClick={handleContentClick} >
                    <TextField placeholder = { isShow ? "Title" : "Take a note..." } 
                     InputProps = {{ disableUnderline : true, classes: {input: classes.inputPlaceholder} }} 
                    classes={{root: classes.textContainer}} fullWidth autoFocus size='small'/>
                    { isShow &&
                        <TextField placeholder = "Take a note..."  InputProps = {{disableUnderline : true}} 
                        classes={{root: classes.textContainer, classes: {input: classes.inputPlaceholder} }} fullWidth />
                    }
                </CardContent>
                {isShow &&
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                }
            </Card>
        </div>
    )
}

export default NewNote;