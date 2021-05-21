import express from 'express';
let router = express.Router();

router.use('/', (_req, _res, next) => {
console.log("api request received!");
  next();
});
router.get('/', (_req, res) => {
  return res.send("why u here?")
})
router.use('/hi', require('./hi'));


module.exports = router;