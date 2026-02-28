import { app } from "./src/app.js";
import connectDB from "./src/db/db.js";

// connect to database first, then start the server
async function start() {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();