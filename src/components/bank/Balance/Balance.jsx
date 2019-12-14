import React from "react";
import propTypes from "prop-types";
import style from "./Balance.module.css";

const calculate = (history, operationType) => {
  return history
    .filter(el => el.type === operationType)
    .reduce((acc, el) => acc + Number(el.amount), 0);
};

const Balance = ({ balance, history }) => {
  console.log(history)
  const deposit = calculate(history, "deposit")
  const withdraw = calculate(history,  "withdraw");
  return (
    <section className={style.balance}>
      <span className={style.deposite}>⬆ {deposit}$</span>
      <span className={style.withdraw}>⬇ {withdraw}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

export default Balance;

Balance.propTypes = {
  balance: propTypes.number,
  withdraw: propTypes.number
};
