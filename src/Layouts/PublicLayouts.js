import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import DetailPage from "../Pages/DetailPage";
import Home from "../Pages/Home";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: "0",
    zIndex: 1110,
  },
}));

export default function PublicLayouts(props) {
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-between">
      <Grid item sm={12} className={classes.header}>
        <Header />
      </Grid>
      <Grid item sm={2}>
        <Sidebar />
      </Grid>
      <Grid item sm={12} md={10}>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </Grid>
    </Grid>
  );
}
