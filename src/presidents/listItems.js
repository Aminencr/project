import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {MessageOutlined} from '@ant-design/icons';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avtr:{
    paddingBottom:"5%",
    paddingTop:"5%",
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <ListItem button
      component={Link} to="/profil"
      selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
      <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button     component={Link} to="/profil/@username"
      selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Profil" />
    </ListItem>
    <ListItem button 
    component={Link} to="/profil/chat"
     selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
      <ListItemIcon>
      <MessageOutlined/>
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItem>
    <ListItem button selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          component={Link} to="/profil/calendar"
          >
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    
    <ListItem button 
     selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
              component={Link} to="/profil/Members"
>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>
    <ListItem button 
     selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
              component={Link} to="/profil/registrations"
>
      <ListItemIcon>
        <GroupAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Registrations" />
    </ListItem>
   
    
    </div>
  );
}
