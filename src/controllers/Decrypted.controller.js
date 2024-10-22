import forge from "node-forge";
import { compactDecrypt } from "jose";
import { privateKey } from "../config/keys.js";

export const decrypted = async (req, res) => {
  try {
    const xKey = req.headers["x-key"];
    const { jwt } = req.body;

    const decodedKeyBase64 = forge.util.decode64(xKey);

    const decryptedKey = forge.util.decode64(
      privateKey.decrypt(decodedKeyBase64)
    );

    const AesInt8 = Uint8Array.from(
      decryptedKey.split("").map((letter) => letter.charCodeAt(0))
    );

    // Decrypt the message using compactDecrypt
    const jwde = await compactDecrypt(jwt, AesInt8);

    // // Decode the plaintext
    const dataPlain = new TextDecoder().decode(jwde.plaintext);

    // // Return the decrypted data
    return res.json(JSON.parse(dataPlain));
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
