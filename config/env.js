import { config } from "dotenv";
config({path: `.env.${process.env.NODE_ENV||'development'}.local`})
export const{ host,DB_URI,JWT_SECRET,JWT_EXPIRE,ARCJET_ENV,ARCJET_KEY}= process.env;
