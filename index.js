const express = require('express')
const { exec } = require("child_process");
const app = express()
const port = 3000

app.use(express.static('./mdbook/documentation/book/'));

app.get('/api/build', (req, res) => {
  exec(".\\mdbook\\mdbook.exe build .\\mdbook\\documentation\\", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})