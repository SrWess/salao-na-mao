const mongoose = require("mongoose");
const URI = "";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(URI)
  .then(() => console.log("DB is Up!"))
  .catch((err) => console.log(err));
