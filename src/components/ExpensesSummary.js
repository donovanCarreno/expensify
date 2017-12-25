import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

// export for testing
export const ExpensesSummary = ({ total, count }) => (
  <div>
    Viewing {count === 1 ? `1 expense totaling ${numeral(total / 100).format('$0,0.00')}` : `${count} expenses totaling ${numeral(total / 100).format('$0,0.00')}`}
  </div>
)

const mapStateToProps = (state) => ({
  total: expensesTotal(selectExpenses(state.expenses, state.filters)),
  count: selectExpenses(state.expenses, state.filters).length
})

export default connect(mapStateToProps)(ExpensesSummary)
