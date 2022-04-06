import { useState } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";

export default function AddExpenseModal({
  activeExpense,
  setActiveExpense,
  defaultBudgetId,
}) {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [budgetId, setBudgetId] = useState(UNCATEGORIZED_BUDGET_ID);
  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: description,
      amount: parseFloat(amount),
      budgetId: budgetId,
    });
    setActiveExpense(false);
    setDescription("");
    setAmount("");
    setBudgetId(UNCATEGORIZED_BUDGET_ID);
  }
  return (
    <div className={activeExpense ? "modal modal-open" : "modal"}>
      <div className="modal-box font-Montserrat">
        <form className="form-control">
          <h1 className="m-1 font-bold">Новые расходы</h1>
          <label className="label">
            <span className="label-text">Описание</span>
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="input bg-base-300"
          ></input>
          <label className="label">
            <span className="label-text">Сумма</span>
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="input bg-base-300"
          ></input>
          <label className="label">
            <span className="label-text">Название бюджета</span>
          </label>
          <form className="form-control">
            <select
              defaultvalue={defaultBudgetId}
              value={budgetId}
              onChange={(e) => setBudgetId(e.target.value)}
              className="select bg-base-300"
            >
              <option selected="selected" id={UNCATEGORIZED_BUDGET_ID}>
                Без категории
              </option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </select>
          </form>
        </form>
        <div className="modal-action">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary btn-md text-white"
          >
            Создать
          </button>
          <button
            className="btn btn-md"
            onClick={() => setActiveExpense(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
