const express = require("express");
/*Makes it so mongoose.js is required
to run when index.j is running*/
require("./db/mongoose.js");
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const app = express();
const port = process.env.PORT || 3000;

/*Parses incoming json to an object
so it can be accessed by the request handlers*/
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
