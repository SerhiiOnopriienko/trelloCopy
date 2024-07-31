import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import { Draggable } from "@hello-pangea/dnd";

import { type Card } from "../../common/types/types";
import { CardsList } from "../card-list/card-list";
import { DeleteButton } from "../primitives/delete-button";
import { Splitter } from "../primitives/styled/splitter";
import { Title } from "../primitives/title";
import { Footer } from "./components/footer";
import { Container } from "./styled/container";
import { Header } from "./styled/header";
import { socket } from "../../context/socket";
import { ListEvent } from "../../common/enums/list-event.enum";
import { CardEvent } from "../../common/enums/card-event.enum";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  listId: string;
  listName: string;
  cards: Card[];
  index: number;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const Column = ({ listId, listName, cards, index }: Props) => {
  const [name, setName] = useState("");

  const onDeleteList = () => {
    socket.emit(ListEvent.DELETE, listId);
  };

  const onRenameList = (newName: string) => {
    socket.emit(ListEvent.RENAME, { id: listId, newName });
  };

  const addCard = (cardName: string) => {
    socket.emit(CardEvent.CREATE, listId, cardName);
  };

  return (
    <Draggable draggableId={listId} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Container
          className="column-container"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Header
            className="column-header"
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            <Title
              aria-label={listName}
              title={listName}
              onChange={onRenameList}
              fontSize="large"
              width={200}
              isBold
              card={cards[0]}
            />
            <Splitter />
            <DeleteButton color="#FFF0" onClick={onDeleteList} />
          </Header>
          <CardsList listId={listId} listType="CARD" cards={cards} />
          <Footer onCreateCard={addCard} name={name} setName={setName} />
        </Container>
      )}
    </Draggable>
  );
};
