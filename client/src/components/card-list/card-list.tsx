import type { DroppableProvided } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";

import { type Card } from "../../common/types/types";
import { List } from "./components/list";
import { ListWrapper } from "./styled/list-wrapper";
import { ScrollContainer } from "./styled/scroll-container";
import { CardEvent } from "../../common/enums/card-event.enum";
import { socket } from "../../context/socket";

type Props = {
  listId: string;
  listType: string;
  cards: Card[];
};

const CardsList = ({ listId, listType, cards }: Props) => {
  const onRenameCard = (newName: string, cardId?: string) => {
    socket.emit(CardEvent.RENAME, { listId, cardId, newName });
  };

  const onChangeDescription = (newDescription: string, cardId?: string) => {
    socket.emit(CardEvent.CHANGE_DESCRIPTION, {
      listId,
      cardId,
      newDescription,
    });
  };

  return (
    <Droppable droppableId={listId} type={listType}>
      {(dropProvided: DroppableProvided) => (
        <ListWrapper {...dropProvided.droppableProps}>
          <ScrollContainer>
            <List
              cards={cards}
              dropProvided={dropProvided}
              onRenameCard={onRenameCard}
              onChangeDescription={onChangeDescription}
              listId={listId}
            />
          </ScrollContainer>
        </ListWrapper>
      )}
    </Droppable>
  );
};

export { CardsList };
