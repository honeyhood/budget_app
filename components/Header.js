export default function Header({ setActiveBudget, setActiveExpense }) {
  return (
    <div className="navbar border m-2 rounded-xl mx-6 mb-6 mt-6 bg-gray-100">
      <div className="px-2 mx-2 navbar-start">
        <h1 className="text-sm md:text-lg lg:text-xl font-bold font-Montserrat text-black">
          Budget App
        </h1>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md btn-primary text-white m-2 font-Montserrat"
          onClick={() => setActiveBudget(true)}
        >
          Добавить бюджет
        </button>
        <button
          className="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md btn-outline m-2 font-Montserrat"
          onClick={setActiveExpense}
        >
          Добавить расходы
        </button>
      </div>
    </div>
  );
}
