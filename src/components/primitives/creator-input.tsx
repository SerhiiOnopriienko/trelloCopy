import React, { Dispatch, SetStateAction } from "react";

import { AddButton } from "./add-button";
import { Input } from "./styled/input";

type Props = {
  onSubmit: (value: string) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

const CreatorInput = ({ onSubmit, name, setName }: Props) => {
  const onClick = () => {
    onSubmit(name);
    setName("");
  };

  return (
    <React.Fragment>
      <Input
        className="creator-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fontSize="medium"
        width={250}
      />
      <AddButton onClick={onClick} />
    </React.Fragment>
  );
};

export { CreatorInput };
