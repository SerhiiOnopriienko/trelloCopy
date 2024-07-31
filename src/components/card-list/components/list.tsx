import { DroppableProvided } from "@hello-pangea/dnd";

import { type Card } from "../../../common/types/types";
import { DropZone } from "../styled/drop-zone";
import { Cards } from "./cards";

type Props = {
  dropProvided: DroppableProvided;
  cards: Card[];
  listId: string;
  onRenameCard: (newName: string, cardId?: string) => void;
  onChangeDescription: (newDescription: string, cardId?: string) => void;
};

const List = ({
  cards,
  dropProvided,
  onRenameCard,
  listId,
  onChangeDescription,
}: Props) => {
  return (
    <div className="list-container">
      <DropZone ref={dropProvided.innerRef}>
        <Cards
          cards={cards}
          onRenameCard={onRenameCard}
          listId={listId}
          onChangeDescription={onChangeDescription}
        />
        {dropProvided.placeholder}
      </DropZone>
    </div>
  );
};

export { List };
