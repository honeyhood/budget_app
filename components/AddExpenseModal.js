import { useRef } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";

export default function AddExpenseModal({
  activeExpense,
  setActiveExpense,
  defaultBudgetId,
}) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });
    setActiveExpense(false);
  }
  return (
    <div className={activeExpense ? "modal modal-open" : "modal"}>
      <div className="modal-box font-Montserrat">
        <div className="form-control" onSubmit={handleSubmit}>
          <h1 className="m-1 font-bold">Новые расходы</h1>
          <label className="label">
            <span className="label-text">Описание</span>
          </label>
          <input
            ref={descriptionRef}
            required
            type="text"
            className="input bg-base-200"
          ></input>
          <label className="label">
            <span className="label-text">Сумма</span>
          </label>
          <input
            ref={amountRef}
            required
            type="text"
            className="input bg-base-200"
          ></input>
          <label className="label">
            <span className="label-text">Название бюджета</span>
          </label>
          <select
            value={defaultBudgetId}
            ref={budgetIdRef}
            className="input bg-base-200"
          >
            <option id={UNCATEGORIZED_BUDGET_ID}>Без категории</option>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-action">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-md btn-primary"
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
