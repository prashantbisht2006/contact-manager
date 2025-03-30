import { Router } from "express";
const auth = Router();
import authorize from "../middleware/auth.middleware.js";

import { signupuser } from "../controller/auth.controller.js";
import { signin } from "../controller/auth.controller.js";

auth.post("/sign-in",signin);
auth.post("/sign-up",signupuser);

export default auth;
// this route is to get the login credential of the users
