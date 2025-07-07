## 📋 Team Members Dashboard

A full-stack web application to manage and display team member data. Built with **Node.js**, **Express**, **MongoDB**, and **EJS**.
Users can add, view, edit, and delete team members using a responsive and user-friendly interface.

---

### 🚀 Features

* ✅ Add new members with validation
* ✅ View all members on the homepage
* ✅ Display detailed profile of each member
* ✅ Edit existing member information
* ✅ Delete members
* ✅ Optional image URL support
* ✅ Form error handling with helpful messages

---

### 📁 Folder Structure

```
project-2/
├── models/                 # Mongoose schema for Member
├── routes/                 # Express routes
├── views/                  # EJS templates (add, edit, index, member)
├── middlewares/            # Input validation middleware
├── public/                 # (Optional) Static assets
├── .env                    # Environment config (Mongo URI)
├── app.js                  # Main server file
├── package.json
```

---

### ⚙️ Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/nourinawadd/IEEE-BE-NodeJS-Beginner.git
cd IEEE-BE-NodeJS-Beginner/project-2
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the `project-2` directory with:

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
```

> Replace with your MongoDB connection string.

#### 4. Run the app

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

---

### 👩‍💻 Author

Built with ❤️ by [Nourin Awad](https://github.com/nourinawadd)

---
