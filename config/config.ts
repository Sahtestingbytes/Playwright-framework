import dotenv from "dotenv";
import path from "path";
import fs from "fs";

const envPath = path.resolve(
    __dirname,
    "../Environments/.env.qa"
);

console.log("Env path:", envPath);
console.log("File exists:", fs.existsSync(envPath));

console.log("File content:");
console.log(fs.readFileSync(envPath, "utf8"));

dotenv.config({
    path: envPath,
    override: true
});

console.log("BASE_URL:", process.env.BASE_URL);

export const config = {
    baseURL: process.env.BASE_URL || "",
    apiBaseURL: process.env.API_BASE_URL || "",
    username: process.env.USERNAME || "",
    password: process.env.PASSWORD || ""
};