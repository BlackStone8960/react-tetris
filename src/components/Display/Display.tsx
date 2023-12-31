import React from "react";
import { StyledDisplay } from "./Display.styles";

type Props = {
  gameOver?: boolean;
  text: string;
};

const Display = ({ gameOver, text }: Props) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
