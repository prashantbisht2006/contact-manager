import express from "express";
import { host } from "./config/env.js";
import connectdatabase from "./database/mongodb.js";
import userdetails from "./routes/user.route.js";
import contacts from "./routes/contacts.route.js";
import authrouter from "./routes/auth.route.js";
import arcjetmiddleware from "./middleware/arcjet.middleware.js";
console.log("Auth routes loaded:", authrouter);

const PORT = process.env.PORT || host;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(arcjetmiddleware);

app.use("/api/v1/auth", authrouter);

app.use("/api/v1/users", userdetails);
app.use("/api/v1/contacts", contacts);

app.get("/", (req, res) => {
  res.json({ sucess: true, title: " contact manager " });
});

console.log("port=", PORT);
app.listen(PORT, async () => {
  console.log(`the app is running in local host ${PORT}`);
  await connectdatabase();
});
