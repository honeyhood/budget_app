export default function Header({ setActiveBudget, setActiveExpense }) {
  return (
    <div className="navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-xl mx-6 mb-6 mt-6">
      <div className="px-2 mx-2 navbar-start">
        <h1 className="text-lg font-bold font-Montserrat">Budget App</h1>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-md btn-outline m-2 font-Montserrat"
          onClick={() => setActiveBudget(true)}
        >
          Добавить бюджет
        </button>
        <button
          className="btn btn-md btn-outline m-2 font-Montserrat"
          onClick={setActiveExpense}
        >
          Добавить расходы
        </button>
      </div>
    </div>
  );
}
