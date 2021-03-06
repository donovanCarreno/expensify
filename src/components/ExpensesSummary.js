import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

// export for testing
export const ExpensesSummary = ({ total, count }) => {
  const expenseWord = count === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{count}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  total: expensesTotal(selectExpenses(state.expenses, state.filters)),
  count: selectExpenses(state.expenses, state.filters).length
})

export default connect(mapStateToProps)(ExpensesSummary)
