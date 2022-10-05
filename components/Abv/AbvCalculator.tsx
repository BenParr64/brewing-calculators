import { Input, Table } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const calculateAbv = (original: number, final: number): number =>
  (final - original) * 131.25;

const formatAbv = (abv: number): string =>
  `${Math.round((abv + Number.EPSILON) * 100) / 100}%`;

const AbvCalculator = () => {
  const [finalGravity, setFinalGravity] = useState(1.01);
  const [originalGravity, setOriginalGravity] = useState(1.05);
  const [abv, setAbv] = useState(calculateAbv(originalGravity, finalGravity));

  useEffect(() => {
    setAbv(calculateAbv(originalGravity, finalGravity));
  }, [finalGravity, originalGravity]);

  const isValid = (input: number) => input < 1 && input > 0;

  return (
    <>
      <table>
        <thead>
          <td>Alcohol By Volume Calculator:</td>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td>Original Gravity</td>
            <td>
              <Input
                bordered
                defaultValue={originalGravity.toString()}
                type="number"
                step=".01"
                onChange={(e) => setOriginalGravity(parseFloat(e.target.value))}
              />
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td>Final Gravity</td>
            <td>
              <Input
                bordered
                defaultValue={finalGravity}
                type="number"
                step=".01"
                onChange={(e) => setFinalGravity(parseFloat(e.target.value))}
              />
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td>Alcohol by Volume</td>
            <td>
              <Input readOnly bordered value={formatAbv(abv)} type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AbvCalculator;
