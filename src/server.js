// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "0.0.0.0",
//     routes: {
//       cors: {
//         origin: ["*"],
//       },
//     },
//   });

//   server.route(routes);

//   await server.start();
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };

// init();
const express = require('express')
https://runkit.com/const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})