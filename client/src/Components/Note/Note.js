import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { CheckBoxOutlined, ImageOutlined, AddAlertOutlined, ColorLensOutlined, ArchiveOutlined, MoreVertOutlined } from '@material-ui/icons';
import clsx from 'clsx';
import styles from './Note.styles';

const useStyles = makeStyles(styles);

function Note(props){
    const classes = useStyles();

    return(
        <div>
            <Card>
                <CardHeader title="Sample Note" 
                    action={<Tooltip title="Pin note">
                                <IconButton>
                                    <span class="material-icons-outlined">
                                        push_pin
                                    </span>    
                                </IconButton>
                            </Tooltip>
                        } 
                />
                <CardContent>
                <p>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </p>
                </CardContent>
                <CardActions>
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
                </CardActions>
            </Card>
        </div>
    )
}

export default Note;