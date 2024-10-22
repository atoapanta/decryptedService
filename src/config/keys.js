import fs from "fs";
import forge from "node-forge";
import setting from "./setting.js";

const { PRI_KEY_PATH } = setting;

// Public Key PEM
const priKeyPem = fs.readFileSync(PRI_KEY_PATH, "utf8");

// Convert public key pem to forge pki
const privateKey = forge.pki.privateKeyFromPem(priKeyPem);

// Export public key
export { privateKey };
