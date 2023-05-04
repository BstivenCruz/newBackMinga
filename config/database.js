import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

  export default mongoose