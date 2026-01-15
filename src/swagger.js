const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express Swagger API",
      version: "1.0.0",
      description: "API simple avec Swagger + CI/CD + Render",
    },
  },
  apis: ["./src/**/*.js"],
};

module.exports = swaggerJsdoc(options);
