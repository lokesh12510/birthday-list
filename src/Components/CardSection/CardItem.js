import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";

import { connect, useDispatch } from "react-redux";
import { toggle_wishes } from "../../redux/actions/birthdayList.action";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#ffffffcc",
    borderRadius: "13px",

    "&:hover": {
      backgroundColor: "#f7f4f4",
      cursor: "pointer",
      boxShadow:
        "0px 8px 9px -5px rgb(0 0 0 / 20%), 0px 15px 22px 2px rgb(0 0 0 / 14%), 0px 6px 28px 5px rgb(0 0 0 / 12%)",
      transition: "background .5s cubic-bezier(0.23, 0.14, 0.35, 1.42)",
    },

    "&.MuiCardHeader-title": { textTransform: "capitalize" },
  },
  cardHeader: {
    "&.MuiCardHeader-title": {
      textTransform: "capitalize",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#493f8a",
    textTransform: "Uppercase",
  },
  cardactions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  PhoneIcon: {
    marginInlineEnd: "7px",
  },
  section: {
    margin: 0,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",

    justifyContent: "space-around",
    "&.MuiTypography-h6": { color: "#000" },
  },
  age: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
    color: "#a413ff",
  },
  heart: {
    color: "#a413ff",
  },
}));

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let getTime = (time) => {
  return new Date(time.dob).toLocaleDateString();
};

const CartItem = ({ value, toggle_wishes }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const date = value.dob;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const section = (
    <p className={classes.section}>
      {value.std} - {value.section}
    </p>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {/* {value.name.slice(0, 1)} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={value.name}
        subheader={section}
      />
      {/* <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <Typography
        variant="h2"
        color="textSecondary"
        component="p"
        className={classes.age}
      >
        {value.age}
      </Typography>
      <CardContent className={classes.cardContent}>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          className={classes.date}
        >
          {date}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardactions}>
        <Button aria-label="add to favorites" disableRipple>
          <PhoneIcon className={classes.PhoneIcon} color="primary" />
          <Typography variant="h6" color="textSecondary" component="h3">
            {value.phone}
          </Typography>
        </Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            toggle_wishes(value.id);
          }}
        >
          {value.isWished ? (
            <FavoriteIcon className={classes.heart} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default connect(null, { toggle_wishes })(CartItem);
