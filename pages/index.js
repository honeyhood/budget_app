import AddBudgetModal from "../components/AddBudgetModal";
import BudgetCard from "../components/BudgetCard";
import Header from "../components/Header";
import { useState } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";
import AddExpenseModal from "../components/AddExpenseModal";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import ViewExpensesModal from "../components/ViewExpensesModal";

export default function Home() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }
  return (
    <>
      <Header
        setActiveBudget={setShowAddBudgetModal}
        setActiveExpense={openAddExpenseModal}
      />
      <div className="grid grid-cols-card gap-[1rem] items-start m-2">
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpensesClick={() =>
                setViewExpensesModalBudgetId(budget.id)
              }
            />
          );
        })}
        <UncategorizedBudgetCard
          onAddExpenseClick={openAddExpenseModal}
          onViewExpensesClick={() =>
            setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
          }
        />
        <TotalBudgetCard />
      </div>
      <AddBudgetModal
        activeBudget={showAddBudgetModal}
        setActiveBudget={setShowAddBudgetModal}
      />
      <AddExpenseModal
        activeExpense={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        setActiveExpense={setShowAddExpenseModal}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </>
  );
}
