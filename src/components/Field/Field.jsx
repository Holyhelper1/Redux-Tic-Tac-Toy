import React from "react";
import styles from "./field.module.css";
import { useReduxState, useDispatch } from "../../redux-manager";
import { whoIsWinner } from "../Information/Information";
import {
  setFields,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
} from "../../actions";

export const Field = ({ index }) => {
  const { fields, currentPlayer } = useReduxState();
  const dispatch = useDispatch();
  const winner = whoIsWinner(fields);

  const handleClickCell = () => {
    let copyArrayFields = [...fields];
    if (winner || copyArrayFields[index]) {
      dispatch(setIsGameEnded(true));
      return;
    }

    copyArrayFields[index] = currentPlayer ? "X" : "0";
    dispatch(setFields(copyArrayFields));
    dispatch(setCurrentPlayer(!currentPlayer));

    const hasEmptyValue = copyArrayFields.some((value) => value === "");

    dispatch(setIsDraw(!hasEmptyValue));
  };

  return (
    <div className={styles.field} onClick={handleClickCell}>
      {fields[Number(index)]}
    </div>
  );
};
