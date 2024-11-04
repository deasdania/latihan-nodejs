"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = require('path');
const PORT = 3000;
function init() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    // Serve static files from the public directory
    app.use(express_1.default.static(path.join(__dirname, 'public')));
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
