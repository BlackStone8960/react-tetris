import React from "react";
import { TETROMINOS } from "../../setup";
import Cell from "../Cell/Cell";
import { StyledStage } from "./Stage.styles";

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
};

const Stage = ({ stage }: Props) => (
  <StyledStage>
    {stage.map((row) => row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
