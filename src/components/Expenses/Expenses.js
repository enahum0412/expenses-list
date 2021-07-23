import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

function Expenses(props) {
  // const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredYear, setFilteredYear] = useState("Select");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // return expense.date.getFullYear().toString() === filteredYear;
    if (filteredYear !== "Select") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return null;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
