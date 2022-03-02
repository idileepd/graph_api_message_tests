const express = require("express");
const controller = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json());


app.post("/puppeteer", async (req, res) => {
  console.log(req.body);
    const imageBuffer = await controller.puppeteerHtmlToImage(req.body.html);
    res.set("Content-Type", "image/png");
    return res.send(imageBuffer);
//   res.send("ok");
//   res.status(200).json({ cool: "cool" });
});

// app.post("/nodeHtml", async (req, res) => {
//   const imageBuffer = await controller
//     .nodeHtmlToImage({
//       //   output: "./image.png",
//       html: "<html><body>Hello world!</body></html>",
//     })
//     .then(() => res.send("The image was created successfully!"));
// });


app.post("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
