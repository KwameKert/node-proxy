const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://165.227.192.124:8080",
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {
      [`^/api`]: "/api/v1",
    },
  })
);
app.listen(5000);
