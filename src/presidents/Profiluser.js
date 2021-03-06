import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItems from './listItems';
import { Avatar, Button, Container, Fab, Grid, Menu, MenuItem, Paper, ThemeProvider, withStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Axios from 'axios';
import 'antd/dist/antd.css';
import { MessageOutlined } from '@ant-design/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import Morevert from '../components/Morevert';
import Card from '../components/Card1';
import { CalendarToday} from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffc107',
        },

        secondary: {
            // This is green.A700 as hex.
            main: '#009688',
        },
    },

});


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          UNIV CLUB
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),

    },
    fixedHeight: {
        height: 500,
    },

    user: {
        height: 500,
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        /* display: 'flex',
         alignSelf:"flex-end",
         alignItems:"flex-star",*/

    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    avtr: {
        paddingTop:"5%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        paddingTop: "2%",
        fontSize: "20px"
    },
    about1:{
        paddingLeft:"3%",
        
    },
    about0:{
        display: 'flex',
        alignItems: 'flex-start',
    },
    about:{
       margin:"5%",
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


export default function Profiluser() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // eslint-disable-next-line
    const [loggedIn, setLoggedIn] = useState(false)

    const logout = () => {
        Axios.get('http://localhost:3030/logout').then((response) => {
            if (response.data.loggedIn === true) {
                setLoggedIn(false)
            }
        })
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const user = clsx(classes.Grid, classes.user);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <AppBar color='secondary' position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton onClick={handleClick} color="inherit">
                            <Avatar />
                        </IconButton>
                        <StyledMenu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                           
                            <MenuItem onClick={logout}>
                                <ExitToAppIcon />
                                Logout
                            </MenuItem>
                        </StyledMenu>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            CLUB NAME
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={7} color="primary">
                                <MessageOutlined />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <ListItems />
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Recent Deposits */}
                        <Grid item xs={12}  >
                            <Paper className={classes.user}>
                                <div>
                                    <Morevert />
                                </div>
                                <div className={classes.avtr}>
                                    <Avatar className={classes.large} />
                                    <h1 className={classes.name}>Name,CLUB </h1>
                                    <h3>Your Slogn</h3>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={7} >
                         <Card/>
                        </Grid>
                        <Grid item xs={5} >
                            <Paper className={fixedHeightPaper}>
                                <div>
                                    <h1 style={{paddingBottom:"3%",color:"#009688"}}>ABOUT CLUB</h1>
                                    <Divider  />
                                    <div className={classes.about}>
                                    <div className={classes.about0} >
                                        <CalendarToday/>
                                        <div className={classes.about1}>
                                    <h3> Creat at</h3>
                                    <p>2019/10/17</p>
                                    </div>
                                    </div>
                                    <div className={classes.about0}>
                                        <PhoneIcon/>
                                        <div className={classes.about1}>
                                    <h3> Phone</h3>
                                    <p>(+213) 541807279</p>
                                    </div>
                                    </div>
                                    <div className={classes.about0}>
                                        <RoomIcon/>
                                        <div className={classes.about1}>
                                    <h3> Adress</h3>
                                    <p>Faculty of science exact</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>

        </div>
    );
}

