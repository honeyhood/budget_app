import { useState } from "react";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ activeBudget, setActiveBudget }) {
  const [name, setName] = useState();
  const [max, setMax] = useState();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: name,
      max: parseFloat(max),
    });
    setActiveBudget(false);
    setName("");
    setMax("");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            className="input bg-base-300"
          ></input>
          <label className="label">
            <span className="label-text">Максимальные расходы</span>
          </label>
          <input
            value={max}
            onChange={(e) => setMax(e.target.value)}
            required
            type="text"
            className="input bg-base-300"
          ></input>
        </div>
        <div className="modal-action">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-md btn-primary text-white"
          >
            Создать
          </button>
          <button className="btn btn-md" onClick={() => setActiveBudget(false)}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
