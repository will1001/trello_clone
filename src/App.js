import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList";
import TrelloActionButton from "./components/TrelloActionButton";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";

const useStyles = makeStyles({
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
});

function App(props) {
  const classes = useStyles();
  const { lists } = props;
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Hello World</h1>
        <div className={classes.listsContainer}>
          {lists.map(list => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

export default connect(mapStateToProps)(App);
