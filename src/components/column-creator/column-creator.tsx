import { Dispatch, SetStateAction } from "react";
import { ColumnCreatorInput } from "./components/column-creator-input";
import { Container } from "./styled/container";

type Props = {
  onCreateList: (name: string) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const ColumnCreator = ({ onCreateList, name, setName }: Props) => {
  return (
    <Container>
      <ColumnCreatorInput
        onCreateList={onCreateList}
        name={name}
        setName={setName}
      />
    </Container>
  );
};
