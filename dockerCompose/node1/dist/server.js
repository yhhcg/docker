const express = require('express');
const app = express();
const router = express.Router();

router.get('/node1/cs', function (req, res, next) {
  res.status(200).send('node1');
});

app.use('/', router);

app.listen(3001);
