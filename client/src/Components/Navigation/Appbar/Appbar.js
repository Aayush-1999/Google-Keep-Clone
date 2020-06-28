import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import styles from './Appbar.styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchClick, setSearchClick] = React.useState(false);
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  const updateSearchClick = () => {
    setSearchClick(true);
  }

  const closeSearchClick = () => {
    setSearchClick(false);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={menuId}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      classes={{list: classes.profileMenu, paper: classes.profileMenuRadius }}
    >
      <div className={classes.profileMenuInfo}>
        <AccountCircle className = {classes.profileMenuAccountIcon} />
        <Typography variant = 'subtitle1' color='textPrimary' className={classes.profileUserName}>Aayush Agarwal</Typography>
        <Typography variant='body2' color='textSecondary'>aayushaggarwal2007@gmail.com</Typography>
      </div>
      <Divider />
      <MenuItem onClick={handleMenuClose} classes={{root: classes.signOutButton}} ><Button variant='outlined'>Sign out</Button></MenuItem>
    </Menu>
  );

  return (
      <AppBar position="fixed" color='inherit' className={classes.appBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit"
            aria-label="open drawer" onClick={props.onDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="keep_logo" className={classes.keepLogo} />
          <Typography className={classes.title} variant="h6" noWrap>
            Keep
          </Typography>
          <div className={clsx({
              [classes.search]: true,
              [classes.searchFocussed]: searchClick
            })}
            onClick= {updateSearchClick}
            >
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            {searchClick &&
            <IconButton className={classes.closeSearchIcon} onClick={closeSearchClick} >
              <CloseIcon />
            </IconButton>}
          </div>
          <div className={classes.grow} />
          <div className={classes.accountOptions}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large' />
            </IconButton>
          </div>
        </Toolbar>
        {renderMenu}
      </AppBar>
    );
}

export default Header;