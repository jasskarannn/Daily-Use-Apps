const balance = document.getElementById('balance');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
// Initialise transactions from Local Storage
let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction function
function addTransaction(e) {
  e.preventDefault();
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  
}

function generateID() {
  return new Date().valueOf();
}


const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');

// Add transactions to list
function addTransactionDOM(transaction) {
  // - for expense and + for income
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  // add class - or + on input
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}


// update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `${total}`;
  money_plus.innerText = `${income}`;
  money_minus.innerText = `${expense}`;
}

// Remove transaction
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);