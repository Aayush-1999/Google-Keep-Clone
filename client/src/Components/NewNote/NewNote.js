import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { CheckBoxOutlined, ImageOutlined, AddAlertOutlined, ColorLensOutlined, ArchiveOutlined, MoreVertOutlined, UndoOutlined, RedoOutlined } from '@material-ui/icons';
import styles from './NewNote.styles';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

function NewNote(props){
    const classes = useStyles();

    return(
        <div className = {classes.cardContainer}>
            <Card classes = {{root : classes.card }} >
                <CardContent classes={{root : classes.cardContent}} onClick={(event) => props.openNote(event, "insideForm")} >
                    <TextField placeholder = { props.isShowNote ? "Title" : "Take a note..." } 
                        InputProps = {{ disableUnderline : true, classes: {input: classes.labelPlaceholder, root: classes.paddingZero} }} 
                        classes={{root: clsx(classes.textContainer,{ 
                            [classes.textContainerWidthxL]: props.isShowNote })}} autoFocus size='small'
                        multiline margin='none'
                    />
                    { !props.isShowNote &&
                        <Tooltip title="New list">
                            <IconButton classes={{root: classes.iconButtonRoot}} >
                               <CheckBoxOutlined  />
                            </IconButton>           
                        </Tooltip>    
                    }
                    { !props.isShowNote &&
                        <Tooltip title="New note with image">
                            <IconButton  classes={{root: classes.iconButtonRoot}}>
                                <ImageOutlined />
                            </IconButton>
                        </Tooltip>
                    }
                    { props.isShowNote && 
                        <Tooltip title="Pin note">
                            <IconButton>
                                <span class="material-icons-outlined">
                                    push_pin
                                </span>    
                            </IconButton>
                        </Tooltip>
                    }
                    { props.isShowNote &&
                    <TextField placeholder = "Take a note..."  
                        InputProps = {{disableUnderline : true, classes: {input: classes.textPlaceholder, root: classes.paddingZero} }} 
                        classes={{root: classes.textContainerWidthxL }} fullWidth 
                        multiline autoFocus
                    />
                    }
                </CardContent>
                { props.isShowNote &&
                <CardActions classes={{root: classes.paddingSmall}}>
                        <Tooltip title="Remind me">
                            <IconButton classes={{root: clsx(classes.paddingMedium, classes.smallLeftMargin) }}><AddAlertOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="Change color">
                        <IconButton classes={{root: classes.paddingMedium}}><ColorLensOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="Add image">
                            <IconButton classes={{root: classes.paddingMedium}}><ImageOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="Archive">
                            <IconButton classes={{root: classes.paddingMedium}}><ArchiveOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                            <IconButton classes={{root: classes.paddingMedium}}><MoreVertOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="Undo">
                            <IconButton classes={{root: classes.paddingMedium}}><UndoOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                        <Tooltip title="Redo">
                            <IconButton classes={{root: classes.paddingMedium}}><RedoOutlined fontSize='small' classes={{root:classes.iconSize}} /></IconButton>
                        </Tooltip>
                    <Button size="small" classes={{root: classes.closeButton}} >Close</Button>
                </CardActions>
                }
            </Card>
        </div>
    )
}

export default NewNote;