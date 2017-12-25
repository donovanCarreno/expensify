export default (expenses) => {
  if (!expenses) return 0
  if (!Array.isArray(expenses)) return expenses.amount
  return expenses.reduce((acc, cv) => {
    return acc += cv.amount
  }, 0)
}
