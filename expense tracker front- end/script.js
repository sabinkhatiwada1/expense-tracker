let total = 0;

const button = document.getElementById("addExpenseButton");

button.addEventListener("click", addExpense);

function addExpense() {

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    const expenseList = document.getElementById("expenseList");

    const expense = document.createElement("div");

    expense.className = "expense-item";

    expense.innerHTML = `
        <span>${name}</span>
        <span>Rs. ${amount}</span>
    `;

    expenseList.appendChild(expense);

    total = total + amount;

    document.getElementById("totalAmount").textContent = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}