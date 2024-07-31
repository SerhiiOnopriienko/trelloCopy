import { Dispatch, SetStateAction } from "react";
import { CreatorInput } from "../../primitives/creator-input";
import { ColumnCreatorContainer } from "../styled/column-creator-container";

type Props = {
  onCreateList: (name: string) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const ColumnCreatorInput = ({ onCreateList, name, setName }: Props) => {
  return (
    <ColumnCreatorContainer className="column-creator-container">
      <CreatorInput onSubmit={onCreateList} name={name} setName={setName} />
    </ColumnCreatorContainer>
  );
};
