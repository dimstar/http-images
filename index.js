const express = require('express');
const fs = require('fs-extra');
const app = express();
const port = 1985;

app.get('/assets/:asset', (req, res) => {
  let {asset} = req.params;
  console.log(asset);
  // res.send(`you want some ${asset}? /assets/${asset}`);

  fs.readFile(`./assets/${asset}`, function(err, data) {
    res.writeHead(200, {
      "Content-Type": "image/jpg",
    });
    res.write(data);
    res.end();
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))