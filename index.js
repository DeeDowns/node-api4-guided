const server = require("./api/server.js");

//make port dynamic
//heroku will add a PORT variable to the environment (the server the app runs on)
//we can read it from there using the process.env object
const port = process.env.PORT  ||  5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
