import React, { useState } from "react";

import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Divider from "@material-ui/core/Divider";
// import styles from "./app.module.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#0ec261",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textTransform: "uppercase",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    list: {
      width: 250,
    },
  })
);

export const MainLayout: React.FC = () => {
  const classes = useStyles();
  const [menuList] = useState([
    { id: 1, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
    { id: 2, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
    { id: 3, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
    { id: 4, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
    { id: 5, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
    { id: 6, title: "Конвертер", src: "/converter", icon: <AutorenewIcon /> },
  ]);
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenuHandler = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Tab"
    ) {
      return;
    }
    setMenu(open);
  };

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            onClick={toggleMenuHandler(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Math-helper
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск...."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menu} onClose={toggleMenuHandler(false)}>
        <div
          role="presentation"
          onClick={toggleMenuHandler(false)}
          onKeyDown={toggleMenuHandler(false)}
        >
          <List className={classes.list}>
            {menuList.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
