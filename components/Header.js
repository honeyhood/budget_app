export default function Header({ setActiveBudget, setActiveExpense }) {
  return (
    <div className="mx-2 my-6 flex items-center justify-center rounded-xl border bg-gray-100 p-3 sm:justify-between md:mx-6">
      <div className="">
        <h1 className="font-Montserrat ml-2 hidden text-sm font-bold text-black sm:inline md:text-lg lg:text-xl">
          Budget App
        </h1>
      </div>
      <div className="flex">
        <button
          className="btn btn-xs md:btn-sm lg:btn-md btn-primary font-Montserrat my-2 mr-2 text-white"
          onClick={() => setActiveBudget(true)}
        >
          Добавить бюджет
        </button>
        <button
          className="btn btn-xs md:btn-sm lg:btn-md btn-outline font-Montserrat my-2"
          onClick={setActiveExpense}
        >
          Добавить расходы
        </button>
      </div>
    </div>
  );
}
