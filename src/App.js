import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [transactions, setTransactions] = useState([]);

  // ✅ 1️⃣ Correct getTransactions
  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + "/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  // ✅ 2️⃣ Fetch once when loaded
  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transactions";

    const price = parseFloat(name.split(" ")[0]); // Make sure it's number!

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        name: name.substring(name.indexOf(" ") + 1),
        date,
        desc,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);

        setName("");
        setDate("");
        setDesc("");

        getTransactions().then((transactions) => {
          setTransactions(transactions);
        });
      })
      .catch((err) => console.error("Failed to send transaction:", err));
  }

  // ✅ 3️⃣ Calculate total balance
 const balance = transactions.reduce(
  (total, transaction) => total + parseFloat(transaction.price),
  0
);





  return (
    <main>
      <h1 className={`balance ${balance < 0 ? "negative" : "positive"}`}>
  ${balance.toFixed(2)}
</h1>

      <form onSubmit={addNewTransaction}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="+/-Price Item_Name"
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
            placeholder="Enter date"
          />
        </div>
        <div>
          <input
            type="text"
            value={desc}
            onChange={(ev) => setDesc(ev.target.value)}
            placeholder="Description"
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>

      <div className="Transactions">
        {transactions.map((transaction) => (
          <div
            key={transaction._id}
            className={
              transaction.price < 0
                ? "Transactions expense"
                : "Transactions income"
            }
          >
            <div className="left">
              <div className="name">{transaction.name}</div>
              <div className="description">{transaction.desc}</div>
            </div>
            <div className="right">
              <div className="amount">${transaction.price}</div>
              <div className="date">{transaction.date.slice(0, 10)}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
