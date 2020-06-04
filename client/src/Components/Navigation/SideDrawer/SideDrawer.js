import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styles from './SideDrawer.styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(styles)

function SideDrawer(props) {
  const classes = useStyles();
  const [selectedIndex,setSelectedIndex] = useState(0);

  const handleListItemClick = (event,index) => {
      setSelectedIndex(index);
  }

  return (
    <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
        })}
        classes={{
            paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
            }),
        }}
    >
        <Toolbar />
        <List>
            <ListItem button
                classes={{root:classes.listItem}} 
                component={RouterLink} 
                to='/home' 
                selected={selectedIndex === 0} 
                onClick={(event)=>handleListItemClick(event,0)}      
            >
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button
                classes={{root:classes.listItem}} 
                component={RouterLink} 
                to='/reminders' 
                selected={selectedIndex === 1} 
                onClick={(event)=>handleListItemClick(event,1)}  
            >
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary="Reminders" />
            </ListItem>
            <ListItem button
                classes={{root:classes.listItem}}  
                selected={selectedIndex === 2} 
                onClick={(event)=>handleListItemClick(event,2)}  
            >
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary="Edit labels" />
            </ListItem>
            <ListItem button
                classes={{root:classes.listItem}} 
                component={RouterLink} 
                to='/archive' 
                selected={selectedIndex === 3} 
                onClick={(event)=>handleListItemClick(event,3)}  
            >
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary="Archive" />
            </ListItem>
            <ListItem button
                classes={{root:classes.listItem}} 
                component={RouterLink} 
                to='/trash' 
                selected={selectedIndex === 4} 
                onClick={(event)=>handleListItemClick(event,4)}  
            >
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
        </List>
    </Drawer>
  );
}

export default SideDrawer;