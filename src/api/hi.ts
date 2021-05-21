import express from 'express';
let router = express.Router();
router.get('/', (_req, res) => {
  res.send({"success": true, "message": "hi lol"})
});

module.exports = router;