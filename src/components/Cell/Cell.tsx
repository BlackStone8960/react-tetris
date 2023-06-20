import React from "react";
import { TETROMINOS } from "../../setup";
import { StyledCell } from "./Cell.styles";

type Props = {
  type: keyof typeof TETROMINOS;
};

const Cell = ({ type }: Props) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);
