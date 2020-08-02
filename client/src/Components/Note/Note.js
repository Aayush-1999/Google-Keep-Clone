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
import { CheckBoxOutlined, ImageOutlined, AddAlertOutlined, ColorLensOutlined, ArchiveOutlined, MoreVertOutlined, UndoOutlined, RedoOutlined } from '@material-ui/icons';
import clsx from 'clsx';
import styles from './Note.styles';

const useStyles = makeStyles(styles);

function Note(props){
    const classes = useStyles();

    return(
        <div>
            <Card>
                <CardHeader>First Note</CardHeader>
                <CardContent></CardContent>
                <CardActions></CardActions>
            </Card>
        </div>
    )
}

export default Note;