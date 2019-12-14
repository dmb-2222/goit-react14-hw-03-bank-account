import React from "react";
import propTypes from "prop-types";
import style from "./Balance.module.css";
import calculate from '../../../helpers/calculate'

const Balance = ({ balance, history }) => {
  console.log(history)
  return (
    <section className={style.balance}>
      <span className={style.deposite}>⬆ {calculate(history, "deposit")}$</span>
      <span className={style.withdraw}>⬇ {calculate(history,  "withdraw")}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

export default Balance;

Balance.propTypes = {
  balance: propTypes.number,
  withdraw: propTypes.number
};
