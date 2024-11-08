import { Request, Response } from "express";
import { toDataURI } from "../utils/encode";
import { handleUpload } from "../utils/cloudinary";

export default {
  async single(req: Request, res: Response): Promise<void> {
    if (req?.file === undefined) {
      res.status(400).send({
        message: "No file uploaded",
        data: null,
      });
      return
    }

    const dataURI = toDataURI(req.file);

    try {
      const result = await handleUpload(dataURI);
      res.status(200).send({ message: "File uploaded", data: result });
    } catch (error) {
      const _err = error as Error;
      res.status(400).send({ message: "Error uploading file", data: _err.message });
    }
  },

  async multiple(req: Request, res: Response): Promise<void> {
    if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
      res.status(400).send({
        message: "No files uploaded",
        data: null,
      });
      return
    }

    // Normalize req.files to always be an array
    const files = Array.isArray(req.files) ? req.files : [req.files];

    // Create an array to store upload promises
    const dataURIs: Promise<any>[] = [];

    // Use a for loop to process each file and push the promises into the array
    for (const file of files) {
      const dataURI = toDataURI(file); // Convert the file to a data URI
      const uploadPromise = handleUpload(dataURI); // Handle the upload asynchronously
      dataURIs.push(uploadPromise); // Add the upload promise to the array
    }

    try {
      const results = await Promise.all(dataURIs);
      res.status(200).send({ message: "Files uploaded", data: results });
    } catch (error) {
      const _err = error as Error;
      res.status(400).send({ message: "Error uploading files", data: _err.message });
    }
  },
};
