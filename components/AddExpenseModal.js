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
    descriptionRef.current.value = "";
    amountRef.current.value = "";
    budgetIdRef.current.value = UNCATEGORIZED_BUDGET_ID;
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
            ref={descriptionRef}
            type="text"
            className="input bg-base-300"
          ></input>
          <label className="label">
            <span className="label-text">Сумма</span>
          </label>
          <input
            ref={amountRef}
            type="number"
            className="input bg-base-300"
          ></input>
          <label className="label">
            <span className="label-text">Название бюджета</span>
          </label>
          <form className="form-control">
            <select
              defaultvalue={defaultBudgetId}
              ref={budgetIdRef}
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
            className="btn btn-md btn-primary text-white"
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
