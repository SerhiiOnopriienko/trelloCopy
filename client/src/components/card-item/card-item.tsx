import type { DraggableProvided } from "@hello-pangea/dnd";

import { type Card } from "../../common/types/types";
import { CopyButton } from "../primitives/copy-button";
import { DeleteButton } from "../primitives/delete-button";
import { Splitter } from "../primitives/styled/splitter";
import { Text } from "../primitives/text";
import { Title } from "../primitives/title";
import { Container } from "./styled/container";
import { Content } from "./styled/content";
import { Footer } from "./styled/footer";
import { CardEvent } from "../../common/enums/card-event.enum";
import { socket } from "../../context/socket";

type Props = {
  card: Card;
  isDragging: boolean;
  provided: DraggableProvided;
  listId: string;
  onRenameCard: (newName: string, cardId?: string) => void;
  onChangeDescription: (newDescription: string, cardId?: string) => void;
};

export const CardItem = ({
  card,
  isDragging,
  provided,
  onRenameCard,
  onChangeDescription,
  listId,
}: Props) => {
  const cardId = card.id;
  const onDeleteCard = () => {
    socket.emit(CardEvent.DELETE, { listId, cardId });
  };

  const onDuplicate = () => {
    socket.emit(CardEvent.DUPLICATE, { listId, cardId });
  };

  return (
    <Container
      className="card-container"
      isDragging={isDragging}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-is-dragging={isDragging}
      data-testid={card.id}
      aria-label={card.name}
    >
      <Content>
        <Title
          onChange={onRenameCard}
          title={card.name}
          fontSize="large"
          isBold
          card={card}
        />
        <Text
          text={card.description}
          onChange={onChangeDescription}
          cardId={cardId}
        />
        <Footer>
          <DeleteButton onClick={onDeleteCard} />
          <Splitter />
          <CopyButton onClick={onDuplicate} />
        </Footer>
      </Content>
    </Container>
  );
};
