import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./IngredientModal.module.css";
import { IngredientModalProps } from "./IngredientModal.types";

const IngredientModal = ({ buttonText, children }: IngredientModalProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        style={{ backgroundColor: "#001b3f", fontWeight: "bold" }}
        onClick={() => setShow(!show)}
      >
        {buttonText}
      </Button>
      {show && (
        <div className={styles.container}>
          <div className={styles.card}>
            <button onClick={() => setShow(false)}>X</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientModal;
