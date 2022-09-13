import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const iterations = parseInt(process.env.HASH_ITERATIONS || "");

const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(64).toString("base64");
  const hash = crypto.pbkdf2Sync(password, salt, iterations, 64, "sha256").toString("base64");

  return {
    salt: salt,
    hash: hash,
  };
};

const makePasswordHashed = (plainPassword: string, salt: string) => {
  return crypto.pbkdf2Sync(plainPassword, salt, iterations, 64, "sha256").toString("base64");
};

export default { hashPassword, makePasswordHashed };