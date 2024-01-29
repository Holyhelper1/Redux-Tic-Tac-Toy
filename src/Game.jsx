import styles from "./game.module.css";
import React from "react";

import { FieldLayout } from "./components/Field/FieldLayout";
import { InformationLayout } from "./components/Information/InformationLayout";
import { useDispatch } from "./redux-manager";
import {
  setCurrentPlayer,
  setFields,
  setIsDraw,
  setIsGameEnded,
} from "./actions";

export const Game = () => {
  const dispatch = useDispatch();

  const startNewGame = () => {
    return (
      <button
        className={styles.newGameBtn}
        onClick={() => {
          dispatch(setCurrentPlayer(true));
          dispatch(setFields(Array(9).fill("")));
          dispatch(setIsDraw(false));
          dispatch(setIsGameEnded(false));
        }}>
        Новая Игра
      </button>
    );
  };

  return (
    <div className={styles.app}>
      {startNewGame()}
      <FieldLayout />
      <InformationLayout />
    </div>
  );
};

export default Game;
