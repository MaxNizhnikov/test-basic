const app = require('express')()
const port = 3100;
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: { '12345': '12345' }
}))

app.get('/', (req, res) => {
  console.log(req.headers);
  res.json({name: "Max", surname: "Nizhnikov"})
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));