# 💰 Money Tracker App

A simple **MERN stack** application to track your income and expenses.  
Built with **MongoDB, Express, React, Node.js**, and uses **nodemon** for hot-reloading the backend.

---

## 🚀 Features

✅ Add new transactions (income or expenses)  
✅ See a running balance (turns red if negative!)  
✅ Stores data in MongoDB  
✅ Live updates on frontend

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite or CRA)
- **Backend:** Node.js, Express.js, nodemon
- **Database:** MongoDB (Mongoose ODM)
- **Deployment:** (Add later - e.g. Vercel, Render, Netlify)

---

## 📦 Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/money-tracker.git
cd money-tracker

2️⃣ Install dependencies for both frontend and backend
# Install backend dependencies
npm install

# If frontend is in /client folder, navigate there and install too
cd client
npm install

3️⃣ Set up environment variables

Create a .env file in the root:
MONGO_URL=YOUR_MONGO_CONNECTION_STRING
REACT_APP_API_URL=http://localhost:3020/api

# From root folder, run backend:
nodemon index.js

4️⃣ Run the app
# In another terminal, run frontend:
npm start  # if using CRA
# OR
npm run dev  # if using Vite

📂 Project Structure
money-tracker/
├── api/                # Express backend
│   ├── models/         # Mongoose models
│   ├── index.js        # Server entry point
│   ├── routes/         # API routes
├── client/             # React frontend (if separate)
│   ├── src/
│   ├── App.js
│   ├── ...
├── .env
├── package.json
├── README.md

🧩 To Do Next
 Add user authentication

 Add categories/tags for transactions

 Deploy backend and frontend online

 Add charts or graphs for better insights

📜 License
Open-source for learning and personal use!
