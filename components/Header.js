export default function Header({ setActiveBudget, setActiveExpense }) {
  return (
    <div className="flex border rounded-xl mx-2 my-6 p-3 md:mx-6 bg-gray-100 items-center justify-center sm:justify-between">
      <div className="">
        <h1 className="hidden sm:inline ml-2 text-sm md:text-lg lg:text-xl font-bold font-Montserrat text-black">
          Budget App
        </h1>
      </div>
      <div className="flex">
        <button
          className="btn btn-xs md:btn-sm lg:btn-md btn-primary text-white mr-2 my-2 font-Montserrat"
          onClick={() => setActiveBudget(true)}
        >
          Добавить бюджет
        </button>
        <button
          className="btn btn-xs md:btn-sm lg:btn-md btn-outline my-2 font-Montserrat"
          onClick={setActiveExpense}
        >
          Добавить расходы
        </button>
      </div>
    </div>
  );
}
