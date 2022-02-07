import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";
import { currencyFormatter } from "../utils/utils";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <div className={`modal flex flex-col ${budgetId != null && "modal-open"}`}>
      <div className="modal-box font-Montserrat">
        <div className="flex">
          <h1 className="card-title ">Расходы - {budget?.name}</h1>
          {budgetId !== UNCATEGORIZED_BUDGET_ID && (
            <button
              onClick={() => {
                deleteBudget(budget);
                handleClose();
              }}
              className="btn btn-sm btn-error btn-outline ml-3 rounded-full"
            >
              Удалить
            </button>
          )}
        </div>
        <div className="card p-2 flex-col">
          {expenses.map((expense) => (
            <div className="flex justify-between" key={expense.id}>
              <div>
                <h1>{expense.description}</h1>
              </div>
              <div className="flex">
                <div>{currencyFormatter.format(expense.amount)}</div>
                <button
                  onClick={() => deleteExpense(expense)}
                  className="btn btn-circle btn-outline btn-sm ml-3"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="modal-action">
          <button className="btn btn-md" onClick={handleClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
