import { toast } from "react-toastify";

export const noMoney = () =>
toast("На счету недостаточно средств для проведения операции!", {
  autoClose: 5000
});
export const unCorrectInput = () =>
toast("Введите сумму для проведения операции!", { autoClose: 5000 });