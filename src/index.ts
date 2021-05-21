import express from 'express';
import cors from "cors";
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((_req, _res, next) => { next(); }, cors({maxAge: 84600}));
app.use('/api', require('./api'))

app.get('/', (_req, res) => {
  console.log(process.env)
  res.send('Hello world!');
});

console.log(process.env);

 app.listen(process.env.PORT, () => {
  console.log("❇️ Express server is running on port", process.env.PORT);
});
