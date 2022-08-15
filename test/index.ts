import { Client } from "../src";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "./.env") });

const client = new Client();

client.on("ready", (client) => {
  console.log(client.user?.user.username);
});

client.login(process.env.token);
