import React from "react";
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import shortid from "short-id";
import style from "./Dashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LsBankHistory from "../services/Ls/Ls";

const prevTransactions = LsBankHistory.getBankHistory();

class Dashboard extends React.Component {
  state = {
    history: [],
    balance: 0
  };

  noMoney = () =>
    toast("На счету недостаточно средств для проведения операции!", {
      autoClose: 5000
    });
  unCorrectInput = () =>
    toast("Введите сумму для проведения операции!", { autoClose: 5000 });

  componentDidMount() {
    if (prevTransactions) {
      this.setState({
        history: prevTransactions.history,
        balance: prevTransactions.balance,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.history !== this.state.history) {
      LsBankHistory.setBankHistory(this.state);
    }
  }
  createNewOperation = (typeOperation, valueInput) => {
    const dateOperation = new Date().toLocaleString();
    return {
      id: shortid.generate(),
      type: typeOperation,
      amount: valueInput,
      date: dateOperation
    };
  };

  handleCkickDeposit = (valueInput, name) => {
    if (valueInput > 0) {
      const operation = this.createNewOperation(name, valueInput);
      this.setState(prevState => {
        return {
          history: [operation, ...prevState.history],
          balance: (prevState.balance += Number(operation.amount))
        };
      });
    } else {
      this.unCorrectInput();
    }
  };

  handleCkickWithdraw = (valueInput, name) => {
    if (valueInput > 0) {
      const operation = this.createNewOperation(name, valueInput);
      this.setState(prevState => {
        if (this.state.balance >= valueInput) {
          return {
            balance: (prevState.balance -= Number(operation.amount)),
            history: [operation, ...prevState.history]
          };
        }
        return this.noMoney();
      });
    } else {
      this.unCorrectInput();
    }
  };

  render() {
    const { history, balance } = this.state;
    return (
      <div className={style.dashboard}>
        <Controls
          deposit={this.handleCkickDeposit}
          withdraw={this.handleCkickWithdraw}
        />
        <ToastContainer />
        <Balance balance={balance} history={history}/>
        <TransactionHistory history={history} />
      </div>
    );
  }
}
export default Dashboard;
