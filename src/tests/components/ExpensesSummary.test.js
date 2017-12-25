import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import totalExpenses from '../../selectors/expenses-total'

test('should render ExpensesSummary with 1 expense', () => {
  const count = 1
  const total = totalExpenses(expenses[0])
  const wrapper = shallow(<ExpensesSummary count={count} total={total} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with 2 expenses', () => {
  const count = 2
  const total = totalExpenses([expenses[0], expenses[1]])
  const wrapper = shallow(<ExpensesSummary count={count} total={total} />)
  expect(wrapper).toMatchSnapshot()
})
