import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 8
  },

  title: {
    fontSize: 14
  }
});

export default function TrelloCard({ text, id, index }) {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                {text}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
