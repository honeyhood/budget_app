import { useRef } from "react";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ activeBudget, setActiveBudget }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    setActiveBudget(false);
  }
  return (
    <div className={activeBudget ? "modal modal-open" : "modal"}>
      <div className="modal-box font-Montserrat">
        <div className="form-control" onSubmit={handleSubmit}>
          <h1 className="m-1 font-bold">Новый бюджет</h1>
          <label className="label">
            <span className="label-text">Название</span>
          </label>
          <input
            ref={nameRef}
            required
            type="text"
            className="input bg-base-200"
          ></input>
          <label className="label">
            <span className="label-text">Максимальные расходы</span>
          </label>
          <input
            ref={maxRef}
            required
            type="text"
            className="input bg-base-200"
          ></input>
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
            className="btn btn-md btn"
            onClick={() => setActiveBudget(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
