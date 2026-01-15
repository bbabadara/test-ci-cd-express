const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /api/hello:
 *   get:
 *     summary: Retourne un message de test
 *     responses:
 *       200:
 *         description: Message OK
 */


app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello DevOps 🚀" });
});

module.exports = app;
