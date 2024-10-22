import { Router } from "express";
import { decrypted } from "../controllers/Decrypted.controller.js";

const router = Router();

/**
 * @swagger
 * /api/V1/decrypted:
 *   post:
 *     summary: Decrypt data
 *     description: Decrypts the provided JWT using a decrypted key and returns the original data.
 *     tags:
 *       - Decrypted data endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jwt:
 *                 type: string
 *                 description: The JWT token to be decrypted.
 *                 example: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..evIswN9mCAt9JNfZ.oHtLvCHeYTp6G2wiEhMfL3ny-56OHVtYRixdXQYw0E1ZLs4Vd82h01DL1DolVkbZOv2iwfYGw42L.Hb7B58Thc4gBjlIbEKLekQ"
 *     parameters:
 *       - in: header
 *         name: x-key
 *         required: true
 *         description: The encrypted symmetric key used for decryption.
 *         schema:
 *           type: string
 *           example: "vNHR7naC70ccSSxJwfV1byc/a1HCZunX3xKIDCYMUB2pZ9O+RtoyJ+COA4D1nrUkqZsM6vxFbd1axL22JIn4kz7drNkCppqpkJFFWs/1RHLOFlkEthl0u3AgFnIz1Lt/pK3H+77/ucK/fsBjd9JL37/jSeYTMQQtvEld9lFh447SmXT8tpvo3CjWzZMZzrOKF9qSnFi8T6z41OxuuS7h+TSSQmmW+vxJwM6872Wd/dcMqYoY8YVptRO4LQ6LuGktS6L2PPz+h7EXbRLoppIUN92ua4VDCEaWzUBOQVNp5fKwAltZeNGOVK899Sxt6rZEInhA+foVU6+ihPW7V8mq8o9NLarHjLOQKE2zaeo/VRAS/vLnF06iqd6bRtDGlrOgqx6eun84Cu1hHtM+FZYxn5R2yahx0+hygPo+SdaDd18tejN6qsvaTAdnIL2jQEV8l2fpyVpdzvmDmoZFof+Fzf1+tEsv2YhuKfTOU33BY7C6ePcAtnrw0EFpAlJjZPoESe98S934t3FfwEXEyFNH0aCFzQsvoQPBDELrsNKPHqAD4Hqru/Nwve8NX/NlZVQh5DFx7NI75Dvf82F34clIlK/VDC6RsVPyxH+5ugU49RpASM1jw9zRAjNWAnrqWHMDk4mm9a/FH9f7YWaow1ddZoNgipJuNgsELrZwZVRArzU="
 *     responses:
 *       200:
 *         description: Successfully decrypted the data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The original decrypted data.
 *                   example:
 *                     {
 *                       "name": "Alexander Dev",
 *                       "email": "xander.dev@example.com"
 *                     }
 *       500:
 *         description: Internal server error.
 */
router.post("/decrypted", decrypted);

export default router;
