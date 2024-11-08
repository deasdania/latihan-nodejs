import express, { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import { handleUpload } from './utils/cloudinary';
import router from './routes/api';

// Set up the port for the server
const port: number = 3000;
const app = express();

// Middleware to handle file upload with express-fileupload
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: 'uploads',
    })
);

app.use("/api", router);

// POST route to handle file uploads
app.post('/upload', async (req: Request, res: Response) => {
    const key = 'file'
    // Ensure that req.files is defined and contains files
    if (!req.files || !req.files[key]) {
        res.status(400).json({ status: 400, message: 'file is required' });
        return
    }

    // Check if the uploaded photos are an array or a single file
    const photos = Array.isArray(req.files[key]) ? req.files[key] : [req.files[key]];

    // Array to store results for each upload
    const uploadPromises = photos.map(async (photo) => {
        try {
            const result = await handleUpload(photo.tempFilePath);
            return { status: 200, message: 'Success', result };
        } catch (error) {
            return { status: 500, message: 'Upload failed', error };
        }
    });
    
    // Wait for all upload operations to complete
    const uploadResults = await Promise.all(uploadPromises);

    // Cleaning 
    const unlinkPromises = photos.map(async (photo) => {
        fs.unlink(photo.tempFilePath, (err) => {
        if (err) {
            console.error('Failed to delete temporary file', err);
        };
    })});

    const unlinkResults = await Promise.all(unlinkPromises);
    console.log("cleaning success");


    // Send a response with the upload results for each file
    res.json({
        status: 200,
        message: 'Process completed',
        results: uploadResults,
    });
    return
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
