import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

function TrelloActionButton(props) {
  const { list } = props;
  const buttonText = list ? "Add another List" : "Add Another Card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
  const placeholder = list
    ? "Enter List title . . ."
    : "Enter a title for this car . . .";

  const useStyles = makeStyles({
    listsContainer: {
      display: "flex",
      flexDirection: "row"
    },
    openForButtonGroup: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      height: 36,
      width: 272,
      opacity: buttonTextOpacity,
      color: buttonTextColor,
      backgroundColor: buttonTextBackground
    },
    addForm: {
      resize: "none",
      outline: "none",
      border: "none",
      overflow: "hidden",
      minWidth: 275,
      minHeight: 80,
      marginLeft: 10
    },
    addCardButton: {
      backgroundColor: "#5aac44",
      color: "#ffffff"
    },
    clearIconButton: {
      cursor: "pointer"
    },
    formButtonGroup: {
      marginTop: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  });

  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });
  const classes = useStyles();

  const [formOpen, setformOpen] = useState(true);
  const [text, setText] = useState("");

  const handleAddList = () => {
    const { dispatch } = props;
    if (text) {
      dispatch(addList(text));
    }
    setText("");
    return;
  };
  const handleAddCard = () => {
    const { dispatch, listID } = props;
    if (text) {
      dispatch(addCard(listID, text));
    }
    setText("");
    return;
  };

  return (
    <>
      {formOpen ? (
        <div
          onClick={() => setformOpen(formOpen === false ? true : false)}
          className={classes.openForButtonGroup}
        >
          <AddIcon />
          <p>{buttonText}</p>
        </div>
      ) : (
        <div>
          <TextareaAutosize
            placeholder={placeholder}
            onBlur={() => setformOpen(formOpen === true ? false : true)}
            value={text}
            onChange={e => setText(e.target.value)}
            className={classes.addForm}
          />
          <div className={classes.formButtonGroup}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                className={classes.addCardButton}
                color="primary"
                onMouseDown={list ? handleAddList : handleAddCard}
              >
                ADD CARD
              </Button>
            </ThemeProvider>
            <ClearIcon
              fontSize="large"
              className={classes.clearIconButton}
              onClick={e => setText("")}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default connect()(TrelloActionButton);
