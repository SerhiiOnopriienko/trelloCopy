import { Dispatch, SetStateAction } from "react";
import { CreatorInput } from "../../primitives/creator-input";
import { FooterContainer } from "../styled/footer-container";

type Props = {
  onCreateCard: (cardName: string) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

const Footer = ({ onCreateCard, name, setName }: Props) => {
  return (
    <FooterContainer className="column-footer-container">
      <CreatorInput onSubmit={onCreateCard} name={name} setName={setName} />
    </FooterContainer>
  );
};

export { Footer };
