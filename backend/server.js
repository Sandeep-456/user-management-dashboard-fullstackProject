// server.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
require("./database"); // ensures DB is initialized

const app = express();
const PORT = 8080;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://user-management-dashboard-f-git-8a08ae-sandys-projects-e9cf1f4a.vercel.app",
    ],
  })
);
app.use(express.json());

// health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// user routes
app.use("/api/users", userRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
