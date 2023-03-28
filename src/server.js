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
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(5000, () => {
    console.log("Listen on the port 5000...");
});