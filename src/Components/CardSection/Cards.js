import React, { useContext, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { store } from "../../redux/store";
import { get_list } from "../../redux/actions/birthdayList.action";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

// date

// date

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "64px",
  },
  appbar: {
    top: "64px",
    backgroundColor: "#da921a",
  },
  cardContainer: {
    paddingTop: "2rem",
  },
  link: {
    textDecoration: "none",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    "& .MuiFormLabel-root": {
      color: "#000",
      fontWeight: 500,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Cards({ loading }) {
  const classes = useStyles();

  const birthdayList = useSelector(
    (state) => state.getList_reducer.birthdayList
  );


  birthdayList.filter(group=>group)

  useEffect(() => {
    store.dispatch(get_list());
  }, []);

  // Filter-handler
  const [filter, setFilter] = useState("all");
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  // Filter-handler

  // Date-handler
  const filterDateDefault = moment().format().slice(0, 10);
  const [fromDate, setFromDate] = React.useState(filterDateDefault);

  const handleFromDateChange = (date) => {
    console.log(date, "date");
    setFromDate(date);
  };
  const filterFromDate = fromDate.split("-").reverse().join("-");

  console.log(filterFromDate, filterDateDefault);

  // Date-handler

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="all"
              value={filter}
              onChange={handleFilter}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"wished"}>Wished</MenuItem>
              <MenuItem value={"not_wished"}>Not Wished</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue={filterDateDefault}
              onChange={(e) => handleFromDateChange(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          {/* <FormControl className={classes.formControl}>
            <TextField
              id="date"
              label="To"
              type="date"
              onChange={(e) => handleToDateChange(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl> */}
        </Toolbar>
      </AppBar>
      <Container>
        {loading && <h1>Loading</h1>}
        {!loading && (
          <Grid
            container
            alignItems="center"
            className={classes.cardContainer}
            spacing={3}
          >
            {birthdayList
              .filter((item) => {
                if (filter === "wished") {
                  return item.isWished;
                } else if (filter === "not_wished") {
                  return !item.isWished;
                } else {
                  return item;
                }
              })
              .filter((item) =>
                filterFromDate
                  ? item.dob.slice(0, 5) === filterFromDate.slice(0, 5)
                  : item
              )
              .map((item) => (
                <Grid item key={item.id} xs={3}>
                  <CardItem value={item} />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.getList_reducer.loading,
});

export default connect(mapStateToProps)(Cards);
