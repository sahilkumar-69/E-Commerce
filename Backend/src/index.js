import { app } from "./app.js";
import { PORT } from "./constants.js";
import { dbConnect } from "./Database/db.js";

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      if (error) {
        console.log("error while listning on port", error);
      } else {
        console.log("Sever is running on port : ", PORT);
      }
    });
  })
  .catch((error) => {
    console.log(" error from dbconnect catched in index.js  ", error);
  });
