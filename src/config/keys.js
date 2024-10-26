import fs from "fs";
import forge from "node-forge";
import setting from "./setting.js";

const { PRIVATE_KEY } = setting;

// Convert public key pem to forge pki
const privateKey = forge.pki.privateKeyFromPem(PRIVATE_KEY);

// Export public key
export { privateKey };
