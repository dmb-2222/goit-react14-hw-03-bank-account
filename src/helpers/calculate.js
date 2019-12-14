const calculate = (history, operationType) => {
  return history
    .filter(el => el.type === operationType)
    .reduce((acc, el) => acc + Number(el.amount), 0);
};
export default calculate;
