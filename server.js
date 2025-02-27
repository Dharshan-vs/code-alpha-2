const express = require("express");
const path = require("path");
const userRoutes = require("./userRoutes");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/api/users", userRoutes);
app.use((req, res) => {
    res.status(404).send("Page not found");
  });
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});