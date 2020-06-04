import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
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
            <ListItem button disableRipple
                classes={{root:classes.listItem,selected:classes.selected}} 
                component={RouterLink} 
                to='/home' 
                selected={selectedIndex === 0} 
                onClick={(event)=>handleListItemClick(event,0)}      
            >
                <ListItemIcon>{<EmojiObjectsOutlinedIcon />}</ListItemIcon>
                <ListItemText primary="Notes" primaryTypographyProps={{variant:"subtitle2",classes:{subtitle2:classes.listText} }} />
            </ListItem>
            <ListItem button disableRipple
                classes={{root:classes.listItem,selected:classes.selected}} 
                component={RouterLink} 
                to='/reminders' 
                selected={selectedIndex === 1} 
                onClick={(event)=>handleListItemClick(event,1)}  
            >
                <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
                <ListItemText primary="Reminders" primaryTypographyProps={{variant:"subtitle2"}}  />
            </ListItem>
            <ListItem button disableRipple
                classes={{root:classes.listItem,selected:classes.selected}}  
                selected={selectedIndex === 2} 
                onClick={(event)=>handleListItemClick(event,2)}  
            >
                <ListItemIcon>{<EditOutlinedIcon />}</ListItemIcon>
                <ListItemText primary="Edit labels" primaryTypographyProps={{variant:"subtitle2"}}  />
            </ListItem>
            <ListItem button disableRipple
                classes={{root:classes.listItem,selected:classes.selected}} 
                component={RouterLink} 
                to='/archive' 
                selected={selectedIndex === 3} 
                onClick={(event)=>handleListItemClick(event,3)}  
            >
                <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
                <ListItemText primary="Archive" primaryTypographyProps={{variant:"subtitle2"}}  />
            </ListItem>
            <ListItem button disableRipple
                classes={{root:classes.listItem,selected:classes.selected}} 
                component={RouterLink} 
                to='/trash' 
                selected={selectedIndex === 4} 
                onClick={(event)=>handleListItemClick(event,4)}  
            >
                <ListItemIcon>{<DeleteOutlineOutlinedIcon />}</ListItemIcon>
                <ListItemText primary="Trash" primaryTypographyProps={{variant:"subtitle2"}}  />
            </ListItem>
        </List>
    </Drawer>
  );
}

export default SideDrawer;