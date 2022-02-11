import { currencyFormatter } from "../utils/utils";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({
  name,
  amount,
  max,
  onAddExpenseClick,
  hideButtons,
  onViewExpensesClick,
}) {
  return (
    <div className="card font-Montserrat mx-3 mb-6 w-full rounded-lg border bg-gray-100 md:w-fit">
      <div className="card-body">
        <div className="title flex items-baseline justify-between pb-3">
          <div className="mr-2 text-[1.2em] font-medium">{name}</div>
          <div className="flex items-baseline text-[1.2em] font-medium">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="ml-1 text-[14px] font-light text-gray-400">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </div>
        <div className="p-3">
          {max && <ProgressBar value={amount} max={max} />}
        </div>
        {!hideButtons && (
          <div className="flex justify-between pt-3">
            <button
              className="btn btn-md btn-primary mr-2 text-white"
              onClick={onAddExpenseClick}
            >
              Добавить
            </button>
            <button
              className="btn btn-md btn-outline"
              onClick={onViewExpensesClick}
            >
              Подробнее
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
