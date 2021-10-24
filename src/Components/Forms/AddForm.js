import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ADDFORM } from "../../redux/actions/formToggle.action";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { add_list } from "../../redux/actions/birthdayList.action";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddForm() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(ADDFORM());
  };

  const formToggler = useSelector((state) => state.toggleReducer.addForm);

  const [formDate, setFormDate] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [section, setSection] = useState("");
  const [std, setStd] = useState("");

  const handleDate = (date) => {
    setFormDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      age: age,
      phone: phone,
      section: section,
      std: std,
      dob: formDate.split("-").reverse().join("-"),
      isActive: false,
      isWished: false,
    };
    dispatch(add_list(data));
    console.log(data);
  };

  return (
    <div>
      <Dialog
        onClose={handleToggle}
        aria-labelledby="customized-dialog-title"
        open={formToggler}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="customized-dialog-title" onClose={handleToggle}>
            Add Student
          </DialogTitle>
          <DialogContent dividers>
            <Grid
              container
              spacing="2"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Name"
                  variant="outlined"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Age"
                  variant="outlined"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  type="date"
                  label="dob"
                  onChange={(e) => handleDate(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Phone"
                  variant="outlined"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Section"
                  variant="outlined"
                  onChange={(e) => {
                    setSection(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Standard"
                  variant="outlined"
                  onChange={(e) => {
                    setStd(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleToggle}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
