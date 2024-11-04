import express, { Request, Response } from "express";
import cors from "cors";
const path = require('path');

const PORT = 3000;

function init() {
  const app = express();
  app.use(cors())
  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Route for /hello
  app.get('/hello', (req, res) => {
    res.json({
        message: "Success fetch message",
        data: "Hello World!"
    });
  });
  
  // Route for /user
  app.get('/user', (req, res) => {
    res.json({
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@mail.com"
        }
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}


init();
