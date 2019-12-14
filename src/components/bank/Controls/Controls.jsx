import React from "react";
import style from "./Controls.module.css";
import propTypes from "prop-types";

class Controls extends React.Component {
  state = { value: "" };

  handleInput = e => {
    this.setState({ value: +e.target.value });
  };
  hadleTransaction = ({ target: { name } }) => {
    const { value } = this.state;
    const typeTransaction = name;
    // this.props[typeTransaction](value, typeTransaction);
    this.props.handleClickTransaction(value, typeTransaction)
    this.setState({ value: "" });
  };
  render() {
    const { value } = this.state;
    return (
      <section className={style.controls}>
        <form onSubmit={evt => evt.preventDefault()}>
          <input
            type="number"
            className={style.input}
            onChange={this.handleInput}
            value={value}
          />
          <button
            type="submit"
            className={style.button}
            name="deposit"
            onClick={this.hadleTransaction}
          >
            Deposit
          </button>
          <button
            type="submit"
            className={style.button}
            name="withdraw"
            onClick={this.hadleTransaction}
          >
            Withdraw
          </button>
        </form>
      </section>
    );
  }
}
export default Controls;

Controls.propTypes = {
  hadleDeposit: propTypes.func,
  resetForm: propTypes.func
};
