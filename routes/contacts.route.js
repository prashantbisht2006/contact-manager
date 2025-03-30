import { Router } from "express";
const contacts = Router();
import authorize from "../middleware/auth.middleware.js";
import getcontactdetail from "../controller/contact.controller.js";

contacts.post("/",authorize,getcontactdetail);

export default contacts;