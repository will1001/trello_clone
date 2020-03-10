import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import { Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8
  },
  title: {
    fontSize: 14
  }
});

export default function TrelloList({ title, cards, listID }) {
  const styles = useStyles();
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.container}
          >
            <h3>{title}</h3>
            {cards.map((card, index) => (
              <TrelloCard
                key={card.id}
                index={index}
                text={card.text}
                id={card.id}
              />
            ))}
            <TrelloActionButton listID={listID} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
