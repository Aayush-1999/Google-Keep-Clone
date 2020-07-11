import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { CheckBoxOutlined, ImageOutlined, AddAlertOutlined, ColorLensOutlined, ArchiveOutlined, MoreVertOutlined, UndoOutlined, RedoOutlined } from '@material-ui/icons';
import styles from './NewNote.styles';
import clsx from 'clsx';

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
                        InputProps = {{ disableUnderline : true, classes: {input: classes.labelPlaceholder, root: classes.noPadding} }} 
                        classes={{root: clsx(classes.textContainer,{ 
                            [classes.textContainerWidthxL]: isShow })}} autoFocus size='small'
                        multiline margin='none'
                    />
                    { !isShow &&
                        <IconButton classes={{root: classes.iconButtonRoot}} >
                            <CheckBoxOutlined  />
                        </IconButton>
                    }
                    { !isShow &&
                    
                        <IconButton  classes={{root: classes.iconButtonRoot}}>
                            <ImageOutlined />
                        </IconButton>
                    }
                    { isShow && 
                    <IconButton>
                        <span class="material-icons-outlined">
                            push_pin
                        </span>    
                    </IconButton>
                    }
                    { isShow &&
                    <TextField placeholder = "Take a note..."  
                        InputProps = {{disableUnderline : true, classes: {input: classes.textPlaceholder, root: classes.noPadding} }} 
                        classes={{root: classes.textContainerWidthxL }} fullWidth 
                        multiline autoFocus
                    />
                    }
                </CardContent>
                {isShow &&
                <CardActions>
                    <IconButton size='small'><AddAlertOutlined /></IconButton>
                    <IconButton size='small'><ColorLensOutlined /></IconButton>
                    <IconButton size='small'><ImageOutlined /></IconButton>
                    <IconButton size='small'><ArchiveOutlined /></IconButton>
                    <IconButton size='small'><MoreVertOutlined /></IconButton>
                    <IconButton size='small'><UndoOutlined /></IconButton>
                    <IconButton size='small'><RedoOutlined /></IconButton>
                    <Button size="small">Close</Button>
                </CardActions>
                }
            </Card>
        </div>
    )
}

export default NewNote;