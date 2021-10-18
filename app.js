const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
var port = process.env.PORT || 8080;
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

app.get("/", function (req, res) {
  res.send("Proxy working");
});

app.listen(port, function () {
  console.log("Our app is running on " + port);
});
