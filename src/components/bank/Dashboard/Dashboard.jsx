import React from "react";
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import shortid from "short-id";
import style from "./Dashboard.module.css";
import * as toastInfo from "../../../helpers/toastInfo";
import "react-toastify/dist/ReactToastify.css";
import LsBankHistory from "../services/ls/ls";

const prevTransactions = LsBankHistory.getBankHistory();

class Dashboard extends React.Component {
  state = {
    history: [],
    balance: 0
  };

  componentDidMount() {
    if (prevTransactions) {
      this.setState({
        history: prevTransactions.history,
        balance: prevTransactions.balance
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.history !== this.state.history) {
      LsBankHistory.setBankHistory(this.state);
    }
  }
  createNewOperation = (typeOperation, valueInput) => {
    // const dateOperation = new Date().toLocaleString();
    return {
      id: shortid.generate(),
      type: typeOperation,
      amount: valueInput,
      date: new Date().toLocaleString()
    };
  };
  handleClickTransaction = (valueInput, name) => {
    if (valueInput > 0) {
      const operation = this.createNewOperation(name, valueInput);
      this.setState(prevState => {
        if (name === "deposit") {
          return {
            history: [operation, ...prevState.history],
            balance: (prevState.balance += Number(operation.amount))
          };
        }
        if (this.state.balance >= valueInput) {
          return {
            history: [operation, ...prevState.history],
            balance: (prevState.balance -= Number(operation.amount))
          };
        }
        toastInfo.noMoney();
      });
      return;
    }
    toastInfo.unCorrectInput();
  };
  render() {
    const { history, balance } = this.state;
    return (
      <div className={style.dashboard}>
        <Controls
          handleClickTransaction={this.handleClickTransaction}
          // withdraw={this.handleCkickWithdraw}
        />
        <Balance balance={balance} history={history} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
export default Dashboard;

// handleCkickWithdraw = (valueInput, name) => {
//   if (valueInput > 0) {
//     const operation = this.createNewOperation(name, valueInput);
//     this.setState(prevState => {
//       if (this.state.balance >= valueInput) {
//         return {
//           history: [operation, ...prevState.history],
//           balance: (prevState.balance -= Number(operation.amount))
//         };
//       }
//       this.noMoney();
//     });
//   } else {
//     this.unCorrectInput();
//   }
// };
// handleCkickDeposit = (valueInput, name) => {
//   if (valueInput > 0) {
//     const operation = this.createNewOperation(name, valueInput);
//     this.setState(prevState => {
//       return {
//         history: [operation, ...prevState.history],
//         balance: (prevState.balance += Number(operation.amount))
//       };
//     });
//   } else {
//     this.unCorrectInput();
//   }
// };
