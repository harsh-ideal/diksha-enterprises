import React from "react";
import styles from "./css/buttons.module.css";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {text}
    </button>
  );
};


export const SecondaryButton = ({ text, onClick }) => {
    return (
      <button className={styles.secondaryButton} onClick={onClick}>
        {text}
      </button>
    );
  };

  export const OutlineButton = ({ text="Outline", onClick }) => {
    return (
      <button className={styles.outlinedButton} onClick={onClick}>
        {text}
      </button>
    );
  };

  export const DisabledButton = ({ text }) => {
    return (
      <button className={styles.disabled} disabled>
        {text}
      </button>
    );
  };

  export const GradientButton = ({ text }) => {
    return (
      <button className={styles.gradientButton} disabled>
        {text}
      </button>
    );
  };


  export  const TextButton = ({ text, onClick }) => {
    return (
      <button className={styles.textButton} onClick={onClick}>
        {text}
      </button>
    );
  };

  export  const RoundedButton = ({ text, onClick }) => {
    return (
      <button className={styles.roundedButton} onClick={onClick}>
        {text}
      </button>
    );
  };