const express = require('express');
const app = express();
const router = express.Router();

router.get('/node2/cs', function (req, res, next) {
  res.status(200).send('node2');
});

app.use('/', router);

app.listen(3002);
