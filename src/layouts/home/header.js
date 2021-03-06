import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
// import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DraftsIcon from '@material-ui/icons/Drafts';
import grey from '@material-ui/core/colors/grey';
import './scss/header.scss';

const StyledMenu = withStyles({
    paper: {
        backgroundColor: "#212121",
        color: "#e5e5e5",
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
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            background: 'linear-gradient(45deg, #b71c1c 30%,  #212121 70%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            // boxShadow: '& .MuiList-root .MuiMenu-list .MuiList-padding 0 3px 20px rgb(202 45 45 / 30%), 0 1px 2px rgba(0, 0, 0, .05), 0 0 0 1px rgb(255 0 0 / 10%)',
            textTransform: 'capitalize',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    grow: {
        // flexGrow: 1,
        margin: 0
    },
    color: {
        backgroundColor: grey[900]
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #b71c1c 30%,  #212121 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgb(125 0 0 / 30%)',
        textTransform: 'capitalize',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';



    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.color}>
                <Toolbar>
                    <h3 color='secondary'>NetMovies</h3>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {/* <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                        >
                            <Avatar className={classes.avatar}></Avatar>
                        </IconButton> */}
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <SentimentSatisfiedIcon style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary={`${'Itzik'}`} style={{}} />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="small" style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
