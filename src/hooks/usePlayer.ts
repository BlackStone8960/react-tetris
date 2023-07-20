import { useCallback, useState } from "react";
import { STAGE } from "../components/Stage/Stage";
import { randomTetromino } from "../gameHelpers";
import { STAGE_WIDTH, TETROMINOTYPE } from "../setup";

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: TETROMINOTYPE[][];
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as PLAYER);

  const rotate = (matrix: PLAYER["tetromino"]) => {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, i) => matrix.map((column) => column[i]));
    // Reverse each row to get a rotated matrix
    return mtrx.map((row) => row.reverse());
  };

  const playerRotate = (stage: STAGE): void => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(
    (): void =>
      setPlayer({
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
      }),
    []
  );

  return { player, updatePlayerPos, resetPlayer, playerRotate };
};
