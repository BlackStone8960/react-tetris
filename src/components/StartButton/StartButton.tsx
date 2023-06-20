import React from "react";
import { StyledStartButton } from "./StartButton.styles";

type Props = {
  callback: () => void;
};

const StartButton = ({ callback }: Props) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
