import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Layout = ({children, title, cartCount = 0}) => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = (to) => () => history.push(to);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Button color="inherit" onClick={handleClick("/")}>Продукты</Button>

                    <IconButton edge="end" onClick={handleClick("/card")}>
                        <Badge badgeContent={cartCount} color="secondary">
                            <ShoppingCartIcon style={{ color: "white" }}/>
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
            {children}
        </div>
    );
}

export default Layout;