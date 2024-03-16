const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE341 Docs",
    description: "API documentation for CSE341",
  },
  host: "qsoapi.onrender.com",
  schemes: ["https"], // Using "http" for local development
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
