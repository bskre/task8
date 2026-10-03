const calculateTotal = (expenses) =>
    expenses.map(exp => exp.amount).reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0)

const calculateCategoryTotal = (expenses, category) =>
    calculateTotal(expenses.filter(
        exp => exp.category == category
    ))

const findLargestExpense = (expenses) =>
    expenses.filter(exp => exp.amount == Math.max(
        ...expenses.map(exp => exp.amount)
    ))

const createExpenseSummary = (expenses) =>({
    id: expenses.length
        ? Math.max(...expenses.map(e => e.id)) + 1
        : 1,
    foodTotal: calculateCategoryTotal(expenses, 'food'),
    transportTotal: calculateCategoryTotal(expenses, 'transport'),
    largestExpense: findLargestExpense(expenses)
})
    


const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));

